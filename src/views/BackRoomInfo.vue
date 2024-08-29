<template>
  <Loading :active="isLoading">
    <img src="@/assets/loadingAni.gif" alt="Loading..." style="width: 100px" />
  </Loading>
  <div v-show="isLogin">
    <div class="text-end">
      <button class="btn btn-primary" type="button" @click="openEditModal">
        新增房型
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="180">所在地區</th>
          <th width="200">飯店名稱</th>
          <th width="200">房型</th>
          <th width="80">評價</th>
          <th width="80">評價數量</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否公開</th>
          <th width="150">設定</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in allRoomInfo" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.content }}</td>
          <td>{{ item.unit }} 分</td>
          <td>{{ item.description }} 則</td>
          <td class="text-right">
            {{ $numFilter.currency(item.origin_price) }} 元
          </td>
          <td class="text-right">
            {{ $numFilter.currency(item.price) }} 元
          </td>
          <td>
            <span class="text-success" v-if="item.is_enabled">上架</span>
            <span class="text-muted" v-else>未上架</span>
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
  </div>
  <DelModal ref="delModal" :item="curItem" @del-item="delRoomInfo"></DelModal>
  <EditModal ref="editModal" :item="curItem" @update-roomInfo="updateRoomInfo"></EditModal>
</template>

<script>
import DelModal from '@/components/DelModal.vue';
import EditModal from '@/components/EditRoomModal.vue';

export default {
  components: {
    DelModal,
    EditModal,
  },
  data() {
    return {
      isLogin: false,
      allRoomInfo: [],
      delComponent: {},
      editComponent: {},
      curItem: {},
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

    this.getRoomInfo();
  },
  mounted() {
    this.editComponent = this.$refs.editModal;
    this.delComponent = this.$refs.delModal;
  },
  methods: {
    getRoomInfo() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.allRoomInfo = res.data.products;
          console.log('[後台] 取得房間列表成功', res.data);
        } else {
          console.log('[後台] 取得房間列表失敗');
        }
        this.isLoading = false;
      });
    },
    delRoomInfo() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.curItem.id}`;
      this.isLoading = true;
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.delComponent.hideModal();
          this.getRoomInfo();
          console.log('[後台] 刪除房間列表成功', res.data);
        } else {
          console.log('[後台] 刪除房間列表失敗');
        }
        this.$httpMessage(res, '刪除房間列表');
        this.isLoading = false;
      });
    },
    updateRoomInfo(roomInfo) {
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let method = 'post';
      let title = '新增房型';

      // 因為 this.allRoomInfo 是一個proxy物件，不能直接用forEach。
      Object.keys(this.allRoomInfo).forEach((res) => {
        // 編輯
        if (res === roomInfo.id) {
          api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${roomInfo.id}`;
          method = 'put';
          title = '編輯房型';
        }
      });

      const data = roomInfo;
      this.isLoading = true;
      this.$http[method](api, { data }).then((res) => {
        if (res.data.success) {
          this.editComponent.hideModal();
          this.getRoomInfo();
          console.log('[後台] 新增房型成功', res.data);
        } else {
          console.log('[後台] 新增房型失敗', res.data.message);
        }
        this.$httpMessage(res, title);
        this.isLoading = false;
      });
    },

    openEditModal(item) {
      this.curItem = { ...item };
      this.editComponent.showModal();
    },

    openDeleteModal(item) {
      this.curItem = { ...item };
      this.delComponent.showModal();
    },
  },
};
</script>
