<template>
  <div class="card">
    <div class="card bg-dark text-white text-left" style="position: relative">
      <img
        class="card-img-top img-cover"
        style="height: 155px"
        :src="info.imageUrl"
        alt=""
        @click="onClickRoom(info.id)"
        @keydown="handleKeyDown"
      />
      <i
        class="bi bi-circle-fill"
        style="
          position: absolute;
          top: -3px;
          right: 2px;
          font-size: 40px;
        "
      ></i>
      <i
        v-if="!isWish"
        class="bi bi-heart"
        style="
          position: absolute;
          top: 10px;
          right: 10px;
          color: black;
          font-size: 24px;
          transition: transform 0.2s ease-in-out;"
        @click="addToWish(info.id)"
        @keydown="handleKeyDown"
        @mouseover="handleMouseEnter"
        @mouseout="handleMouseLeave"
        @focus="handleMouseEnter"
        @blur="handleMouseLeave"
      ></i>
      <i
        v-if="isWish"
        class="bi bi-heart-fill"
        style="
          position: absolute;
          top: 10px;
          right: 10px;
          color: red;
          font-size: 24px;
          transition: transform 0.2s ease-in-out;"
        @click="deleteWish()"
        @keydown="handleKeyDown"
        @mouseover="handleMouseEnter"
        @mouseout="handleMouseLeave"
        @focus="handleMouseEnter"
        @blur="handleMouseLeave"
      ></i>
    </div>
    <div class="card-body text-left" @click="onClickRoom(info.id)" @keydown="handleKeyDown">
      <h5 class="card-text">
        {{ info.title }}
      </h5>
      <p class="card-text">
        <i class="bi bi-geo-alt-fill" style="color: green"></i>
        {{ info.category }}
      </p>
      <p class="card-text">
        <i class="bi bi-house-fill"
         style="color: Teal"></i>
        {{ info.content }}
      </p>
      <del class="card-text">
        $ {{ info.origin_price }} TWD
      </del>
      <p class="card-text">
        $ {{ info.price }} TWD
      </p>
      <p class="card-text">
        <i class="bi bi-star-fill" style="color: DarkKhaki"></i>
        {{ info.unit }} · {{ info.description }}則評論
      </p>
    </div>
  </div>
</template>

<script>
export default {
  inject: [
    'emitter',
  ],
  props: {
    info: {},
    wishList: {},
    infoList: {},
  },
  data() {
    return {
      isWish: false,
      wishId: '',
    };
  },
  methods: {
    addToWish(roomId) {
      // localStorage.removeItem('wishList');
      let wishListArr = localStorage.getItem('wishList');
      wishListArr = JSON.parse(wishListArr);
      if (!wishListArr) {
        wishListArr = [];
      }
      wishListArr.push(roomId);
      wishListArr = JSON.stringify(wishListArr);
      localStorage.setItem('wishList', wishListArr);
      this.emitter.emit('push-message', {
        title: '加入收藏成功',
      });

      this.emitter.emit('home-update-wishListNum');
      this.emitter.emit('AllRoomView-update');
      this.isWish = true;
    },
    deleteWish() {
      const wishListString = localStorage.getItem('wishList');
      let wishListArr = JSON.parse(wishListString);
      const index = wishListArr.indexOf(this.info.id);
      if (index !== -1) {
        wishListArr.splice(index, 1);
      }
      wishListArr = JSON.stringify(wishListArr);
      localStorage.setItem('wishList', wishListArr);
      this.emitter.emit('push-message', {
        title: '刪除收藏成功',
      });

      this.emitter.emit('home-update-wishListNum');
      this.emitter.emit('AllRoomView-update');
      this.isWish = false;
    },
    filterWishList() {
      this.isWish = false;
      const wishListString = localStorage.getItem('wishList');
      const wishListArr = JSON.parse(wishListString);
      wishListArr.forEach((res) => {
        if (this.info.id === res) {
          this.isWish = true;
        }
      });
    },
    handleKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // 防止空格键触发页面滚动
      }
    },
    onClickRoom(id) {
      this.$router.push(`/room/${id}`);
    },
    handleMouseEnter(event) {
      const item = event;
      item.target.style.transform = 'scale(1.2)';
    },
    handleMouseLeave(event) {
      const item = event;
      item.target.style.transform = 'scale(1)';
    },
  },
  // 如果HouseInfo的組件創建完成前，wishList已經拿到資料了，就需要在created觸發
  created() {
    this.filterWishList();
  },

  // 如果HouseInfo的組件創建完成後，wishList才拿到資料，就需要在watch觸發
  watch: {
    wishList() {
      this.filterWishList();
    },
    infoList() {
      this.filterWishList();
    },
  },
};
</script>
