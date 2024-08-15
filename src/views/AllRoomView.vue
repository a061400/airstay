<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-fluid" style="display: flex;
  justify-content: center; margin: 50px;">
    <form class="d-flex" style="width:800px" @submit.prevent="onClickSearch">
      <input class="form-control me-2" type="search" placeholder="搜尋目的地" aria-label="Search">
      <button class="btn btn-outline-success" type="submit"
       style="width: 100px; height: 60px;">搜尋</button>
    </form>
  </div>
  <div class="row px-5" id="content" >
    <div class="col-12 col-sm-6 col-md-3 col-lg-2 px-3 mb-5"
    v-for="(item,index,key) in infoList" :key="'content'+key">
        <HouseInfo  :info="item" :wishList="wishList"></HouseInfo>
    </div>
  </div>
</template>

<script>
import HouseInfo from '@/components/HouseInfo.vue';

export default {
  inject: [
    'emitter',
  ],
  components: {
    HouseInfo,
  },
  data() {
    return {
      isLoading: false,
      infoList: [],
      wishList: [],
      pagination: {},
    };
  },
  mounted() {
    this.emitter.on('AllRoomView-update', () => {
      this.getWishList();
    });
  },
  created() {
    // const baseInfo = {
    //   id: '',
    //   img: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //   name: '永豐棧酒店',
    //   city: '台中市',
    //   country: '台灣',
    //   rating: '8.1',
    //   ratingNum: '3365',
    // };

    // for (let i = 1; i <= 20; i++) {
    //   this.infoList.push({
    //     ...baseInfo,
    //     name: `永豐棧酒店 ${i}`,
    //     id: `room${i}`,
    //   });
    // }

    this.getRoomData();
    this.getWishList();
    this.emitter.emit('home-update-wishListNum');
  },
  methods: {
    onClickSearch() {
    },
    getRoomData(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            console.log('取得房間資料成功', res);
            this.infoList = res.data.products;
            this.pagination = res.data.pagination;
          } else {
            console.log('取得房間資料失敗');
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
            console.log('取得心願列表資料成功', res);
            this.wishList = res.data.data.carts;
          } else {
            console.log('取得心願列表資料失敗');
          }
          this.isLoading = false;
        });
    },
  },
};
</script>
