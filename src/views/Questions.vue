<template>
  <div class="root">
    <ui-top-app-bar
      contentSelector=".root"
      class="navbar"
    >
      Questions{{ user.id }}
    </ui-top-app-bar>

    <ui-card class="card">
      <h1>題目: 請選擇A</h1>
      <ui-divider></ui-divider>
      <ui-form class="form">
        <ui-form-field class="choice" v-for="(ch, key, index) in choices" :key="key">
          <ui-radio 
            class="radio"
            :input-id="index"
            :value="ch" 
            :model-value="choice"
            @update:modelValue="balmUI.onChange('choice', ch, handleOnChange(ch))"
          ></ui-radio>
          <label class="optionlabel" :for="index">{{ ch }}</label>
        </ui-form-field>
      </ui-form>
      <ui-alert 
        state="error"
        v-if="errMsg"
      >{{ errMsg }}</ui-alert>
    </ui-card>
  </div>
</template>

<script>
import { useEvent } from 'balm-ui';
import { user } from '../main';

export default {
  name: 'Questions',
  data () {
    return {
      balmUI: useEvent(),
      user,
      answer: 'A',
      choices: ['A', 'B', 'C', 'D'],
      choice: '',
      errMsg: '',
    };
  },
  methods: {
    handleOnChange (ch) {
      if (ch !== this.answer) this.errMsg = '答案錯誤';
        else this.errMsg = '';
    },
  }
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
.card {
  width: 500px;
  min-width: 300px;
  max-height: 500px;
  min-height: 400px;
  margin: 100px;
  background-color: #5CF2E8;
  border-radius: 20px;
  box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, .3);
  padding: 20px;
}
.card h1 {
  text-align: center;
  color: white;
  margin: 0px;
}
.form {
  max-width: 400px;
  min-width: none;
  display: flex;
  flex-direction: column;
  margin-block: 30px;
}
.choice {
  word-wrap: break-word;
}
.optionlabel {
  max-width: 400px;
}
</style>