<template>
  <div class="root">
    <div class="formcontainer">
      <div v-if="window.width >= 560" style="text-align: center;">
        <h1 style="margin-bottom: 0px;">國立中正大學交通安全宣導</h1>
        <h1 style="margin-top: 0px;">線上有獎徵答試題</h1>
      </div>
      <div v-else style="text-align: center;">
        <h1 style="margin-bottom: 0px;">國立中正大學</h1>
        <h1 style="margin-block: 0px;">交通安全宣導</h1>
        <h1 style="margin-top: 0px;">線上有獎徵答試題</h1>
      </div>
      <form class="form" @submit.prevent="handleSubmit">
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
        <div>
          <span class="p-float-label p-input-icon-left inputspan">
            <i class="pi pi-id-card" />
            <InputText 
              id="stuidInput" 
              type="text" 
              v-model="stuidInput.stuid" 
              @change="stuidCheck"
              aria-describedby="stuidErr"
              :class="['p-inputtext-lg input', { 'p-invalid': stuidInput.errMsg }]"
            />
            <label for="stuidInput">學號</label>
          </span>
        </div>
        <small id="stuidErr" class="p-error helpertext">{{ stuidInput.errMsg }}</small>
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
import { user, setUser } from '../main';

export default {
  name: 'Login',
  created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
  },
  destroyed() {
      window.removeEventListener('resize', this.handleResize);
  },
  data() {
    return {
      nameInput: {
        name: '',
        errMsg: '',
      },
      stuidInput: {
        stuid: '',
        errMsg: '',
      },
      depGradeInput: {
        depGrade: '',
        errMsg: '',
      },
      user,
      setUser,
      window: {
          width: 0,
          height: 0
      },
    };
  },
  methods: {
    nameCheck() {
      this.nameInput.errMsg = this.nameInput.name === '' ? '請填寫此欄位' : '';
    },
    stuidCheck() {
      if (this.stuidInput.stuid === '') this.stuidInput.errMsg = '請填寫此欄位';
      else if (!this.stuidInput.stuid.match(/^\d\d\d\d\d\d\d\d\d$/)) this.stuidInput.errMsg = '學號必須為九位數字';
      else this.stuidInput.errMsg = '';
    },
    depGradeCheck() {
      this.depGradeInput.errMsg = this.depGradeInput.depGrade === '' ? '請填寫此欄位' : '';
    },
    handleSubmit() {
      if (!this.nameInput.name
        || !this.stuidInput.stuid
        || !this.stuidInput.stuid.match(/^\d\d\d\d\d\d\d\d\d$/)
        || !this.depGradeInput.depGrade) {
        if (!this.nameInput.name) this.nameInput.errMsg = '請填寫此欄位';
        if (!this.stuidInput.stuid) this.stuidInput.errMsg = '請填寫此欄位';
        else if (!this.stuidInput.stuid.match(/^\d\d\d\d\d\d\d\d\d$/)) this.stuidInput.errMsg = '學號必須為九位數字';
        if (!this.depGradeInput.depGrade) this.depGradeInput.errMsg = '請填寫此欄位';
        return;
      }
      this.stuidInput.errMsg = '';
      this.depGradeInput.errMsg = '';
      this.nameInput.errMsg = '';

      setUser({ 
        name: this.nameInput.name,
        stuid: this.stuidInput.stuid,
        depGrade: this.depGradeInput.depGrade,
        grade: 0,
      });
      this.$router.push('/questions');
    },
    handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
    },
  },
};
</script>

<style scoped>
.root {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #c7c5b8;
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
  background-color: aliceblue;
  box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, .3);
  border-radius: 20px;
  padding: 20px;
  padding-bottom: 50px;
  font-size: 15px;
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
  background-color: #fd9735;
  border-radius: 20px;
  padding: 20px;
}
.input {
  width: 95%;
  background-color: rgb(255, 255, 255, 0.5);
  border-width:1px;
}
.inputspan {
  margin-top: 30px;
  margin-left: 20px;
}
.helpertext {
  margin: 0px;
  padding: 0px;
  font-size: 14px;
}
.btn {
  width: 200px;
  border-width: 0px;
  font-size: inherit;
  font-style: inherit;
  margin-top: 20px;
  background-color: rgba(255, 103, 69);
}
.btn:hover {
  background-color: rgba(255, 63, 29);
}
</style>
