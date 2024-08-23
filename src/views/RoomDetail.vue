<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
<Loading :active="isLoading">
  <img src="@/assets/loadingAni.gif" alt="Loading..." style="width:100px"/>
</Loading>
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
      <Form
        class="col-md-6"
        v-slot="{ errors }"
        @submit="bookNow(roomInfo.id)"
      >
         <!-- 入住時間 -->
          <label for="checkin">入住日期</label>
          <Field
            name="入住日期"
            v-model="checkInDate"
            as="input"
            type="date"
            id="checkin"
            class="form-control"
            :class="{ 'is-invalid': errors['入住日期'] }"
            rules="required"
            aria-label="選擇入住日期"
          ></Field>
        <ErrorMessage name="入住日期" class="invalid-feedback"></ErrorMessage>

        <!-- 退房時間 -->
          <label for="checkout">退房日期</label>
          <Field
            name="退房日期"
            v-model="checkOutDate"
            as="input"
            type="date"
            id="checkout"
            class="form-control"
            :class="{ 'is-invalid': errors['退房日期'] }"
            rules="required"
            aria-label="選擇退房日期"
          ></Field>
        <ErrorMessage name="退房日期" class="invalid-feedback"></ErrorMessage>

        <!-- 房間數量選擇 -->
        <Field
          name="房間數量"
          as="select"
          v-model="roomNum"
          class="form-select"
          :class="{ 'is-invalid': errors['房間數量'] }"
          rules="required"
          aria-label="Default select example"
          style="margin-top: 10px"
        >
          <option value="" selected disabled>房間數量</option>
          <option v-for="item in 10" :key="item" :value="item">{{ item }} 間</option>
        </Field>
        <ErrorMessage name="房間數量" class="invalid-feedback"></ErrorMessage>

        <!-- 旅客人數選擇 -->
        <Field
          name="旅客人數"
          as="select"
          v-model="travelerNum"
          class="form-select"
          :class="{ 'is-invalid': errors['旅客人數'] }"
          rules="required"
          aria-label="Default select example"
          style="margin-top: 10px"
        >
          <option value="" selected disabled>旅客人數</option>
          <option v-for="item in 5" :key="item" :value="item">{{ item }} 位</option>
        </Field>
        <ErrorMessage name="旅客人數" class="invalid-feedback"></ErrorMessage>

        <div style="margin:10px">
        <button
          class="btn btn-primary"
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
      </Form>
        <div style="margin:10px">
        <button v-if="!isWish"
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
          加入收藏住宿
        </button>
         <button v-if="isWish"
          type="button"
          class="btn btn-outline-warning"
          :disabled="true"
        >
          已收藏住宿
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  inject: [
    'emitter',
  ],
  data() {
    return {
      isLoading: false,
      roomInfo: {},
      id: '',
      status: {
        loadingItem: '',
      },
      isWish: false,
      wishList: [],
      roomNum: '',
      travelerNum: '',
    };
  },
  created() {
    this.id = this.$route.params.roomId;
    this.getRoomData(this.id);
    this.getWishList();
  },
  methods: {
    getRoomData(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log('用戶端 取得獨立房間資料成功', res);
          this.roomInfo = res.data.product;
        } else {
          console.log('用戶端 取得獨立房間資料失敗');
        }
        this.isLoading = false;
      });
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
          console.log('用戶端 獨立房間頁面 加入收藏成功', res.data.data);
          this.emitter.emit('home-update-wishListNum');
          this.emitter.emit('AllRoomView-update');
          this.isWish = true;
        } else {
          console.log('用戶端 獨立房間頁面 加入收藏失敗');
        }
        this.status.loadingItem = '';
      });
    },
    bookNow() {
      // 有Bug，要先至少加入一次購物車，才能刪除，先留著。
      // 先刪除全部購物車內的房間，再加入這一間房間進購物車。
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.isLoading = true;
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            console.log('獨立頁面 刪除全部購物車成功', res);
            const api2 = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            const cart = {
              product_id: this.roomInfo.id,
              qty: Number(this.roomNum),
            };
            this.status.loadingItem = this.roomInfo.id;
            this.$http.post(api2, { data: cart }).then((res2) => {
              if (res2.data.success) {
                console.log('用戶端 獨立房間頁面 加入收藏成功', res2.data.data);
                this.emitter.emit('home-update-wishListNum');
                this.emitter.emit('AllRoomView-update');
                this.isWish = true;
                this.$router.push(`/checkout/${this.id}`);
              } else {
                console.log('用戶端 獨立房間頁面 加入收藏失敗');
              }
              this.status.loadingItem = '';
            });
          } else {
            console.log('獨立頁面 刪除全部購物車失敗');
          }
          this.isLoading = false;
        });
    },
    getWishList() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            console.log('獨立頁面 取得心願列表資料成功', res);
            this.wishList = res.data.data.carts;
            this.filterWishList();
          } else {
            console.log('獨立頁面 取得心願列表資料失敗');
          }
          this.isLoading = false;
        });
    },
    filterWishList() {
      this.wishList.forEach((res) => {
        if (this.id === res.product.id) {
          this.isWish = true;
        }
      });
    },
  },
};
</script>
