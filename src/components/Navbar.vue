<!-- eslint-disable vue/multi-word-component-names -->
<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <img alt="Vue logo" src="../assets/logo.png" style="width:25px">
        <a class="navbar-brand" href="#">AirStay</a>
        <div class="navbar-nav">
          <router-link to="/dashboard/products" class="nav-link">刊登空房</router-link>
          <router-link to="/dashboard/order" class="nav-link">變更地區語言</router-link>
          <router-link to="/dashboard/coupons" class="nav-link">變更幣別</router-link>
          <a href="#" @click.prevent="logout" class="nav-link">登入</a>
          <a href="#" @click.prevent="logout" class="nav-link">成為新會員</a>
        </div>
      </div>
    </div>
</nav>
</template>

<script>
export default {

};
</script>
