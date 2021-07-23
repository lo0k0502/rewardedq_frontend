<template>
  <div class="root">
    <div class="form">
      <h1>有獎徵答</h1>
      <button @click="handleSubmit()">開始</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    handleSubmit () {
      this.$router.push('/about');
    }
  },
}
</script>

<style scoped>
.root {
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 30px;
  padding-top: 50px;
}
.form {
  width: 500px;
  height: 500px;
  background-color: #01abaa;
  box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, .3);
  border-radius: 20px;
  color: white;
}
</style>