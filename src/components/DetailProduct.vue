<template>
  <div class="container">
    <h1>Detail product {{ id }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>
<style></style>
