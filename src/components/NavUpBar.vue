<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<template>
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
        <img
          class="me-2"
          alt="Vue logo"
          src="../assets/logo.png"
          style="width: 25px"
        />
        <router-link to="/main" class="navbar-brand">AirStay</router-link>
        <div class="navbar-nav position-absolute" style="top:12px; right: 122px">
          <router-link
            to=""
            class="nav-link"
            @click="onclickCurrencyBtn"
            style="color: yellow"
          >
            {{ curCurrency }}
          </router-link>
          <router-link to="" class="nav-link" @click="onclickLangBtn">
            <img
              alt="country logo"
              :src="require(`../assets/${curLang}.png`)"
              style="width: 25px"
            />
          </router-link>
          <router-link to="/about" class="nav-link">關於我們</router-link>
          </div>

          <div class="position-absolute end-0">
            <!-- 未登入圖示 -->
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  v-if="!isLogin"
                  class="bi bi-person"
                  :style="accountIconStyle"
                  @mouseover="hoverIcon(true, 'account')"
                  @mouseleave="hoverIcon(false, 'account')"
                ></i>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
                style="top: 55px; left: -160px"
              >
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                    @click.prevent="login"
                    @keydown="handleKeyDown"
                    >登入</a
                  >
                </li>
              </ul>
            </li>

            <!-- 已登入圖示 -->
            <li class="nav-item dropdown" style="top: -24px">
              <a
                class="nav-link"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  v-if="isLogin"
                  class="bi bi-person-check"
                  :style="accountIconStyle"
                  @mouseover="hoverIcon(true, 'account')"
                  @mouseleave="hoverIcon(false, 'account')"
                ></i>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
                style="top: 56px; left: -160px"
              >
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                    @click.prevent="onclickAccountInfo"
                    @keydown="handleKeyDown"
                    >帳戶資訊</a
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                    @click.prevent="logout"
                    @keydown="handleKeyDown"
                    >登出</a
                  >
                </li>
              </ul>
            </li>
            <!-- 加入收藏圖示 -->
            <i
              class="bi bi-house-heart"
              :style="likeIconStyle"
              @mouseover="hoverIcon(true, 'like')"
              @mouseleave="hoverIcon(false, 'like')"
              @click.prevent="onclickWish"
              @keydown="handleKeyDown"
            >
            </i>
            <i
              class="bi bi-circle-fill"
              style="
                position: absolute;
                top: 6px;
                right: 75px;
                font-size: 18px;
                color: red;
              "
            >
              <span
                style="
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  color: white;
                  font-size: 12px;
                  font-family: 'Arial', sans-serif;
                "
                >{{ wishListNum }}</span
              >
            </i>
          </div>
          <!-- 未登入圖示 -->
          <!-- <i v-if="!isLogin" data-bs-toggle="dropdown" aria-expanded="false"
             class="bi bi-person"
             :style="accountIconStyle"
             @mouseover="hoverIcon(true, 'account')"
             @mouseleave="hoverIcon(false, 'account')"
             >
             <div style="
             position: absolute;
             top: 50px;
             right: 130px;">
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">帳戶資訊</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#"
                    @click.prevent="login"
                    @keydown="handleKeyDown">登入
                  </a></li>
                </ul>
             </div>
          </i> -->

          <!-- 已登入圖示 -->
          <!-- <i v-if="isLogin" data-bs-toggle="dropdown" aria-expanded="false"
          class="bi bi-person-check"
             :style="accountIconStyle"
             @mouseover="hoverIcon(true, 'account')"
             @mouseleave="hoverIcon(false, 'account')"
          >
            <div style="
             position: absolute;
             top: 50px;
             right: 130px;">
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item">帳戶資訊</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item"
                    @click.prevent="logout"
                    @keydown="handleKeyDown">登出
                  </a></li>
                </ul>
             </div>
          </i> -->

          <!-- 加入購物車圖示 -->
          <!-- <i v-if="isLogin" class="bi bi-cart3"
             :style="cartIconStyle"
             @mouseover="hoverIcon(true, 'cart')"
             @mouseleave="hoverIcon(false, 'cart')"
             @click.prevent="onclickCart"
             @keydown="handleKeyDown">
          </i> -->

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  inject: ['emitter'],
  props: {
    isLogin: {
      type: Boolean,
      required: true,
    },
    curCurrency: {},
    curLang: {},
    wishListNum: {},
  },
  data() {
    return {
      isAccount: false,
      isLike: false,
      isCart: false,
    };
  },
  computed: {
    accountIconStyle() {
      return {
        color: this.isAccount ? 'gold' : 'white',
        position: 'absolute',
        top: this.isAccount ? '6px' : '6px',
        right: this.isLogin ? '32px' : '32px', // 根據 isLogin 判斷右邊距離（可選）
        fontSize: this.isAccount ? '30px' : '30px',
        transition: 'all 0.3s ease',
      };
    },
    likeIconStyle() {
      return {
        color: this.isLike ? 'gold' : 'white',
        position: 'absolute',
        top: this.isLike ? '6px' : '6px',
        right: this.isLogin ? '82px' : '82px', // 根據 isLogin 判斷右邊距離（可選）
        fontSize: this.isLike ? '30px' : '30px',
        transition: 'all 0.3s ease',
      };
    },
    // cartIconStyle() {
    //   return {
    //     color: this.isCart ? 'gold' : 'white',
    //     position: 'absolute',
    //     top: this.isCart ? '6px' : '6px',
    //     right: this.isLogin ? '132px' : '132px', // 根據 isLogin 判斷右邊距離（可選）
    //     fontSize: this.isCart ? '30px' : '30px',
    //     transition: 'all 0.3s ease',
    //   };
    // },
  },
  methods: {
    onclickLangBtn() {
      this.$emit('onclick-langModal');
    },
    onclickCurrencyBtn() {
      this.$emit('onclick-currencyModal');
    },
    hoverIcon(isHover, item) {
      this.isAccount = isHover && item === 'account';
      this.isLike = isHover && item === 'like';
      this.isCart = isHover && item === 'cart';
    },
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          this.$router.push('/main');
          this.emitter.emit('home-login-status', {
            isLogin: false,
          });
          console.log('登出成功', res);
        } else {
          console.log('已經登出或登出失敗');
        }
        this.$httpMessage(res, '會員登出');
      });
    },
    login() {
      this.$router.push('/login');
    },
    onclickWish() {
      this.$router.push('/wishList');
    },

    onclickAccountInfo() {
      this.$router.push('/main');
    },

    handleKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // 防止空格键触发页面滚动
      }
    },
  },
};
</script>
