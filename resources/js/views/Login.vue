<template>
  <div class="root">
    <div class="formcontainer">
      <h1>title</h1>
      <form class="form" @submit.prevent="handleSubmit">
        <div>
          <span class="p-float-label p-input-icon-left inputspan">
            <i class="pi pi-id-card" />
            <InputText 
              id="idInput" 
              type="text" 
              v-model="idInput.id" 
              @change="idCheck"
              aria-describedby="idErr"
              :class="['p-inputtext-lg input', { 'p-invalid': idInput.errMsg }]"
            />
            <label for="idInput">學號</label>
          </span>
        </div>
        <small id="idErr" class="p-error helpertext">{{ idInput.errMsg }}</small>
        <div>
          <span class="p-float-label p-input-icon-left inputspan">
            <i class="pi pi-book" />
            <InputText 
              id="depGradeInput" 
              type="text" 
              v-model="depGradeInput.depGrade"  
              @change="depGradeCheck"
              aria-describedby="depErr"
              :class="['p-inputtext-lg input', { 'p-invalid': depGradeInput.errMsg }]"
            />
            <label for="depGradeInput">系級</label>
          </span>
        </div>
        <small id="depErr" class="p-error helpertext">{{ depGradeInput.errMsg }}</small>
        <div>
          <span class="p-float-label p-input-icon-left inputspan">
            <i class="pi pi-user" />
            <InputText 
              id="nameInput" 
              type="text" 
              v-model="nameInput.name" 
              @change="nameCheck"
              aria-describedby="nameErr"
              :class="['p-inputtext-lg input', { 'p-invalid': nameInput.errMsg }]"
            />
            <label for="nameInput">姓名</label>
          </span>
        </div>
        <small id="nameErr" class="p-error helpertext">{{ nameInput.errMsg }}</small>
        <Button 
          id="submitbtn"
          class="btn"
          type="submit" 
          label="開始" 
        />
      </form>
    </div>
  </div>
</template>

<script>
import { user, setUser } from '../app';

export default {
  name: 'Login',
  data () {
    return {
      idInput: {
        id: '',
        errMsg: '',
      },
      depGradeInput: {
        depGrade: '',
        errMsg: '',
      },
      nameInput: {
        name: '',
        errMsg: '',
      },
      user,
      setUser,
    };
  },
  methods: {
    idCheck () {
      this.idInput.id === '' ? this.idInput.errMsg = '請填寫此欄位' : '';
    },
    depGradeCheck () {
      this.depGradeInput.depGrade === '' ? this.depGradeInput.errMsg = '請填寫此欄位' : '';
    },
    nameCheck () {
      this.nameInput.name === '' ? this.nameInput.errMsg = '請填寫此欄位' : '';
    },
    handleSubmit () {
      if (!this.idInput.id
        || !this.depGradeInput.depGrade
        || !this.nameInput.name) {
        if (!this.idInput.id) this.idInput.errMsg = '請填寫此欄位';
        if (!this.depGradeInput.depGrade) this.depGradeInput.errMsg = '請填寫此欄位';
        if (!this.nameInput.name) this.nameInput.errMsg = '請填寫此欄位';
        return;
      }
      this.idInput.errMsg = '';
      this.depGradeInput.errMsg = '';
      this.nameInput.errMsg = '';

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
  align-items: flex-start;
  background-color: cornflowerblue;
  padding-block: 50px;
  overflow: auto;
}
.formcontainer {
  max-width: 600px;
  min-width: 300px;
  max-height: 550px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, .3);
  border-radius: 20px;
  padding: 20px;
  padding-bottom: 50px;
  font-size: 20px;
  font-style: italic;
}
@media (max-width: 800px) {
  .formcontainer {
    max-width: 75%;
  }
}
.form {
  max-height: 75%;
  max-width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: cadetblue;
  border-radius: 20px;
  padding: 20px;
}
.input {
  width: 95%;
  background-color: rgb(255, 255, 255, 0.5);
  /* border-width: 0px; */
}
.inputspan {
  margin-top: 20px;
  margin-left: 20px;
}
.helpertext {
  margin: 0px;
  padding: 0px;
  font-size: 14px;
}
.btn {
  width: 200px;
  color: inherit;
  border-width: 0px;
  font-size: inherit;
  font-style: inherit;
  margin-top: 20px;
}
.btn:hover {
  background-color: var(--teal-700);
}
</style>