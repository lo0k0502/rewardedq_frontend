<template>
  <Toolbar class="navbar">
    <template #left>
      <h2 style="margin: 0px; margin-top: -5px">結果</h2>
    </template>
  </Toolbar>
  <div class="root">
    <Card class="card">
    <template #title>
        <h2 class="title">您的成績是: {{ user.grade }}</h2>
    </template>
    <template #content>
      <div class="knobcontent">
        <Knob 
          :modelValue="user.grade" 
          :size="200"
        />
      </div>
    </template>
    <template #footer>
      <h2 class="title">{{ user.grade >= 85 ? '恭喜!您獲得了抽獎資格!' : '抱歉，您沒有獲得抽獎資格...' }}</h2>
    </template>
    </Card>
  </div>
</template>

<script>
import { user } from '../main';

export default {
    name: 'Result',
    data() {
        return {
            user,
        };
    },
};
</script>

<style scoped>
.navbar {
  position: sticky;
  height: var(--nav-height);
  color: white;
  background-color: var(--nav-bg);
  border-radius: 0px;
  border-width: 0px;
}
.root {
  height: calc(100vh - var(--nav-height));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 50px;
  background-color: var(--bg);
  overflow: auto;
}
.card {
  width: 600px;
  min-width: 300px;
  height: 500px;
  color: white;
  background-color: var(--form-bg);
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  padding: 0px;
}
@media (max-width: 800px) {
  .card {
    max-width: 75%;
  }
}
.title {
  text-align: center;
  margin: 0px;
}
.knobcontent {
  display: flex;
  justify-content: center;
}
</style>