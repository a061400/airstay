<template>
  <hr />
  <div class="container">
    <div class="row">
      <div class="col mb-5">
        <div class="d-flex align-items-center">
            <i class="bi bi-star-fill me-2 mb-2" style="color: Orange; font-size:20px"></i>
            <h3 class="" style="color: Orange">{{ score }}</h3>
        </div>
        <p><img alt="countrylogo" :src="require(`../assets/${countrylogo}.png`)"
        class="mb-1" style="width:18px">
          Shawn (來自台灣)</p>
        <p>豪華雙人房</p>
        <p>入住2晚 (2024年{{this.month}}月)</p>
      </div>
      <div
        class="col-8 d-flex flex-column justify-content-center rounded"
        style="height: 200px; background-color: WhiteSmoke"
      >
        <p>
            連續住了一星期，很滿意。 雖然是老飯店，但是設備有更新，維護的也挺好，
            房間浴室空間大，服務好，早餐中西式都有，平面停車場很方便。 前面就是公園，
            週末有活動，附近有美術館和科博館、植物園，帶小孩活動不無聊。
        </p>
        <p class="mt-auto">評鑑日期：2024年{{this.month}}月{{this.day}}日</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 10.0,
      countrylogo: 'TW',
      month: 1,
      day: 1,
    };
  },
  created() {
    this.score = (Math.random() * 5 + 5).toFixed(1);
    this.month = Math.floor((Math.random() * 11 + 1));
    this.day = Math.floor((Math.random() * 30 + 1));
  },
};
</script>
