<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable max-len -->
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-light">
  <div
    class="navbar-content"
    style="display: flex; flex-direction: row; margin: 20px 50px; justify-content: space-between; align-items: center"
  >
    <div style="display: flex; flex-direction: row;">
      <p>© 2024 AirStay, Inc.</p>
      <p style="margin: 0px 10px">·</p>
      <router-link to="/main" class="nav-link" style="color: black"
        >隱私權政策</router-link
      >
      <p style="margin: 0px 10px">·</p>
      <router-link to="/main" class="nav-link" style="color: black"
        >相關條款</router-link
      >
    </div>

    <div id="shaw" class="ms-5">
      <div class="">
        <ul class="list-unstyled list-inline">
          <li class="list-inline-item me-3">
            <a href="#!">
              <i class="bi bi-youtube" style="font-size: 25px"></i>
            </a>
          </li>
          <li class="list-inline-item me-3">
            <a href="#!">
              <i class="bi bi-facebook" style="font-size: 25px"></i>
            </a>
          </li>
          <li class="list-inline-item me-3">
            <a href="#!">
              <i class="bi bi-twitter" style="font-size: 25px"></i>
            </a>
          </li>
          <li class="list-inline-item me-3">
            <a href="#!">
              <i class="bi bi-instagram" style="font-size: 25px"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>
