<template>
  <NavUpBar
    :isLogin="isLogin"
    :curCurrency="curCurrency"
    :curLang="curLang"
    @onclick-langModal="showLanguageModal"
    @onclick-currencyModal="showCurrencyModal"
    :wishListNum="wishListNum"
  ></NavUpBar>
      <ToastMessage></ToastMessage>
  <div style="min-height: 100vh">
    <router-view />
  </div>
  <LanguageModal ref="languageModal" @onclick-lang="changeLang">
  </LanguageModal>
  <CurrencyModal ref="currencyModal" @onclick-currency="changeCurrency">
  </CurrencyModal>
  <BottomBar></BottomBar>
</template>

<script>
import NavUpBar from '@/components/NavUpBar.vue';
import BottomBar from '@/components/BottomBar.vue';
import emitter from '@/methods/emitter';
import ToastMessage from '@/components/ToastMessage.vue';
import LanguageModal from '@/components/LanguageModal.vue';
import CurrencyModal from '@/components/CurrencyModal.vue';

export default {
  name: 'HomeView',
  components: {
    NavUpBar,
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
      curCurrency: 'TWD',
      curLang: 'TW',
      wishListNum: '',
    };
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
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
    this.getWishListNum();
  },
  mounted() {
    this.languageComponents = this.$refs.languageModal;
    this.currencyComponents = this.$refs.currencyModal;
    emitter.on('home-login-status', (data) => {
      this.isLogin = data.isLogin;
    });
    emitter.on('home-update-wishListNum', () => {
      this.getWishListNum();
    });
    this.$router.push('/main');
  },
  methods: {
    showLanguageModal() {
      this.languageComponents.showModal();
    },
    showCurrencyModal() {
      this.currencyComponents.showModal();
    },
    changeCurrency(curCurrencyData) {
      this.curCurrency = curCurrencyData;
    },
    changeLang(curLangData) {
      this.curLang = curLangData;
    },
    getWishListNum() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.wishListNum = res.data.data.carts.length;
          console.log('取得 心願總數量 成功', this.wishListNum);
        } else {
          console.log('取得 心願總數量 失敗');
        }
      });
    },
  },
  watch: {},
  // 讓所有內層元件皆可以使用
  provide() {
    return {
      emitter,
    };
  },
};
</script>
