<template>
    <div class="card">
      <div class="card bg-dark text-white text-left">
        <img
          class="card-img-top img-cover"
          style="height: 155px"
          :src="info.img" alt=""
        />
        <i class="bi bi-heart"></i>
      </div>
      <div class="card-body text-left">
        <h5 class="card-text">
          {{ info.name }}
        </h5>
        <p class="card-text">
          <i class="fas fa-map-marker-alt fa-map-gps"></i>&nbsp;
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
    return {
    };
  },
};
</script>
