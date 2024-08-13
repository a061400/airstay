<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1"
 aria-labelledby="exampleModalLabel" aria-hidden="true"
 ref="modal">
<div class="modal-dialog modal-xl" role="document">
  <div class="modal-content border-0">
    <div class="modal-header bg-dark text-white">
      <h5 class="modal-title" id="exampleModalLabel">
        <span>選擇您使用的貨幣</span>
      </h5>
      <button type="button" class="btn-close" style="background-color: white;"
              data-bs-dismiss="modal" aria-label="Close">
      </button>
    </div>
    <div class="modal-body">
      <div class="row">
        <div class="col-sm-12">
          <div class="row gx-2">
            <div class="mb-2 col-md-12">
              <button v-for="(country,index) in countryArr" :key="country"
                 type="button" class="btn btn-outline-secondary"
                 data-bs-dismiss="modal" style="margin:5px" @click="onclickCurrency(index)">
                 <img alt="Vue logo" :src="require(`@/assets/${country}.png`)" style="width:25px">
                    {{currencyArr[index]}}
              </button>
            </div>
          </div>
        </div>
      </div>
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
      modal: {},
      tempProduct: {},
      countryArr: [
        'TW', 'EN', 'FR', 'JP', 'KR', 'TH', 'VN',
      ],
      currencyArr: [
        'TWD', 'GBP', 'EUR', 'JPY', 'KRW', 'THB', 'VND',
      ],
    };
  },
  props: {
    product: {
      type: Object,
      default() { return {}; },
    },
  },
  watch: {
    product() {
      this.tempProduct = this.product;
    },
  },
  mixins: [
    modalMixin,
  ],
  methods: {
    onclickCurrency(curIndex) {
      this.$emit('onclick-currency', this.currencyArr[curIndex]);
    },
  },
};
</script>
