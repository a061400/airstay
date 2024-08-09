<template>
<NavBar :isLogin="isLogin"></NavBar>
<router-view />
<BottomBar></BottomBar>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import BottomBar from '@/components/BottomBar.vue';
import emitter from '@/methods/emitter';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    BottomBar,
  },

  data() {
    return {
      isLogin: false,
    };
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    console.log(token);
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      if (res.data.success) {
        console.log('登入成功');
        this.isLogin = true;
      } else {
        console.log('驗證錯誤(cookie失效)，請重新登入');
        this.isLogin = false;
      }
    });
  },
  mounted() {
    emitter.on('login-status', (data) => {
      this.isLogin = data.isLogin;
      console.log('homeview', this.isLogin);
    });
  },
  watch: {
  },
  // 讓所有內層元件皆可以使用
  provide() {
    return {
      emitter,
    };
  },
};
</script>
