<template>
  <div class="container">
    <h1>Pc</h1>
    <div class="product-list">
      <product-card
        v-for="(pc, index) in listPcs"
        :key="index"
        :product="pc"
        class="product-item"
      ></product-card>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ProductCard from "../components/Layout/ProductCard.vue";
export default {
  data() {
    return {
      listPcs: undefined,
      current_page: 1,
    };
  },
  components: {
    ProductCard,
  },
  created() {
    axios
      .post(`https://thinkpro.vn/front-store/filters/filter`, {
        cur_page: 1,
        filters: { category: { queryValue: [3] } },
        per_page: 33,
        search: "",
        sort: 0,
      })
      .then((res) => {
        console.log(res);
        this.listPcs = res.data.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  methods: {},
};
</script>
<style></style>
