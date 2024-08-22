<template>
    付款完成，感謝您的預定
    您的訂單編號為:{{this.id}}
</template>

<script>
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
