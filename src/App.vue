<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "./components/Layout/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      text: "",
    };
  },
};
</script>
<style></style>
