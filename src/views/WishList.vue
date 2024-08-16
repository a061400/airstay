<!-- eslint-disable vuejs-accessibility/iframe-has-title -->
<template>
  <Loading :active="isLoading">
    <img src="@/assets/loadingAni.gif" alt="Loading..." style="width:100px"/>
  </Loading>
  <div class="container-fluid"
       style="display: flex; justify-content: center;
       align-items: center; margin: 50px;
       flex-direction: column;">
            <h3 style="font-weight: bold;">心願單</h3>
            <i class="bi bi-heart-fill" style="color:red; fontSize:20px"></i>
            <h6>已收藏{{infoList.length}}間</h6>
  </div>

  <div class="row px-5" id="content" >
    <div class="col-12 col-sm-6 col-md-3 col-lg-2 px-3 mb-5"
    v-for="(item,key) in infoList" :key="'content'+key">
        <WishListInfo :info="item" @delet-wish="deleteWish"></WishListInfo>
    </div>
  </div>
</template>

<script>
import WishListInfo from '@/components/WishListInfo.vue';
import emitter from '@/methods/emitter';

export default {
  components: {
    WishListInfo,
  },
  data() {
    return {
      isLoading: false,
      infoList: [],
    };
  },
  created() {
    this.getWishList();
  },
  methods: {
    getWishList() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.infoList = res.data.data.carts;
            console.log('取得心願列表資料成功', res);
          } else {
            console.log('取得心願列表資料失敗');
          }
          this.isLoading = false;
        });
    },
    deleteWish(deleteId) {
      console.log(deleteId);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${deleteId}`;
      this.isLoading = true;
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            console.log('刪除心願資料成功', res);
            emitter.emit('home-update-wishListNum');
            emitter.emit('AllRoomView-update');
            this.getWishList();
          } else {
            console.log('刪除心願資料失敗');
            this.isLoading = false;
          }
        });
    },
  },
};
</script>
