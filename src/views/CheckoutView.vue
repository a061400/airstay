<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
<Loading :active="isLoading">
  <img src="@/assets/loadingAni.gif" alt="Loading..." style="width:100px"/>
</Loading>
  <div class="container">
    <div style="display: flex; align-items: center">
      <i
        class="bi bi-arrow-left-circle"
        style="font-size: 25px; transition: transform 0.2s ease-in-out"
        @click="onclickReturn"
        @keydown="handleKeyDown"
        @mouseover="handleMouseEnter"
        @mouseout="handleMouseLeave"
        @focus="handleMouseEnter"
        @blur="handleMouseLeave"
      >
      </i>
      <h3 style="margin-left: 10px">申請預定</h3>
    </div>

    <!-- <div class="row mt-4"> -->
    <!------------------------------ 建立訂單 ------------------------------>
    <div class="my-5 row justify-content-center">
      <Form
        v-if="!isPayView"
        class="col-md-6"
        v-slot="{ errors }"
        @submit="createOrder"
      >
        <div class="mb-3">
          <label for="name" class="form-label">姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">電子信箱</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入Email"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">聯絡電話</label>
          <Field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            rules="required"
            v-model="form.user.tel"
          ></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">聯絡地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">特殊需求</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button
            class="btn btn-danger"
            :disabled="this.status.loadingItem === 'on'"
          >
            下一步 : 最終資料確認
          </button>
        </div>
      </Form>

      <!------------------------------ 付款頁面 ------------------------------>
      <form v-if="isPayView" class="col-md-6" @submit.prevent="Ordered">
        <h3>您的個訂房資訊</h3>
        <table class="table">
          <tbody>
            <tr>
              <th>姓名：</th>
              <td>{{ orderInfo.user.name }}</td>
            </tr>
            <tr>
              <th width="100">電子信箱：</th>
              <td>{{ orderInfo.user.email }}</td>
            </tr>
            <tr>
              <th>聯絡電話：</th>
              <td>{{ orderInfo.user.tel }}</td>
            </tr>
            <tr>
              <th>聯絡地址：</th>
              <td>{{ orderInfo.user.address }}</td>
            </tr>
            <tr>
              <th>特殊需求：</th>
              <td>{{ orderInfo.message }}</td>
            </tr>
             <tr>
              <th>總金額：</th>
              <td>{{ $numFilter.currency(cart.total) }}</td>
            </tr>
            <tr>
              <th>付款狀態：</th>
              <td>
                <span v-if="!orderInfo.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>

        <h3>您想在甚麼時候付款?</h3>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            延後付款
          </label>
          <p style="font-size: 14px">
            AirStay將處理您的款項，我們將於幾日後自動從您所選的卡片扣款。
          </p>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">
            立即付款
          </label>
          <p style="font-size: 14px">您將在完成此預定時透過AirStay付款。</p>
        </div>

        <h3>您想要怎麼付款?</h3>
        <div class="form-check" style="margin: 10px">
          <input
            type="radio"
            class="btn-check"
            name="options-outlined"
            id="success-outlined"
            autocomplete="off"
            checked
          />
          <label class="btn btn-outline-secondary" for="success-outlined">
            <img src="@/assets/mastercard.png" alt="VISA" style="width:100px"/>
          </label>
        </div>

        <div class="form-check" style="margin: 10px">
          <input
            type="radio"
            class="btn-check"
            name="options-outlined"
            id="danger-outlined"
            autocomplete="off"
          />
          <label class="btn btn-outline-secondary" for="danger-outlined">
            <img src="@/assets/visa.png" alt="VISA" style="width:100px"/>
          </label
          >
        </div>
        <div class="text-end">
          <button class="btn btn-danger">
            完成訂房 : 確認付款
          </button>
        </div>
      </form>

      <!------------------------------ 房間資訊 ------------------------------>
      <div class="col-md-5">
        <div class="sticky-top">
          <article class="col-8">
            <h2>{{ cart.product.title }}</h2>
            <img :src="cart.product.imageUrl" alt="" class="img-fluid mb-3" />
            <div>{{ cart.product.category }}</div>
            <div>{{ cart.product.content }}</div>
            <div>
              <i class="bi bi-star-fill"></i> {{ cart.product.unit }} ·
              {{ cart.product.description }}則評價
            </div>
          </article>

          <table class="table align-middle">
            <thead>
              <tr>
                <th>入住時間</th>
                <th>退房時間</th>
                <th>入住天數</th>
                <th>房間數量</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024年12月21日</td>
                <td>2024年12月22日</td>
                <td>1 晚</td>
                <td>{{cart.qty}} 間</td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>

          <Form class="col-md-6" v-slot="{ errors }" @submit="addCouponCode">
            <div class="input-group mb-3 input-group-sm">
              <Field
                id="coupon"
                name="優惠碼"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['優惠碼'] }"
                v-model="coupon_code"
                placeholder="請輸入優惠碼"
                rules="required"
                style="width: 100px"
              ></Field>
              <ErrorMessage
                name="優惠碼"
                class="invalid-feedback"
              ></ErrorMessage>
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  :disabled="this.status.loadingItem === 'on'"
                >
                  套用優惠碼
                </button>
              </div>
            </div>
          </Form>

          <table class="table align-middle">
            <div class="text-success" v-if="cart.coupon">已套用優惠券</div>
            <div class="" style="font-weight: bold; font-size: 18px">
              總金額：{{ $numFilter.currency(cart.total) }}
            </div>
            <div v-if="cart.final_total !== cart.total" class="text-success"
            style="font-weight: bold; font-size: 18px">
              周年慶折扣： -{{ $numFilter.currency(cart.final_total) }}
            </div>
            <div v-if="cart.final_total !== cart.total"
            style="font-weight: bold; font-size: 18px">
              折扣後總金額：{{ $numFilter.currency(cart.total - cart.final_total) }}
            </div>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      cart: {
        product: {},
      },
      status: {
        loadingItem: '',
      },

      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },

      orderInfo: {
        user: {},
      },

      createOrderInfo: {},

      isPayView: false,
    };
  },
  created() {
    this.id = this.$route.params.roomId;
    this.getRoomdata();
  },
  methods: {
    onclickReturn() {
      this.$router.go(-1);
    },
    handleKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // 防止空格键触发页面滚动
      }
    },
    handleMouseEnter(event) {
      const item = event;
      item.target.style.transform = 'scale(1.2)';
    },
    handleMouseLeave(event) {
      const item = event;
      item.target.style.transform = 'scale(1)';
    },
    getRoomdata() {
      // const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      // this.isLoading = true;
      // this.$http.get(api).then((res) => {
      //   if (res.data.success) {
      //     console.log('訂房頁面 取得資料成功', res);
      //     this.cart = res.data.product;
      //   } else {
      //     console.log('訂房頁面 取得資料失敗');
      //   }
      //   this.isLoading = false;
      // });

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log('訂房頁面 取得資料成功', res);
          // eslint-disable-next-line prefer-destructuring
          this.cart = res.data.data.carts[0];
        } else {
          console.log('訂房頁面 取得資料失敗');
        }
        this.isLoading = false;
      });
    },
    createOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.isLoading = true;
      this.$http.post(api, { data: this.form }).then((res) => {
        if (res.data.success) {
          this.createOrderInfo = res.data;
          this.isPayView = true;
          this.getOrderInfo();
          console.log('用戶端 建立訂單成功', res.data);
        } else {
          console.log('用戶端 建立訂單失敗');
        }
        this.isLoading = false;
      });
    },

    getOrderInfo() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.createOrderInfo.orderId}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.orderInfo = res.data.order;
          console.log('用戶端 取得訂單資訊成功', res.data.order);
        } else {
          console.log('用戶端 取得訂單資訊失敗');
        }
        this.isLoading = false;
      });
    },

    Ordered() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.createOrderInfo.orderId}`;
      this.isLoading = true;
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          this.$router.push(`../ordered/${this.createOrderInfo.orderId}`);
          console.log('用戶端 付款成功', res.data);
        } else {
          console.log('用戶端 付款失敗');
        }
        this.isLoading = false;
      });
    },
  },
};
</script>
