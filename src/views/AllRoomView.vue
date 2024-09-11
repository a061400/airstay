<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <Loading :active="isLoading">
    <img src="@/assets/loadingAni.gif" alt="Loading..." style="width: 100px" />
  </Loading>
  <section style="min-height: 100vh">
    <div class="d-flex">
      <div class="container row" style="margin-left: 200px; margin-top: 180px">
        <div class="col-lg-6 py-5 py-xl-5 py-xxl-7">
          <h1 class="display-3 text-1000 fw-normal">Let’s make a tour</h1>
          <h1 class="display-3 text-primary fw-bold">Discover the beauty</h1>
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
            <form
              class="d-flex"
              style="width: 1200px"
              @submit.prevent="onClickSearch"
            >
              <input
                class="form-control me-2 rounded-pill"
                type="search"
                placeholder="目的地(城市)"
                style="width: 300px"
                aria-label="Search"
                v-model="destination"
              />
              <input
                class="form-control me-2 rounded-pill"
                type="date"
                placeholder="入住日期"
                aria-label="Search"
              />
              <p class="me-2 mt-3">To</p>
              <input
                class="form-control me-2 rounded-pill"
                type="date"
                placeholder="退房日期"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-danger rounded-circle"
                type="submit"
                style="font-size: 20px; border: 1px solid white"
              >
                <i class="bi bi-search" style="font-size: 25px"></i>
              </button>
            </form>
            <!-- </div> -->
          </div>
        </div>
      </div>
      <div style="margin-left: -400px; margin-top: 50px">
        <img src="@/assets/main-bg.png" alt="main-bg..." style="width: 800px" />
      </div>
    </div>
  </section>
  <div class="row px-5" id="content">
    <div
      class="col-12 col-sm-6 col-md-3 col-lg-2 px-3 mb-5"
      v-for="(item, index, key) in infoList"
      :key="'content' + key"
    >
      <HouseInfo :info="item" :wishList="wishList"></HouseInfo>
    </div>
  </div>
  <Pagination :pages="pagination" @update-page="updatePage"></Pagination>
  <section id="booking">
    <div
      style="width: 1920px; height: 500px"
      :style="{
        backgroundImage: `url(${require('@/assets/mountain.png')})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }"
    >
      <div class="container d-flex align-items-center justify-content-center"
      style="width: 1920px; height: 500px">
        <div class="row">
          <div class="col-12">
              <h2 class="">WE WILL SEE YOU</h2>
              <h1 class="fw-bold">
                Enjoy 30% Off On First Trip
              </h1>
              <h1 class="fw-bold">
                Code:test01
              </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HouseInfo from '@/components/HouseInfo.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  inject: ['emitter'],
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
      this.$http.get(api).then((res) => {
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

    refreshView(page = 1) {
      this.getRoomData(page);
      this.getWishList();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },

    updatePage(curPage) {
      this.refreshView(curPage);
    },
  },
};
</script>
