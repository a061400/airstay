<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <Loading :active="isLoading">
    <img src="@/assets/loadingAni.gif" alt="Loading..." style="width:100px"/>
  </Loading>
  <div class="rounded-pill" style="border: 1px solid cyan; margin: 30px auto;
    width: 600px; height: 80px; display: flex; align-items: center;
  justify-content: center;">
      <div class="container-fluid" style="display: flex;
      justify-content: center; margin: 50px;">
        <form class="d-flex" style="width:800px" @submit.prevent="onClickSearch">
          <input class="form-control me-2 rounded-pill" type="search"
          placeholder="目的地(城市)" aria-label="Search" v-model="destination"
          >
          <input class="form-control me-2 rounded-pill" type="date"
          placeholder="入住日期" aria-label="Search">
          <input class="form-control me-2 rounded-pill" type="date"
          placeholder="退房日期" aria-label="Search">
          <button class="btn btn-outline-success rounded-circle" type="submit"
          style="font-size: 20px; border: 3px solid cyan;"><i class="bi bi-search"></i>
          </button>
        </form>
      </div>
  </div>

  <div class="row px-5" id="content" >
    <div class="col-12 col-sm-6 col-md-3 col-lg-2 px-3 mb-5"
    v-for="(item,index,key) in infoList" :key="'content'+key">
        <HouseInfo  :info="item" :wishList="wishList"></HouseInfo>
    </div>
  </div>
  <Pagination :pages="pagination" @update-page="updatePage"></Pagination>
</template>

<script>
import HouseInfo from '@/components/HouseInfo.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  inject: [
    'emitter',
  ],
  components: {
    HouseInfo,
    Pagination,
  },
  data() {
    return {
      isLoading: false,
      infoList: [],
      wishList: [],
      pagination: {},
      destination: '',
      originInfoList: [],
    };
  },
  mounted() {
    this.emitter.on('AllRoomView-update', () => {
      this.getWishList();
    });
  },
  created() {
    this.emitter.emit('home-update-wishListNum');
    this.refreshView();
  },
  methods: {
    onClickSearch() {
      // 刪除前後空白值
      const keyword = this.destination.trim();

      this.infoList = this.originInfoList;
      this.infoList = this.infoList.filter((res) => res.category.includes(keyword));
    },
    getRoomData(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            console.log('取得房間資料成功', res);
            this.infoList = res.data.products;
            this.originInfoList = res.data.products;
            this.pagination = res.data.pagination;
            this.onClickSearch();
          } else {
            console.log('取得房間資料失敗');
          }

          // 等待getWishList取得資料完成在讓loading消失
          this.isLoading = false;
        });
    },
    getWishList() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            console.log('取得心願列表資料成功', res);
            this.wishList = res.data.data.carts;
          } else {
            console.log('取得心願列表資料失敗');
          }
          this.isLoading = false;
        });
    },

    refreshView(page = 1) {
      this.getRoomData(page);
      this.getWishList();
    },

    updatePage(curPage) {
      this.refreshView(curPage);
    },
  },
};
</script>
