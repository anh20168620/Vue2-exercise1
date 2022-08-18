<template>
  <div class="header">
    <div class="header-inner">
      <div class="logo">
        <img src="../../assets/image/logo.png" alt="Logo chữ v" />
      </div>
      <div class="header-list">
        <router-link
          class="header-item"
          active-class="active"
          to="/laptop"
          exact
          >Laptop</router-link
        >
        <router-link class="header-item" active-class="active" to="/linh-kien"
          >Linh kiện</router-link
        >
        <router-link class="header-item" active-class="active" to="/pc"
          >Pc</router-link
        >
        <router-link class="header-item" active-class="active" to="/khuyen-mai"
          >Khuyến mại</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
<style>
.header {
  background-color: #f60;
  position: fixed;
  z-index: 999;
  height: 55px;
  top: 0;
  left: 0;
  right: 0;
}

.header-inner {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
}

.logo img {
  width: 24px;
}

.header-list {
  margin-left: 30px;
}

.header-item {
  text-decoration: none;
  color: #fff;
  margin-right: 20px;
  font-size: 18px;
  opacity: 0.7;
}

.active {
  opacity: 1;
}
</style>
