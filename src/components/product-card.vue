<template>
  <router-link
    style="text-decoration: none; color: inherit"
    :to="`/detail-product/${product.id}`"
  >
    <div class="product-card">
      <div class="product-image">
        <base-image
          :url_image="product.images[0]"
          class="product-img"
          :alt="product.name"
        ></base-image>
      </div>
      <div class="product-description">
        <div class="product-name">{{ product.name }}</div>
        <div class="product-sale-price">
          <span v-if="product.promo_tags.discount">Từ</span>
          {{ formatSalePriceToVnd }}
        </div>
        <div
          :class="{
            productPrice: !product.promo_tags.discount,
            textThrough: product.promo_tags.discount,
          }"
        >
          <span v-if="!product.promo_tags.discount">Từ</span>
          {{ formatPriceToVnd }}
        </div>
        <span v-if="product.promo_tags.discount" class="promotional-percentage"
          >-{{ promotionalPercentage }}%</span
        >
        <br />
        <span>Màu({{ getColors.length }}):</span>
        <span> {{ getColors.join(", ") }} </span>
      </div>
    </div>
  </router-link>
</template>
<script>
import baseImage from "./ui/base-image.vue";
export default {
  components: {
    baseImage,
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: {},
    },
  },
  methods: {},
  computed: {
    getColors() {
      return this.product.colors.map((color) => color.name);
    },
    formatSalePriceToVnd() {
      return this.product.sale_price?.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    },
    formatPriceToVnd() {
      return this.product.price?.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    },
    promotionalPercentage() {
      if (this.product.sale_price !== null)
        return Math.ceil(
          ((this.product.price - this.product.sale_price) /
            this.product.price) *
            100
        );
    },
  },
};
</script>
<style>
.product-img {
  width: 200px;
  height: 200px;
  background-color: #fff;
}

.product-sale-price {
  color: red;
}

.productPrice {
  color: red;
  display: inline-block;
}

.textThrough {
  text-decoration: line-through;
  display: inline-block;
}

.promotional-percentage {
  margin-left: 10px;
  font-weight: bold;
}

.product-name {
  font-size: 16px;
  font-weight: bold;
}
</style>
