<template>
  <div class="container">
    <h1>Laptop</h1>
    <div class="product-list">
      <product-card
        v-for="(productItem, index) in productItems"
        :key="index"
        :product="productItem"
        class="product-item"
      ></product-card>
    </div>
    <div class="pagination">
      <button @click="handleDecrease()">
        <i class="fa-solid fa-angle-left"></i>
      </button>
      <div class="current-page">{{ current_page }}</div>
      <button @click="handleIncrease()">
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  </div>
</template>
<script>
import productCard from "../components/product-card.vue";
import { fetchProduct } from "../services";
export default {
  components: {
    productCard,
  },
  data() {
    return {
      productItems: [],
      current_page: 1,
    };
  },
  created() {
    this.fetchLaptops();
  },
  methods: {
    handleDecrease() {
      this.current_page > 1 ? (this.current_page -= 1) : 1;
    },

    handleIncrease() {
      this.current_page > 13 ? 14 : (this.current_page += 1);
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },

    async fetchLaptops() {
      try {
        const result = await fetchProduct({
          cur_page: this.current_page,
          filters: { category: { queryValue: [1] } },
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
  watch: {
    current_page() {
      this.scrollToTop();
      this.fetchLaptops();
    },
  },
};
</script>
<style>
.container {
  margin: 90px auto 0;
  max-width: 800px;
}

.product-list {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
}

.product-item {
  width: 28%;
  text-align: left;
  background-color: #fff;
  margin-top: 15px;
  padding: 8px 15px;
  border-radius: 15px;
}

.product-item:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.pagination {
  display: flex;
  width: fit-content;
  margin: 20px auto;
}

.current-page {
  border-radius: 8px;
  height: 42px;
  line-height: 42px;
  outline: none;
  text-align: center;
  width: 42px;
  border: 1px solid black;
}
</style>
