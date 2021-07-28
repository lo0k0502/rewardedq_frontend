<template>
  <Toolbar class="navbar">
    <template #left>
      <h2>Result</h2>
    </template>
    <template #right>
        <h4 class="profile">姓名: {{ user.name }}</h4>
        <h4 class="profile">學號: {{ user.stuid }}</h4>
        <h4 class="profile">系級: {{ user.depGrade }}</h4>
    </template>
  </Toolbar>
  <div class="root">
    <Card class="card">
    <template #title>
        <h4 class="title">{{ user.grade }}</h4>
    </template>
    <template #content>
    </template>
    <template #footer>
    </template>
    </Card>
  </div>
</template>

<script>
import { user } from '../app';

export default {
    name: 'Result',
    data() {
        return {
            user,
        };
    },
};
</script>

<style>
h2 {
  margin: 0px;
}
.navbar {
  height: 60px;
  color: white;
  background-color: #38618f;
  border-radius: 0px;
  border-width: 0px;
  margin: -8px;
}
.profile {
  margin: 0px;
  margin-left: 1em;
}
.root {
  height: calc(100vh - 52px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 50px;
  margin: -8px;
  background-color: #c7c5b8;
  overflow: auto;
}
.card {
  width: 600px;
  min-width: 300px;
  height: 450px;
  color: white;
  background-color: #fd9735;
  border-radius: 20px;
  box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, .3);
  padding: 0px;
}
@media (max-width: 800px) {
  .card {
    max-width: 75%;
  }
}
.title {
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>