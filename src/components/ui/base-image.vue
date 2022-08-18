<template>
  <img
    :src="
      url_image
        ? base_url_image + url_image
        : 'https://thinkpro.vn/_nuxt/img/fallback-image.4d0336f.png'
    "
    alt=""
  />
</template>
<script>
export default {
  props: {
    url_image: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      base_url_image: "https://media-api-beta.thinkpro.vn/",
    };
  },
};
</script>
<style></style>
