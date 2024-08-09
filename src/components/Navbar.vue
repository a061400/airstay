<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <img alt="Vue logo" src="../assets/logo.png" style="width:25px">
        <router-link to="/main" class="navbar-brand">AirStay</router-link>
        <div class="navbar-nav">
          <router-link to="/" class="nav-link">刊登空房</router-link>
          <router-link to="/" class="nav-link">變更地區語言</router-link>
          <router-link to="/" class="nav-link">變更幣別</router-link>

          <!-- <router-link to="/login" v-if="!isLogin" class="nav-link">登入</router-link>
          <a href="#" v-if="isLogin" @click.prevent="logout" class="nav-link">登出</a> -->

          <router-link to="/" class="nav-link">成為新會員</router-link>
          <i v-if="!isLogin" class="bi bi-person" style="color:white; position: absolute;
          top: 6px; right: 32px; font-size: 30px;"
           @click.prevent="login" @keydown="handleKeyDown"></i>
           <i v-if="isLogin" class="bi bi-person-check" style="color:white; position: absolute;
          top: 6px; right: 32px; font-size: 30px;"
          @click.prevent="logout" @keydown="handleKeyDown"></i>
          <i v-if="isLogin" class="bi bi-house-heart" style="color:white; position: absolute;
          top: 6px; right: 82px; font-size: 30px;"></i>
          <i v-if="isLogin" class="bi bi-cart3" style="color:white; position: absolute;
          top: 6px; right: 132px; font-size: 30px;"></i>
        </div>
      </div>
    </div>
</nav>
</template>

<script>
export default {
  inject: [
    'emitter',
  ],
  props: {
    isLogin: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/main');
            this.emitter.emit('login-status', {
              isLogin: false,
            });
            console.log('登出成功', res);
          } else {
            console.log('已經登出或登出失敗');
          }
        });
    },
    login() {
      this.$router.push('/login');
    },
    handleKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // 防止空格键触发页面滚动
        // this.addToLike();
      }
    },
  },
};
</script>
