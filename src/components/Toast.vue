<template>
  <div class="toast rounded-pill" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
    <div class="toast-body bg-info text-white rounded-pill text-center">
      <strong class="me-auto">{{ msg.title }}</strong>
    </div>
  </div>
</template>
<script>
import Toast from 'bootstrap/js/dist/toast';

export default {
  name: 'Toast',
  props: [
    'msg',
  ],
  mounted() {
    const toastEl = this.$refs.toast;
    const toast = new Toast(toastEl, {
      delay: 2000,
    });
    toast.show();
  },
};
</script>
