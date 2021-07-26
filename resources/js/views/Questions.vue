<template>
  <div class="root">
    questions{{ user.id }}{{ user.depGrade }}{{ user.name }}
  </div>
</template>

<script>
import { user } from '../app';

export default {
  name: 'Questions',
  data () {
    return {
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