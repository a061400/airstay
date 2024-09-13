<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <Loading :active="isLoading">
    <img src="@/assets/loadingAni.gif" alt="Loading..." style="width: 100px" />
  </Loading>
  <section style="min-height: 100vh">
    <div class="d-flex">
      <div class="container row" style="margin-left: 200px; margin-top: 180px">
        <div class="col-lg-6 py-5 py-xl-5 py-xxl-7 text-center">
          <h1 class="display-4 text-1000 fw-bold">Let’s make a tour</h1>
          <h1 class="display-4 text-primary fw-bold">Discover the beauty</h1>
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
              <input
                class="form-control me-2 rounded-pill text-center"
                type="search"
                placeholder="目的地(城市)"
                style="width: 300px"
                aria-label="Search"
                v-model="destination"
              />
              <input
                class="form-control me-2 rounded-pill text-center"
                type="date"
                placeholder="入住日期"
                aria-label="Search"
              />
              <p class="me-2 mt-3">To</p>
              <input
                class="form-control me-2 rounded-pill text-center"
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
        <img
          src="@/assets/main-bg.png"
          alt="main-bg..."
          style="width: 100%; height: 100%"
        />
      </div>
    </div>
  </section>
  <section>
    <div class="mx-5 px-5">
      <div v-if="infoList.length === 0" class="text-center">
        <h1>您搜尋的地點目前沒有提供房型</h1>
      </div>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-3 col-lg-2 px-3 my-3"
          v-for="(item, index, key) in infoList"
          :key="'content' + key"
        >
          <HouseInfo :info="item" :wishList="wishList"></HouseInfo>
        </div>
      </div>
      <Pagination
        v-if="infoList.length !== 0"
        :pages="pagination"
        @update-page="updatePage"
      ></Pagination>
    </div>
  </section>

  <section id="places" class="pt-5">
    <div class="container my-5">
      <div class="row flex-md-center">
        <div
          class="col-md-11 col-lg-4 py-md-3 px-4 px-md-3 px-lg-0 px-xl-2 order-lg-1"
        >
          <h1 class="fw-bold fs-md-3 fs-xl-5">
            Amazing places to enjoy your travel
          </h1>
          <hr
            class="text-primary my-4 my-lg-3 my-xl-4"
            style="height: 3px; width: 100%"
          />
          <p class="lh-lg">
            Etiam facilisis, sapien quis porta dignissim, orci nisi pharetra
            dui, varius vehicula ligula nulla sit amet lorem. Aenean in
            vestibulum quam. Cras commodo varius neque, non gravida diam
            ultrices nec. Cras nulla mauris, fermentum nec libero in.
          </p>
          <button
            class="btn btn-lg btn-primary hover-top"
            @click="onclickExplor"
          >
            Explore
          </button>
        </div>
        <div class="col-lg-8 order-lg-0 order-1 px-4 px-md-3 py-8 py-md-3">
          <div
            class="carousel slide carousel-fade"
            id="carouselExampleControlsNoTouching"
            data-bs-ride="carousel"
            data-bs-touch="false"
            data-bs-interval="3000"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row h-100">
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 text-white hover-top">
                      <img
                        class="img-fluid h-100"
                        src="@/assets/maldives.png"
                        alt=""
                      />
                      <div
                        class="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient"
                      >
                        <div
                          class="ps-3 d-flex justify-content-between align-items-center"
                        >
                          <h5 class="text-white">Maldives</h5>
                          <h6 class="text-600">3 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 text-white hover-top">
                      <img
                        class="img-fluid h-100"
                        src="@/assets/indonesia.png"
                        alt=""
                      />
                      <div
                        class="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient"
                      >
                        <div
                          class="ps-3 d-flex justify-content-between align-items-center"
                        >
                          <h5 class="text-white">Indonesia</h5>
                          <h6 class="text-600">7 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 text-white hover-top">
                      <img
                        class="img-fluid h-100"
                        src="@/assets/kathmandu.png"
                        alt=""
                      />
                      <div
                        class="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient"
                      >
                        <div
                          class="ps-3 d-flex justify-content-between align-items-center"
                        >
                          <h5 class="text-white">Kathmandu</h5>
                          <h6 class="text-600">5 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row h-100">
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 text-white hover-top">
                      <img
                        class="img-fluid h-100"
                        src="@/assets/maldives.png"
                        alt=""
                      />
                      <div
                        class="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient"
                      >
                        <div
                          class="ps-3 d-flex justify-content-between align-items-center"
                        >
                          <h5 class="text-white">Maldives</h5>
                          <h6 class="text-600">5 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 text-white hover-top">
                      <img
                        class="img-fluid h-100"
                        src="@/assets/indonesia.png"
                        alt=""
                      />
                      <div
                        class="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient"
                      >
                        <div
                          class="ps-3 d-flex justify-content-between align-items-center"
                        >
                          <h5 class="text-white">Indonesia</h5>
                          <h6 class="text-600">5 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 text-white hover-top">
                      <img
                        class="img-fluid h-100"
                        src="@/assets/kathmandu.png"
                        alt=""
                      />
                      <div
                        class="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient"
                      >
                        <div
                          class="ps-3 d-flex justify-content-between align-items-center"
                        >
                          <h5 class="text-white">Kathmandu</h5>
                          <h6 class="text-600">6 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row h-100">
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 text-white hover-top">
                      <img
                        class="img-fluid h-100"
                        src="@/assets/kathmandu.png"
                        alt=""
                      />
                      <div
                        class="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient"
                      >
                        <div
                          class="ps-3 d-flex justify-content-between align-items-center"
                        >
                          <h5 class="text-white">Kathmandu</h5>
                          <h6 class="text-600">5 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 text-white hover-top">
                      <img
                        class="img-fluid h-100"
                        src="@/assets/maldives.png"
                        alt=""
                      />
                      <div
                        class="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient"
                      >
                        <div
                          class="ps-3 d-flex justify-content-between align-items-center"
                        >
                          <h5 class="text-white">Maldives</h5>
                          <h6 class="text-600">3 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 text-white hover-top">
                      <img
                        class="img-fluid h-100"
                        src="@/assets/indonesia.png"
                        alt=""
                      />
                      <div
                        class="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient"
                      >
                        <div
                          class="ps-3 d-flex justify-content-between align-items-center"
                        >
                          <h5 class="text-white">Indonesia</h5>
                          <h6 class="text-600">7 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of .container-->
  </section>

  <section class="pt-5">
    <div class="container">
      <div
        class="row flex-center mb-5 justify-content-center align-items-center"
      >
        <div class="col-lg-8 text-center">
          <h1 class="fw-bold fs-md-3 fs-lg-4 fs-xl-5">Member's Experiences</h1>
          <hr
            class="mx-auto text-primary my-4"
            style="height: 3px; width: 100%"
          />
        </div>
        <div
          class="carousel slide"
          id="carouselExampleDark"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
              <div
                class="row h-100 flex-center justify-content-center align-items-center"
              >
                <div class="col-12 col-lg-7 mb-3 mb-md-0">
                  <div class="card h-100">
                    <div class="card-body d-flex flex-center flex-column">
                      <p class="text-center card-text mb-5">
                        “Curabitur posuere ullamcorper pulvinar. Donec dignissim
                        bibendum leo, at faucibus enim aliquam eu. Nullam quis
                        pulvinar diam, ac elementum urna. Integer id vehicula
                        tortor, nec pulvinar libero. Ut elit elit, fringilla a
                        nisi ut, dapibus eleifend quam.”
                      </p>
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <img
                            class="img-fluid"
                            src="@/assets/user-2.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="my-4 text-center">
                        <h6 class="text-1000 fw-bold">Donquixote Law</h6>
                        <p class="fs--1 fw-normal mb-0">Member</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <div
                class="row h-100 flex-center justify-content-center align-items-center"
              >
                <div class="col-12 col-lg-7 mb-3 mb-md-0">
                  <div class="card h-100">
                    <div class="card-body d-flex flex-center flex-column">
                      <p class="text-center card-text mb-5">
                        “Curabitur posuere ullamcorper pulvinar. Donec dignissim
                        bibendum leo, at faucibus enim aliquam eu. Nullam quis
                        pulvinar diam, ac elementum urna. Integer id vehicula
                        tortor, nec pulvinar libero. Ut elit elit, fringilla a
                        nisi ut, dapibus eleifend quam.”
                      </p>
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <img
                            class="img-fluid"
                            src="@/assets/user-1.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="my-4 text-center">
                        <h6 class="text-1000 fw-bold">Viezh Robert</h6>
                        <p class="fs--1 fw-normal mb-0">Member</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <div
                class="row h-100 flex-center justify-content-center align-items-center"
              >
                <div class="col-12 col-lg-7 mb-3 mb-md-0">
                  <div class="card h-100">
                    <div class="card-body d-flex flex-center flex-column">
                      <p class="text-center card-text mb-5">
                        “Curabitur posuere ullamcorper pulvinar. Donec dignissim
                        bibendum leo, at faucibus enim aliquam eu. Nullam quis
                        pulvinar diam, ac elementum urna. Integer id vehicula
                        tortor, nec pulvinar libero. Ut elit elit, fringilla a
                        nisi ut, dapibus eleifend quam.”
                      </p>
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <img
                            class="img-fluid"
                            src="@/assets/user-2.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="my-4 text-center">
                        <h6 class="text-1000 fw-bold">Shawn</h6>
                        <p class="fs--1 fw-normal mb-0">Member</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <div
                class="row h-100 flex-center justify-content-center align-items-center"
              >
                <div class="col-12 col-lg-7 mb-3 mb-md-0">
                  <div class="card h-100">
                    <div class="card-body d-flex flex-center flex-column">
                      <p class="text-center card-text mb-5">
                        “Curabitur posuere ullamcorper pulvinar. Donec dignissim
                        bibendum leo, at faucibus enim aliquam eu. Nullam quis
                        pulvinar diam, ac elementum urna. Integer id vehicula
                        tortor, nec pulvinar libero. Ut elit elit, fringilla a
                        nisi ut, dapibus eleifend quam.”
                      </p>
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <img
                            class="img-fluid"
                            src="@/assets/user-1.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="my-4 text-center">
                        <h6 class="text-1000 fw-bold">Keven</h6>
                        <p class="fs--1 fw-normal mb-0">Member</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active bg-primary"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              class="bg-primary"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              class="bg-primary"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              class="bg-primary"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="booking">
    <div
      style="width: 100%; height: 50vh"
      :style="{
        backgroundImage: `url(${require('@/assets/mountain.png')})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }"
    >
      <div
        class="container d-flex align-items-center justify-content-center"
        style="width: 100%; height: 50vh"
      >
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="">EXCLUSIVE DEAL</h2>
            <h1 class="fw-bold">Enjoy 30% Off On All Hotel</h1>
            <h1 class="fw-bold">優惠折扣碼:airstay30</h1>
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
      window.scrollTo({
        top: 970,
        behavior: 'smooth',
      });
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

    refreshView(page = 1, scroll = true) {
      this.getRoomData(page);
      this.getWishList();

      if (scroll) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    },

    updatePage(curPage) {
      this.refreshView(curPage, false);
    },

    onclickExplor() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>
