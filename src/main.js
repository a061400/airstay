/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import App from './App.vue';
import router from './router';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);
app.component('Loading', Loading);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
