<!-- eslint-disable vuejs-accessibility/iframe-has-title -->
<template>
  <Loading :active="isLoading">
    <img src="@/assets/loadingAni.gif" alt="Loading..." style="width:100px"/>
  </Loading>
  <div class="container-fluid mt-5"
       style="display: flex; justify-content: center;
       align-items: center;
       flex-direction: column;">
            <h3 style="font-weight: bold;">心願單</h3>
            <i class="bi bi-heart-fill" style="color:red; fontSize:20px"></i>
            <h6>已收藏{{infoList.length}}間</h6>
  </div>
  <div class="px-5">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-3 col-lg-2 px-3 mb-5"
      v-for="(item,key) in infoList" :key="'content'+key">
          <WishListInfo :info="item" @delet-wish="deleteWish"></WishListInfo>
      </div>
    </div>
  </div>
</template>

<script>
import WishListInfo from '@/components/WishListInfo.vue';
import emitter from '@/methods/emitter';

export default {
  components: {
    WishListInfo,
  },
  data() {
    return {
      isLoading: false,
      infoList: [],
      allRoomInfo: [],
    };
  },
  created() {
    this.getWishList();
  },
  methods: {
    getWishList() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.allRoomInfo = res.data.products;
          console.log('wishList.Vue 取得所有房間列表成功', this.allRoomInfo[0].id);
          this.createWishList();
        } else {
          console.log('wishList.Vue 取得所有房間列表失敗');
        }
        this.isLoading = false;
      });
    },
    createWishList() {
      const wishListString = localStorage.getItem('wishList');
      const wishListArr = JSON.parse(wishListString);
      const wishListData = [];

      // Object.keys(this.allRoomInfo).forEach((res) => {
      //   for (let i = 0; i < wishListArr.length; i++) {
      //     console.log(wishListArr);
      //     if (res.id === wishListArr[i]) {
      //       wishListData.push(this.allRoomInfo[res]);
      //     }
      //   }
      // });

      this.allRoomInfo.forEach((res) => {
        for (let i = 0; i < wishListArr.length; i++) {
          if (res.id === wishListArr[i]) {
            wishListData.push(res);
          }
        }
      });

      this.infoList = wishListData;
      console.log('wishListData', this.infoList);
    },
    deleteWish(deleteId) {
      const wishListString = localStorage.getItem('wishList');
      let wishListArr = JSON.parse(wishListString);
      const deleteIndex = wishListArr.indexOf(deleteId);
      if (deleteIndex !== -1) {
        wishListArr.splice(deleteIndex, 1);
      }
      wishListArr = JSON.stringify(wishListArr);
      localStorage.setItem('wishList', wishListArr);
      emitter.emit('push-message', {
        title: '刪除收藏成功',
      });
      emitter.emit('home-update-wishListNum');
      emitter.emit('AllRoomView-update');
      this.getWishList();
    },
  },
};
</script>
