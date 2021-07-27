<template>
  <Toolbar class="navbar">
    <template #left>
      <h2>Questions</h2>
    </template>
    <template #right>
      <h4 class="topbarright">姓名: {{ user.name }}</h4>
      <h4 class="topbarright">學號: {{ user.stuid }}</h4>
      <h4 class="topbarright">系級: {{ user.depGrade }}</h4>
    </template>
  </Toolbar>
  <Toast position="bottom-left" />
  <div class="root">
    <Card class="card">
      <template #title>
        <h3><i class="pi pi-question-circle titleicon" />題目: {{ questions[curQues] }}</h3>
      </template>
      <template #content>
        <div class="radbtns">
          <div 
            v-for="option of choices" 
            :key="option" 
            class="p-field-radiobutton"
          >
              <RadioButton 
                :id="option" 
                :name="option"
                :value="option" 
                v-model="choice" 
                @change="check" 
                class="option"
              />
              <label :for="option">{{ option }}</label>
          </div>
        </div>
      </template>
      <template #footer>
        <Button 
          id="nextquesbtn"
          class="nextquesbtn"
          label="下一題"
        />
      </template>
    </Card>
  </div>
</template>

<script>
import { user } from '../app';

export default {
  name: 'Questions',
  data () {
    return {
      user,
      questions: ['請選擇A', '請選擇B', '請選擇C', '請選擇D'],
      curQues: 0,
      answer: 'A',
      choices: ['A', 'B', 'C', 'D'],
      choice: '',
      errMsg: '',
    };
  },
  methods: {
    check () {
      this.$toast.add(this.choice === this.answer ? 
        { severity: 'success', summary: '正確答案!', life: 1000 } : 
        { severity: 'error', summary: '答案錯誤!', life: 1000 }
      );
    },
    onPageChange (event) {
      this.curQues = event.page;
    },
  }
};
</script>

<style scoped>
h2 {
  margin: 0px;
}
.navbar {
  height: 60px;
  width: auto;
  display: flex;
  align-items: center;
  color: white;
  /* background: linear-gradient(to right, #16c0b0, #84cf6a); */
  background-color: #38618f;
  border-radius: 0px;
  border-width: 0px;
  margin: -8px;
}
.topbarright {
  margin: 0px;
  margin-left: 20px;
}
.root {
  height: calc(100vh - 52px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-block: 50px;
  margin: -8px;
  background-color: #c7c5b8;
  overflow: auto;
}
.paginator {
  color: yellow;
  background-color: rgba(0, 0, 0, 0);
  border-width: 0px;
}
.card {
  width: 600px;
  min-width: 300px;
  max-height: 550px;
  min-height: 500px;
  display: flex;
  justify-content: center;
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
.card h3 {
  text-align: center;
  color: white;
  margin: 0px;
}
.titleicon {
  font-size: inherit;
  margin-right: 10px;
}
.divider {
  border-width: 10px;
  z-index: 1000;
}
.radbtns {
  width: 50%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-inline: 50px;
  border-width: 20px;
}
.option {
  margin-inline: 10px;
}
.nextquesbtn {
  width: 200px;
  border-width: 0px;
  font-size: inherit;
  font-style: inherit;
  margin-top: 20px;
  background-color: rgba(255, 103, 69);
}
.nextquesbtn:hover {
  border-width: 0px;
  background-color: rgba(255, 63, 29);
}
</style>