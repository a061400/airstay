<template>
<NavBar :isLogin="isLogin" @onclick-langModal="showLanguageModal"
 @onclick-currencyModal="showCurrencyModal"></NavBar>
<div class="container-fluid">
    <div class="container-fluid mt-3 position-relative">
    <ToastMessage></ToastMessage>
    </div>
</div>
 <router-view />
<LanguageModal ref="languageModal"></LanguageModal>
<CurrencyModal ref="currencyModal"></CurrencyModal>
<BottomBar></BottomBar>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import BottomBar from '@/components/BottomBar.vue';
import emitter from '@/methods/emitter';
import ToastMessage from '@/components/ToastMessage.vue';
import LanguageModal from '@/components/LanguageModal.vue';
import CurrencyModal from '@/components/CurrencyModal.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    BottomBar,
    ToastMessage,
    LanguageModal,
    CurrencyModal,
  },

  data() {
    return {
      isLogin: false,
      languageComponents: {},
      currencyComponents: {},
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
    this.languageComponents = this.$refs.languageModal;
    this.currencyComponents = this.$refs.currencyModal;
    emitter.on('login-status', (data) => {
      this.isLogin = data.isLogin;
    });
  },
  methods: {
    showLanguageModal() {
      this.languageComponents.showModal();
    },
    showCurrencyModal() {
      this.currencyComponents.showModal();
    },
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
