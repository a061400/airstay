/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
// 匯入 vee-validate 主套件
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';

// 匯入 vee-validate 相關規則
import { required, email, min } from '@vee-validate/rules';

// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n';

import pushMessageState from '@/methods/pushMessageState';

// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
// 匯入 GoogleMap 第三方庫
import VueGoogleMaps from '@fawmi/vue-google-maps';
import { currency, date } from './methods/numFilter';
import router from './router';
import App from './App.vue';

// 定義驗證規則
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

// 設定預設語系
setLocale('zh_TW');

const app = createApp(App);
// 註冊 vee-validate 三個全域元件
app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);

app.config.globalProperties.$numFilter = {
  currency,
  date,
};

app.config.globalProperties.$httpMessage = pushMessageState;
app.component('Loading', Loading);
app.use(VueAxios, axios);
app.use(router);
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAn7TlegMLO16peLDtRXQR2GAaFK9Nfv_s',
  },
});
app.mount('#app');
