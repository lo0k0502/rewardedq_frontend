<template>
  <router-view class="root"></router-view>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: var(--bluegray-900);
}
:root {
  --bg: #c7c5b8;
  --form-bg: #fd9735;
  --nav-height: 100px;
  --nav-bg: #38618f;
  --box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, .3);
  --speed: 300ms;
}
</style>