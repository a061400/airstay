<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <Loading :active="isLoading">
    <img src="@/assets/loadingAni.gif" alt="Loading..." style="width: 100px" />
  </Loading>
  <div v-show="isShowMap"
  style="
        position: fixed; /* 固定在視窗上 */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        background-color: black;
      ">
    <div class="text-end">
      <i class="bi bi-x-circle me-3" @click="onCloseMap"
      style="color: white; font-size: 30px"></i>
    </div>
    <LocationsMap
      :latData="22.66"
      :lngData="120.3"
      :height="'880px'"
    ></LocationsMap>
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <article class="col-8" style="margin-top: 30px">
        <h2 class="fw-bold">{{ roomInfo.title }}</h2>
        <img :src="roomInfo.imageUrl" alt="" class="img-fluid mb-3" />
        <div
          @click="onclickMap"
        >
          <i class="bi bi-geo-alt-fill me-1" style="color: green;"></i>
          <span class="category-hover">{{ roomInfo.category }}</span>
        </div>
        <div>
          <i class="bi bi-house-fill me-1" style="color: Teal"></i>{{ roomInfo.content }}
        </div>
        <div class="fw-bold">
          <i class="bi bi-star-fill" style="color: DarkKhaki"></i>
          {{ roomInfo.unit }} · {{ roomInfo.description }}則評價
        </div>
        <hr />
        <h5>設施與服務</h5>
        <div
          style="
            display: grid; /* 網格 */
            grid-template-columns: repeat(4, 1fr); /* 每行4列 */
            grid-gap: 10px; /* 列的間距 */
            margin: 0 auto; /* 容器置中 */
          "
        >
          <p v-for="(service, key) in serviceList" :key="key">
            <i class="bi bi-check-lg"></i> {{ service }}
          </p>
        </div>
        <hr />
        <h5>住宿地點</h5>
        <LocationsMap :latData="22.66" :lngData="120.3"></LocationsMap>
        <hr />
        <h5>評論</h5>
      </article>
      <div class="col-4" style="margin-top: 80px">
        <div class="h5" v-if="!roomInfo.price">
          {{ roomInfo.origin_price }} 元
        </div>
        <del class="h6" v-if="roomInfo.price"
          >原價 ${{ roomInfo.origin_price }} TWD
        </del>
        <div class="h5" v-if="roomInfo.price">
          <strong> 特價 ${{ roomInfo.price }} TWD </strong>
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
            <option v-for="item in 10" :key="item" :value="item">
              {{ item }} 間
            </option>
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
            <option v-for="item in 5" :key="item" :value="item">
              {{ item }} 位
            </option>
          </Field>
          <ErrorMessage name="旅客人數" class="invalid-feedback"></ErrorMessage>

          <div style="margin: 10px">
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
        <div style="margin: 10px">
          <button
            v-if="!isWish"
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
          <button
            v-if="isWish"
            type="button"
            class="btn btn-outline-success"
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
import LocationsMap from '@/components/LocationsMap.vue';

export default {
  inject: ['emitter'],
  components: {
    LocationsMap,
  },
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
      isShowMap: false,
      serviceList: [
        '24小時櫃台服務',
        '機場接送',
        '接駁服務',
        '房內免費Wi-Fi',
        '快速入住/退房服務',
        '可寄放行李',
        '健身房',
        '餐廳',
      ],
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
      this.$http.delete(api).then((res) => {
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
      this.$http.get(api).then((res) => {
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
    onclickMap() {
      this.isShowMap = true;
    },
    onCloseMap() {
      this.isShowMap = false;
    },
  },
};
</script>

<style scoped>
.category-hover {
  text-decoration: none; /* 初始狀態無底線 */
}

.category-hover:hover {
  text-decoration: underline; /* 滑鼠滑過時顯示底線 */
  cursor: pointer; /* 滑鼠滑過時變成手形 */
}
</style>
