<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>
<script>
import theHeader from "./components/layout/the-header.vue";
export default {
  components: {
    theHeader,
  },
  data() {
    return {};
  },
};
</script>
<style></style>
