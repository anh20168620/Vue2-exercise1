<template>
  <div class="container">
    <h1>Pc</h1>
    <div class="product-list">
      <product-card
        v-for="(pc, index) in Pcs"
        :key="index"
        :product="pc"
        class="product-item"
      ></product-card>
    </div>
  </div>
</template>
<script>
import productCard from "../components/product-card.vue";
import * as filter from "../services/filter";
export default {
  data() {
    return {
      Pcs: undefined,
      current_page: 1,
    };
  },
  components: {
    productCard,
  },
  created() {
    this.fetchPcs();
  },
  methods: {
    async fetchPcs() {
      const result = await filter.fetchProduct("filters/filter", {
        cur_page: this.current_page,
        filters: { category: { queryValue: [3] } },
        per_page: 33,
        search: "",
        sort: 0,
      });
      this.Pcs = result.data;
    },
  },
};
</script>
<style></style>
