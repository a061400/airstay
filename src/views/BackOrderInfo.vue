<template>
<Loading :active="isLoading">
    <img src="@/assets/loadingAni.gif" alt="Loading..." style="width:100px"/>
</Loading>
<div v-show="isLogin">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>123</th>
          <th>123</th>
          <th>123</th>
          <th>123</th>
          <th>123</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
        </tr>
      </tbody>
    </table>
</div>

</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
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

    this.getOrderInfo();
  },

  methods: {
    getOrderInfo() {

    },
  },
};
</script>
