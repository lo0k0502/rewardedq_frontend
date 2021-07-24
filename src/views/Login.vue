<template>
  <div class="root">
    <ui-form class="formcontainer">
      <ui-form-field class="form">
        <h1>有獎徵答</h1>
        <ui-divider />
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
          :v-if="idInput.error"
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
          :v-if="depGradeInput.error"
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
          @enter="handleSubmit()"
        >
          姓名
        </ui-textfield>
        <ui-textfield-helper
          class="inputhelper"
          id="name"
          :v-if="nameInput.error"
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
    </ui-form>
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
.formcontainer {
  max-width: 500px;
  min-width: 300px;
  min-height: 400px;
  display: flex;
  margin-block: 50px;
  margin-inline: 30px;
}
.form {
  max-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #00a03e;
  box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, .3);
  border-radius: 20px;
}
.form h1 {
  color: white;
}
.input {
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 5px;
  margin-top: 20px;
  margin-inline: 50px;
}
.btn {
  background-color: #00c267;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 30px;
  padding-block: 20px;
  padding-inline: 50px;
}
</style>