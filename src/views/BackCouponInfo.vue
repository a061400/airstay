<template>
  <Loading :active="isLoading">
    <img src="@/assets/loadingAni.gif" alt="Loading..." style="width:100px"/>
  </Loading>
  <div v-show="isLogin">
    <div class="text-end">
      <button class="btn btn-primary" type="button" @click="openEditModal('')">
        新增優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="80">優惠券名稱</th>
          <th width="80">優惠碼</th>
          <th width="80">折扣</th>
          <th width="80">到期日</th>
          <th width="80">是否啟用</th>
          <th width="80">設定</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td class="text-right">{{ item.percent }}%</td>
          <td class="text-right">
            {{ $numFilter.date(item.due_date) }}
          </td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openEditModal(item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openDeleteModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <CouponModal ref="couponModal"
    @update-coupon="updateCoupon" :coupon="tempCoupons">
    </CouponModal>
    <DelModal ref="delModal"
    @del-item="delCoupon" :item="tempCoupons">
    </DelModal>

  </div>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  components: {
    CouponModal,
    DelModal,
  },

  inject: ['emitter'],

  data() {
    return {
      isLogin: false,
      coupons: [],
      couponComponent: {},
      delComponent: {},
      tempCoupons: {},
    };
  },
  created() {
    this.isLoading = true;
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      if (res.data.success) {
        this.isLogin = true;
      } else {
        this.$router.push('/dashboard/login');
      }
      this.isLoading = false;
    });

    this.getCoupon();
  },

  mounted() {
    this.couponComponent = this.$refs.couponModal;
    this.delComponent = this.$refs.delModal;
  },

  methods: {
    getCoupon(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.coupons = res.data.coupons;
            console.log('取得優惠券列表成功', res.data);
          } else {
            console.log('取得優惠券列表失敗');
          }
          this.isLoading = false;
        });
    },
    openEditModal(data) {
      if (data === '') {
        this.tempCoupons = {
          is_enabled: 0,
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupons = { ...data };
      }
      this.couponComponent.showModal();
    },

    openDeleteModal(data) {
      this.tempCoupons = { ...data };
      this.delComponent.showModal();
    },

    delCoupon() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupons.id}`;
      this.$http.delete(api).then(
        (response) => {
          console.log(response);
          this.delComponent.hideModal();
          this.getCoupon();
        },
      );
    },

    updateCoupon(newData) {
      // 新增優惠券
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethod = 'post';
      let title = '新增優惠券';

      // 編輯優惠券
      this.coupons.forEach((data) => {
        if (data.id === newData.id) {
          api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${newData.id}`;
          httpMethod = 'put';
          title = '編輯優惠券';
        }
      });

      this.tempCoupons = newData;
      this.$http[httpMethod](api, { data: this.tempCoupons }).then(
        (response) => {
          if (response.data.success) {
            this.emitter.emit('push-message', {
              style: 'success',
              title: '新增或編輯成功',
              content: '',
            });
            console.log(title, '成功', response);
            this.couponComponent.hideModal();
            this.getCoupon();
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '新增或編輯失敗',
              content: response.data.message.join(','),
            });
            console.log(title, '失敗');
          }
        },
      );
    },
  },
};
</script>
