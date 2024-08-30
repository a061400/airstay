<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單細節</span>
          </h5>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3>訂購人資訊</h3>
              <table class="table">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <td>{{ tempOrder.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ tempOrder.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ tempOrder.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ tempOrder.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ tempOrder.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ $numFilter.date(tempOrder.create_at) }}</td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="tempOrder.paid_date">
                        {{ $numFilter.date(tempOrder.paid_date) }}
                      </span>
                      <span v-else>時間不正確</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          :id="`switch${item.id}`"
                          v-model="tempOrder.is_paid"
                        />
                        <label
                          class="form-check-label"
                          :for="`switch${item.id}`"
                        >
                          <strong v-if="tempOrder.is_paid" class="text-success"
                            >已付款</strong
                          >
                          <span v-else class="text-muted">尚未付款</span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>${{ $numFilter.currency(tempOrder.total) }}</td>
                  </tr>
                </tbody>
              </table>
              <h3>訂購飯店</h3>
              <table class="table">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="item in tempOrder.products" :key="item.id">
                    <th>
                      {{ item.product.title }}
                    </th>
                    <td>房間數量: {{ item.qty }} 間</td>
                    <td class="">
                      單價: ${{ $numFilter.currency(item.product.price) }}
                    </td>
                    <td class="">
                      總計: ${{ $numFilter.currency(item.final_total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
            @click="$emit('update-paid', tempOrder)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  data() {
    return {
      tempOrder: {},
    };
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
      this.tempOrder = this.item;
    },
  },
  mixins: [modalMixin],
  methods: {},
};
</script>
