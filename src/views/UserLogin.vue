<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/no-autofocus -->
<template>
<div style="background-color: #d3d3d3;">
    <div class="container rounded" style="height:100vh;">
      <form
        class="row justify-content-center align-items-center"
        style="height:60vh;"
        @submit.prevent="clickLogin"
      >
        <div class="col-md-6">
          <div
            style="display: inline-flex;"
            v-if="isInputError"
          >
            <i
              class="bi bi-exclamation-circle"
              style="color: red; margin: 0px 5px"
            ></i>
            <p style="color: red">登入失敗，電子信箱或密碼輸入錯誤</p>
          </div>
          <h1 class="h3 mb-3 font-weight-normal">會員登入</h1>
          <div class="mb-2">
            <label for="inputEmail" class="sr-only">電子信箱</label>
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
              required
              autofocus
              v-model="user.username"
            />
          </div>
          <div class="mb-2">
            <label for="inputPassword" class="sr-only">密碼</label>
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
              v-model="user.password"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                id="is_remember"
              />
              <label class="form-check-label" for="is_remember">
                請記住帳號
              </label>
            </div>
          </div>

          <div class="text-end mt-4">
            <button class="btn btn-lg btn-success btn-block" type="submit">
              登入
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
</template>

<script>
export default {
  inject: ['emitter'],
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      isInputError: false,
    };
  },
  methods: {
    clickLogin() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;

          this.isInputError = false;
          console.log('登入成功', res);
          this.emitter.emit('home-login-status', {
            isLogin: true,
          });
          this.$router.push('/main');
        } else {
          this.isInputError = true;
          console.log('登入失敗，帳號或密碼有錯誤');
        }
        this.$httpMessage(res, '會員登入');
      });
    },
  },
};
</script>
