<template>
  <div class="container">
    <h1>Pc</h1>
    <div class="product-list">
      <product-card
        v-for="(productItem, index) in productItems"
        :key="index"
        :product="productItem"
        class="product-item"
      ></product-card>
    </div>
  </div>
</template>
<script>
import productCard from "../components/product-card.vue";
import { fetchProduct } from "../services";
export default {
  data() {
    return {
      productItems: [],
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
      try {
        const result = await fetchProduct({
          cur_page: this.current_page,
          filters: { category: { queryValue: [3] } },
          per_page: 33,
          search: "",
          sort: 0,
        });
        this.productItems = result.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style></style>
