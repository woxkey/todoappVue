<template>
  <div>
    <h1>This is a home page</h1>
    <router-link class="link" to="/todos">Go to my todos</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.link {
  text-decoration: none;
  color: black;
}
.link:hover {
  color: purple;
}
</style>
