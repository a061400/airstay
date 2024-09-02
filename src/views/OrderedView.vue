<template>
<div class="text-center d-flex flex-column
 align-items-center " style="min-height: 100vh; padding-top: 250px;
  background-color: black;">
    <h2 style="color: white;">感謝您的預定</h2>
    <h3 style="color: white;">付款已完成</h3>
    <P style="color: white;">您的訂單編號為：<strong> {{this.id}} </strong></p>
</div>
</template>

<script>
// :style="{ backgroundImage: `url(${require('@/assets/EN.png')})`}"
export default {
  data() {
    return {
    };
  },
  created() {
    this.id = this.$route.params.orderedId;
  },
};
</script>
