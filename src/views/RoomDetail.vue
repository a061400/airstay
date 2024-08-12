<template>
<Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="row justify-content-center">
      <article class="col-8">
        <h2>{{ roomInfo.title }}</h2>
        <img :src="roomInfo.imageUrl" alt="" class="img-fluid mb-3" />
        <div>{{ roomInfo.category }}</div>
        <div>{{ roomInfo.content }}</div>
        <div><i class="bi bi-star-fill"></i>
        {{ roomInfo.unit }} · {{ roomInfo.description }}則評價</div>
      </article>
      <div class="col-4">
        <div class="h5" v-if="!roomInfo.price">
          {{ roomInfo.origin_price }} 元
        </div>
        <del class="h6" v-if="roomInfo.price"
          >原價 {{ roomInfo.origin_price }} 元</del
        >
        <div class="h5" v-if="roomInfo.price">
          現在只要 {{ roomInfo.price }} 元
        </div>
        <hr />
        <div style="margin:10px">
        <button
          type="button"
          class="btn btn-primary"
          @click="bookNow(roomInfo.id)"
          :disabled="this.status.loadingItem === roomInfo.id"
        >
          <div
            v-if="this.status.loadingItem === roomInfo.id"
            class="spinner-border spinner-border-sm text-warning"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          立即預定
        </button>
        </div>
        <div style="margin:10px">
        <button
          type="button"
          class="btn btn-outline-warning"
          @click="addToCart(roomInfo.id)"
          :disabled="this.status.loadingItem === roomInfo.id"
        >
          <div
            v-if="this.status.loadingItem === roomInfo.id"
            class="spinner-border spinner-border-sm text-warning"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          加入購物車
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      roomInfo: {},
      id: '',
      status: {
        loadingItem: '',
      },
    };
  },
  created() {
    this.id = this.$route.params.roomId;
    this.getRoomData(this.id);
  },
  methods: {
    getRoomData(id) {
      // const baseInfo = {
      //   id: 'room1',
      //   img: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      //   name: '永豐棧酒店',
      //   city: '台中市',
      //   country: '台灣',
      //   rating: '8.1',
      //   ratingNum: '3365',
      //   origin_price: '2500',
      //   price: '2300',
      // };
      // this.roomInfo = baseInfo;
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log('取得獨立房間資料成功', res);
          this.roomInfo = res.data.product;
        } else {
          console.log('取得獨立房間資料失敗');
        }
        this.isLoading = false;
      });
    },
    addToLike() {

    },
    addToCart(roomId) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: roomId,
        qty: 1,
      };
      this.status.loadingItem = roomId;
      this.$http.post(api, { data: cart }).then((res) => {
        if (res.data.success) {
          console.log('用戶端 在獨立房間頁面 加入購物車成功', res.data.data);
        } else {
          console.log('用戶端 在獨立房間頁面 加入購物車失敗');
        }
        this.status.loadingItem = '';
      });
    },
    bookNow() {

    },
  },
};
</script>
