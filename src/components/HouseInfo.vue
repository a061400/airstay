<template>
  <div class="card">
    <div class="card bg-dark text-white text-left" style="position: relative">
      <img
        class="card-img-top img-cover"
        style="height: 155px"
        :src="info.img"
        alt=""
      />
      <i
        class="bi bi-circle-fill"
        style="
          position: absolute;
          top: -3px;
          right: 2px;
          font-size: 40px;
        "
      ></i>
      <i
        class="bi bi-heart"
        style="
          position: absolute;
          top: 10px;
          right: 10px;
          color: black;
          font-size: 24px;"
        @click="addToLike"
        @keydown="handleKeyDown"
      ></i>
    </div>
    <div class="card-body text-left">
      <h5 class="card-text">
        {{ info.name }}
      </h5>
      <p class="card-text">
        <i class="bi bi-geo-alt-fill"></i>
        {{ info.country }} {{ info.city }}
      </p>
      <p class="card-text">
        <i class="bi bi-star-fill"></i>
        {{ info.rating }} {{ info.ratingNum }}則評論
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  data() {
    return {};
  },
  methods: {
    addToLike() {
      console.log('click');
    },
    handleKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // 防止空格键触发页面滚动
        this.addToLike();
      }
    },
  },
};
</script>
