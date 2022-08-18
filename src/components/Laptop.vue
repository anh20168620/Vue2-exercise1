<template>
  <div class="container">
    <h1>Laptop</h1>
    <div class="product-list">
      <product-card
        v-for="(laptop, index) in listLaptops"
        :key="index"
        :product="laptop"
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
import axios from "axios";
import ProductCard from "../components/Layout/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      listLaptops: undefined,
      current_page: 1,
    };
  },
  created() {
    axios
      .post(`https://thinkpro.vn/front-store/filters/filter`, {
        cur_page: 1,
        filters: { category: { queryValue: [1] } },
        per_page: 33,
        search: "",
        sort: 0,
      })
      .then((res) => {
        console.log(res);
        this.listLaptops = res.data.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
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
  },
  watch: {
    current_page() {
      this.scrollToTop();
      axios
        .post(`https://thinkpro.vn/front-store/filters/filter`, {
          cur_page: this.current_page,
          filters: { category: { queryValue: [1] } },
          per_page: 33,
          search: "",
          sort: 0,
        })
        .then((res) => {
          console.log(res);
          this.listLaptops = res.data.data;
        })
        .catch((err) => {
          console.log(err.message);
        });
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
