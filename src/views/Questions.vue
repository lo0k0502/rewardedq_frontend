<template>
  <div class="root">
    <ui-top-app-bar
      class="navbar"
    >
    Questions{{ user.id }}{{ answer }}
    </ui-top-app-bar>
    <ui-form class="form">
        <h1>題目: 請選擇A</h1>
        <ui-divider></ui-divider>
        <ui-form-field class="answers">
          <ui-radio input-id="a" name="answer" v-model="answer"></ui-radio>
          <label for="a">A</label>
          <ui-radio input-id="b" name="answer" v-model="answer"></ui-radio>
          <label for="b">B</label>
          <ui-radio input-id="c" name="answer" v-model="answer"></ui-radio>
          <label for="c">C</label>
          <ui-radio input-id="d" name="answer" v-model="answer"></ui-radio>
          <label for="d">D</label>
        </ui-form-field>
    </ui-form>
  </div>
</template>

<script>
import { user } from '../main';

export default {
  name: 'Questions',
  data: () => {
    return {
      user,
      answer,
    };
  },
};
</script>

<style scoped>
.root {
  display: flex;
  justify-content: center;
  margin: -8px;
}
.navbar {
  position: absolute;
  background-color: #ffa200;
}
.form {
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #5CF2E8;
  box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, .3);
  border-radius: 20px;
  margin-block: 50px;
  margin-top: 100px;
  margin-bottom: 30px;
}
.form h1 {
  color: white;
}
.answers {
  width: 500px;
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  color: black;
}
.answers label {
  margin-left: -80px;
}
</style>