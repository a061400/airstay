<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增或編輯房型</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  placeholder="請輸入圖片連結"
                />
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label"
                  >或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input
                  type="file"
                  id="customFile"
                  class="form-control"
                  @change="uploadFile"
                  ref="fileInput"
                />
              </div>
              <img class="img-fluid" alt="" />
              <!-- 延伸技巧，多圖 -->
              <div class="mt-5">
                <div class="mb-3 input-group">
                  <input
                    type="url"
                    class="form-control form-control"
                    placeholder="請輸入連結"
                  />
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </div>
                <div>
                  <button class="btn btn-outline-primary btn-sm d-block w-100">
                    新增圖片
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">飯店名稱</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入飯店名稱"
                  v-model="tempRoomInfo.title"
                />
              </div>
               <div class="mb-3">
                  <label for="category" class="form-label">所在地區</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    placeholder="請輸入所在地區"
                    v-model="tempRoomInfo.category"
                  />
                </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="unit" class="form-label">評價分數</label>
                  <input
                    type="text"
                    class="form-control"
                    id="unit"
                    placeholder="請輸入評價分數"
                    v-model="tempRoomInfo.unit"
                  />
                </div>
                <div class="mb-3 col-md-6">
                    <label for="description" class="form-label">評價數量</label>
                    <input
                    type="number"
                    class="form-control"
                    id="description"
                    placeholder="請輸入評價數量"
                    v-model="tempRoomInfo.description"
                    />
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="origin_price"
                    placeholder="請輸入原價"
                    v-model="tempRoomInfo.origin_price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    placeholder="請輸入售價"
                    v-model="tempRoomInfo.price"
                  />
                </div>
              </div>
              <hr />
              <div class="mb-3">
                <label for="content" class="form-label">房型</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入房型詳細資訊"
                  v-model="tempRoomInfo.content"
                ></textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                    v-model="tempRoomInfo.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否上架
                  </label>
                </div>
              </div>
            </div>
          </div>
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
            class="btn btn-primary"
            @click="$emit('update-roomInfo', tempRoomInfo)"
          >
            確認
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
      tempRoomInfo: {},
      modal: {},
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
  },
  watch: {
    item() {
      this.tempRoomInfo = this.item;
    },
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
