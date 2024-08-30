<template>
  <div
    class="modal fade"
    id="delModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">
            <span v-if="infoLength === 1">刪除 {{ item.title }}</span>
            <span v-else>刪除多筆資料</span>
          </h5>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger" v-if="infoLength === 1">{{ item.title }}</strong>
          <strong class="text-danger" v-else>多筆資料</strong>
          (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="$emit('del-item')"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      modal: {},
      isMany: false,
    };
  },

  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },

  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
    infoLength: {},
  },
  watch: {
  },

  methods: {
    showModal() {
      this.modal.show();
    },

    hideModal() {
      this.modal.hide();
    },
  },
};
</script>
