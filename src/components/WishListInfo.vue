<template>
  <div class="card">
    <div class="card bg-dark text-white text-left" style="position: relative">
      <img
        class="card-img-top img-cover"
        style="height: 155px"
        :src="info.imageUrl"
        alt=""
        @click="onClickRoom(info.id)"
        @keydown="handleKeyDown"
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
        v-if="isWish"
        class="bi bi-heart-fill"
        style="
          position: absolute;
          top: 10px;
          right: 10px;
          color: red;
          font-size: 24px;
          transition: transform 0.2s ease-in-out;"
        @click="deleteWish(info.id)"
        @keydown="handleKeyDown"
        @mouseover="handleMouseEnter"
        @mouseout="handleMouseLeave"
        @focus="handleMouseEnter"
        @blur="handleMouseLeave"
      ></i>
    </div>
    <div class="card-body text-left" @click="onClickRoom(info.id)" @keydown="handleKeyDown">
      <h5 class="card-text">
        {{ info.title }}
      </h5>
      <p class="card-text">
        <i class="bi bi-geo-alt-fill"></i>
        {{ info.category }}
      </p>
      <p class="card-text">
        {{ info.content }}
      </p>
      <del class="card-text">
        ${{ info.origin_price }} {{ curCurrency }}
      </del>
      <p class="card-text">
         ${{ info.price }} {{ curCurrency }}
      </p>
      <p class="card-text">
        <i class="bi bi-star-fill"></i>
        {{ info.unit }} {{ info.description }}則評論
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  inject: [
    'curCurrency',
  ],
  data() {
    return {
      isWish: true,
    };
  },
  methods: {
    deleteWish(id) {
      this.$emit('delet-wish', id);
    },
    handleKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // 防止空白鍵觸發頁面捲動
      }
    },
    onClickRoom(id) {
      this.$router.push(`/room/${id}`);
    },
    handleMouseEnter(event) {
      const item = event;
      item.target.style.transform = 'scale(1.2)';
    },
    handleMouseLeave(event) {
      const item = event;
      item.target.style.transform = 'scale(1)';
    },
  },
};
</script>
