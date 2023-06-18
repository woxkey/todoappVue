<template>
  <div class="container">
    <div class="homepage">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/todos">Todos</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.homepage {
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.link {
  text-decoration: none;
  color: black;
  font-size: 20px;
}
.link:hover {
  color: gray;
}
</style>
