<template>
  <div class="container-fluid mt-3 position-relative">
    <h1 style="color: orange; background-color: lightyellow">
      後台管理
    </h1>
  </div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/dashboard/room" class="nav-link">所有房型列表</router-link>
          <router-link to="/dashboard/order" class="nav-link">訂單列表</router-link>
          <router-link to="/dashboard/coupon" class="nav-link">優惠券列表</router-link>
          <a href="#" @click.prevent="logout" class="nav-link">管理者登出</a>
        </div>
      </div>
    </div>
  </nav>
  <div class="container-fluid mt-3 position-relative">
    <router-view />
    <ToastMessage></ToastMessage>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessage from '@/components/ToastMessage.vue';

export default {
  components: {
    ToastMessage,
  },
  data() {
    return {

    };
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      if (res.data.success) {
        console.log('登入成功');
      } else {
        this.$router.push('/dashboard/login');
        console.log('驗證錯誤(cookie失效)，請重新登入');
      }
    });
  },

  provide() {
    return {
      emitter,
    };
  },

  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            emitter.emit('push-message', {
              style: 'success',
              title: '後台登出成功',
              content: '',
            });
            this.$router.push('/dashboard/login');
          } else {
            emitter.emit('push-message', {
              style: 'danger',
              title: '後台登出失敗',
              content: '已經登出或重試一次',
            });
          }
        });
    },
  },
};
</script>
