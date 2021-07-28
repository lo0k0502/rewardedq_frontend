<template>
  <router-view class="root"></router-view>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: var(--bluegray-900);
}
</style>

<style scoped>
.root {
  height: 100vh;
  margin: -8px;
}
</style>
