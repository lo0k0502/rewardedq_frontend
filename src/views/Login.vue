<template>
  <div class="root">
    <ui-form-field class="form">
      <h1>有獎徵答</h1>
      <ui-textfield
        class="input"
        outlined
        required
        v-model="idInput.id"
        helper-text-id="id"
      >
        學號
      </ui-textfield>
      <ui-textfield-helper
        class="inputhelper"
        id="id"
        :visible="idInput.error"
        valid-msg=true
      >
        請填寫此欄位
      </ui-textfield-helper>
      <ui-textfield
        class="input"
        outlined
        required
        v-model="depGradeInput.depGrade"
        helper-text-id="depGrade"
      >
        系級
      </ui-textfield>
      <ui-textfield-helper
        class="inputhelper"
        id="depGrade"
        :visible="depGradeInput.error"
        valid-msg=true
      >
        請填寫此欄位
      </ui-textfield-helper>
      <ui-textfield
        class="input"
        outlined
        required
        v-model="nameInput.name"
        helper-text-id="name"
      >
        姓名
      </ui-textfield>
      <ui-textfield-helper
        class="inputhelper"
        id="name"
        :visible="nameInput.error"
        valid-msg=true
      >
        請填寫此欄位
      </ui-textfield-helper>
      <ui-button
        class="btn"
        raised
        type="submit"
        @click="handleSubmit()"
      >
        開始
      </ui-button>
    </ui-form-field>
  </div>
</template>

<script>
import { user, setUser } from '../main';

export default {
  name: 'Login',
  data () {
    return {
      idInput: {
        id: '',
        error: false,
      },
      depGradeInput: {
        depGrade: '',
        error: false,
      },
      nameInput: {
        name: '',
        error: false,
      },
      user,
      setUser,
    };
  },
  methods: {
    handleSubmit () {
      setUser({ 
        id: this.idInput.id,
        depGrade: this.depGradeInput.depGrade,
        name: this.nameInput.name,
      });
      this.$router.push('/questions');
    },
  },
};
</script>

<style scoped>
.root {
  display: flex;
  justify-content: center;
}
.form {
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #01abaa;
  box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, .3);
  border-radius: 20px;
  margin-top: 50px;
  margin-inline: 30px;
}
.form h1 {
  margin-bottom: 0px;
  color: white;
}
.input {
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 5px;
}
.inputhelper {
  margin-top: -30px;
}
.btn {
  background-color: #0b856e;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 30px;
  padding-block: 20px;
  padding-inline: 50px;
}
</style>