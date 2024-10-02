<template>
  <Loading :active="isLoading">
    <img src="@/assets/loadingAni.gif" alt="Loading..." style="width: 100px" />
  </Loading>
  <i
    class="bi bi-arrow-left-circle mx-5 my-5"
    style="font-size: 35px; transition: transform 0.2s ease-in-out"
    @click="onclickReturn"
    @keydown="handleKeyDown"
  >
  </i>
  <div
    class="container-fluid py-5 px-5"
    style="display: flex; justify-content: center"
  >
    <!-- <div
              class="border"
              style="
                border: 1px solid red;
                margin: 30px auto;
                width: 1000px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
              "
    > -->
    <form class="d-flex" @submit.prevent="onClickSearch">
      <div
        style="display: flex; justify-content: center"
      >
        <input
          class="form-control me-2 rounded-pill text-center"
          type="search"
          placeholder="目的地(城市)"
          style="width: 100%"
          aria-label="Search"
          v-model="destination"
        />
        <input
          class="form-control me-2 rounded-pill text-center"
          type="date"
          placeholder="入住日期"
          style="width: 100%"
          aria-label="Search"
        />
        <p class="me-2 mt-3">To</p>
        <input
          class="form-control me-2 rounded-pill text-center"
          type="date"
          placeholder="退房日期"
          style="width: 100%"
          aria-label="Search"
        />
        <button
          class="btn btn-outline-danger rounded-circle"
          type="submit"
          style="font-size: 20px; border: 1px solid white"
        >
          <i class="bi bi-search" style="font-size: 25px"></i>
        </button>
      </div>
    </form>
  </div>
  <div v-show="!isLoading" class="mx-5 px-5">
    <div v-if="infoList.length === 0" class="text-center">
      <h1>您搜尋的地點目前沒有提供房型</h1>
    </div>
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-3 col-lg-2 px-3 my-3"
        v-for="(item, index, key) in infoList"
        :key="'content' + key"
      >
        <HouseInfo :info="item" :wishList="wishList" :infoList="infoList"
        style="width:110%; height:100%;"></HouseInfo>
      </div>
    </div>
    <Pagination
      v-if="infoList.length !== 0"
      :pages="pagination"
      @update-page="updatePage"
    ></Pagination>
  </div>
</template>

<script>
import HouseInfo from '@/components/HouseInfo.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  inject: ['emitter'],

  data() {
    return {
      isLoading: false,
      infoList: [],
      wishList: [],
      destination: '',
      pagination: {},
      originInfoList: [],
    };
  },
  created() {
    this.getRoomData();
    this.getWishList();
  },
  mounted() {
    this.emitter.on('AllRoomView-update', () => {
      this.getWishList();
    });
  },
  components: {
    HouseInfo,
    Pagination,
  },

  methods: {
    onClickSearch() {
      // 刪除前後空白值
      const keyword = this.destination.trim();

      this.infoList = this.originInfoList;
      this.infoList = this.infoList.filter((res) => res.category.includes(keyword));
    },

    updatePage(curPage) {
      this.getRoomData(curPage);
    },

    getRoomData(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log('取得房間資料成功', res);
          this.infoList = res.data.products;
          this.originInfoList = res.data.products;
          this.pagination = res.data.pagination;
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
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log('取得心願列表資料成功', res);
          this.wishList = res.data.data.carts;
        } else {
          console.log('取得心願列表資料失敗');
        }
        this.isLoading = false;
      });
    },

    onclickReturn() {
      this.$router.go(-1);
    },
    handleKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // 防止空格键触发页面滚动
      }
    },
  },
};
</script>
