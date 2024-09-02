<template>
<Loading :active="isLoading">
    <img src="@/assets/loadingAni.gif" alt="Loading..." style="width:100px"/>
</Loading>
<div v-show="isLogin">
  <h3>訂單列表</h3>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="80">訂單成立時間</th>
          <th width="120">帳號(Email)</th>
          <th width="400">預定飯店名稱</th>
          <th width="80">應付金額</th>
          <th width="80">是否已付款</th>
          <th width="80">設定</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in orderInfo" :key="key" >
          <td>{{ $numFilter.date(item.create_at) }}</td>
          <td>{{item.user.email}}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }}：{{ product.qty }}間房間
              </li>
            </ul>
          </td>
          <td>${{ $numFilter.currency(item.total) }}</td>
          <td>
            <strong v-if="item.is_paid" class="text-success">已付款</strong>
            <span v-else >未付款</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm"
                      @click="openEditModal(item)">檢視
              </button>
              <button class="btn btn-outline-danger btn-sm"
                      @click="openDeleteModal(item.products, item.id)">刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
</div>
<Pagination :pages="pagination" @update-page="updatePage"></Pagination>
<OrderModal ref="orderModal" :item="tempOrderInfo"
 @update-paid="updatePaid"></OrderModal>
<DelModal ref="delModal" :item="tempOrderInfo"
 :infoLength="infoLength" @del-item="deleteItem"></DelModal>

</template>

<script>
import OrderModal from '@/components/OrderModal.vue';
import DelModal from '@/components/DelModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      isLogin: false,
      orderInfo: [],
      orderComponent: {},
      delComponent: {},
      tempOrderInfo: {},
      infoLength: 0,
      pagination: {},
    };
  },
  components: {
    OrderModal,
    DelModal,
    Pagination,
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

    this.getOrderInfo();
  },

  mounted() {
    this.orderComponent = this.$refs.orderModal;
    this.delComponent = this.$refs.delModal;
  },

  methods: {
    getOrderInfo(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.orderInfo = res.data.orders;
            this.pagination = res.data.pagination;
            console.log('[後台] 取得訂單列表成功', res.data);
          } else {
            console.log('[後台] 取得訂單列表失敗');
          }
          this.isLoading = false;
        });
    },

    openEditModal(item) {
      console.log(item);
      this.tempOrderInfo = { ...item };
      this.orderComponent.showModal();
    },
    openDeleteModal(item, itemId) {
      this.itemId = itemId;

      const key = Object.keys(item);
      this.infoLength = key.length;
      if (key.length > 1) {
        this.tempOrderInfo = { ...item };
      } else {
        this.tempOrderInfo = { ...item[key].product };
      }

      this.delComponent.showModal();
    },
    deleteItem() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.itemId}`;
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            this.delComponent.hideModal();
            this.getOrderInfo();
            console.log('[後台] 刪除訂單成功', res.data);
          } else {
            console.log('[後台] 刪除訂單成功失敗');
          }
          this.$httpMessage(res, '刪除訂單');
          this.isLoading = false;
        });
    },

    updatePaid(data) {
      this.isLoading = true;
      // const key = Object.keys(data.products);
      // const { id } = data.products[key];

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${data.id}`;
      this.$http.put(api, { data })
        .then((res) => {
          if (res.data.success) {
            this.getOrderInfo();
            console.log('[後台] 修改訂單成功', res.data);
          } else {
            console.log('[後台] 修改訂單失敗');
          }
          this.$httpMessage(res, '修改訂單');
          this.isLoading = false;
        });
    },

    updatePage(curPage) {
      this.getOrderInfo(curPage);
    },
  },
};
</script>
