<template>
  <!-- <div class="toast-container position-absolute pe-3 top-0 end-0"> -->
    <div class="toast-container position-absolute top-50 start-50">
    <Toast v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    />
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue';

export default {
  components: { Toast },
  data() {
    return {
      messages: [],
    };
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-message', (data) => {
      const { title, content } = data;
      this.messages.push({ title, content });
    });
  },
};
</script>
