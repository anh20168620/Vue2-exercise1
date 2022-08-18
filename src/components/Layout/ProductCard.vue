<template>
  <div>
    <router-link
      style="text-decoration: none; color: inherit"
      :to="`/detail-product/${product.id}`"
    >
      <div class="productCard">
        <div class="product-image">
          <img
            class="product-img"
            :src="'https://media-api-beta.thinkpro.vn/' + product.images[0]"
            alt=""
          />
        </div>
        <div class="product-description">
          <div class="product-name">{{ product.name }}</div>
          <div class="product-sale-price">
            <span v-if="product.promo_tags.discount">Từ</span>
            {{
              product.sale_price?.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })
            }}
          </div>
          <div
            :class="{
              productPrice: !product.promo_tags.discount,
              textThrough: product.promo_tags.discount,
            }"
          >
            <span v-if="!product.promo_tags.discount">Từ</span>
            {{
              product.price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })
            }}
          </div>
          <span
            v-if="product.promo_tags.discount"
            class="promotional-percentage"
            >-{{ getPromotionalPercentage() }}%</span
          >
          <br />
          <span>Màu({{ getColor().length }}):</span>
          <span> {{ getColor().join(", ") }} </span>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    getColor() {
      return this.product.colors.map((color) => color.name);
    },
    getPromotionalPercentage() {
      if (this.product.sale_price !== null)
        return Math.ceil(
          ((this.product.price - this.product.sale_price) /
            this.product.price) *
            100
        );
    },
  },
  computed: {},
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
