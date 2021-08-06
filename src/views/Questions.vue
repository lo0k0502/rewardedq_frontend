<template>
  <Toolbar class="navbar">
    <template #left>
      <h2 v-if="window.width >= 520">國立中正大學交通安全宣導線上有獎徵答試題</h2>
      <h2 v-else>國立中正大學交通安全宣導<br />線上有獎徵答試題</h2>
    </template>
  </Toolbar>
  <div class="root">
    <div class="container">
      <Card class="card">
        <template #title>
          <h4 class="title"><i class="pi pi-question-circle titleicon" />{{ questions[curQues].question }}</h4>
        </template>
        <template #subtitle>
          <div class="radbtns">
            <div 
              v-for="option of questions[curQues].choices" 
              :key="option[0]" 
              class="p-field-radiobutton"
            >
                <RadioButton 
                  :id="option[0]" 
                  :name="option[0]"
                  :value="option[0]" 
                  v-model="questions[curQues].choice" 
                  class="option"
                  @change="check"
                />
                <label :for="option[0]">{{ option }}</label>
            </div>
          </div>
        </template>
        <template #content>
          <div class="footer">
            <Paginator
              rows="1"
              :totalRecords="questions.length"
              :template="'PrevPageLink CurrentPageReport NextPageLink'"
              @page="onPageChange($event)"
              class="paginator"
            />
          </div>
        </template>
        <template #footer>
          <div class="footer">
            <InlineMessage severity="error" :style="{ visibility: errMsg ? 'visible' : 'hidden' }">{{ errMsg }}</InlineMessage>
          </div>
        </template>
      </Card>
      <Button 
        id="submitbtn"
        class="submitbtn"
        :style="{ visibility: curQues === questions.length - 1 ? 'visible' : 'hidden' }"
        type="submit" 
        label="提交" 
        @click="handleSubmitBtnClick"
      />
      <Dialog header="Oops!" v-model:visible="showUnfinishedDialog" modal>
        您好像還沒填答完所有的題目喔。
        <template #footer>
          <Button label="OK" @click="showUnfinishedDialog = false" />
        </template>
      </Dialog>
      <Dialog header="您確定要提交答案了嗎?" v-model:visible="showSubmitDialog" modal>
        請您務必確認所有的答案正確後再提交。
        <template #footer>
          <Button label="否" icon="pi pi-times" @click="showSubmitDialog = false" />
          <Button label="是" icon="pi pi-check" @click="handleSubmit" />
        </template>
      </Dialog>
    </div>
  </div>
</template>

<script>
import { user, setUser } from '../main';
import { storeUser } from '../api';

export default {
  name: 'Questions',
  created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
  },
  destroyed() {
      window.removeEventListener('resize', this.handleResize);
  },
  data() {
    return {
      user,
      questions: [
        { question: '1. 是非題: 行車速度超過規定之最高限速60公里為嚴重超速，會加重處罰並吊扣牌照3個月。', answer: 'O', choices: ['O', 'X'], choice: '' }, 
        { question: '2. 行至二交岔路口，未劃設幹線道與支線道者，轉彎車輛應讓直行車輛先行。', answer: 'O', choices: ['O', 'X'], choice: '' }, 
        { question: '3. 讓路標誌是用來告知車輛駕駛人必須慢行或停車，觀察幹道行車狀況，讓幹道車優先通行後安全時，才可繼續行駛。', answer: 'O', choices: ['O', 'X'], choice: '' }, 
        { question: '4. 汽車行近多車道之圓環，應讓內側車道之車輛先行。', answer: 'O', choices: ['O', 'X'], choice: '' }, 
        { question: '5. 不分幹線道支線道時，左方車應讓右方車先行。', answer: 'O', choices: ['O', 'X'], choice: '' }, 
        { question: '6. 在公共場所出路口及車站前:', answer: '2', choices: ['1: 可以停車。', '2: 不可停車。', '3: 無規定。'], choice: '' }, 
        { question: '7. 機踏車附載坐人後:', answer: '2', choices: ['1: 可以側坐。', '2: 為求安全不得側坐。', '3: 無規定。'], choice: '' }, 
        { question: '8. 機車駕駛人行駛於道路時，使用手持式行動電話撥接或通話者，處新台幣:', answer: '1', choices: ['1: 一千元罰鍰。', '2: 一千八百元罰鍰。', '3: 兩千元罰鍰。'], choice: '' }, 
        { question: '9. 在工業社會裡時間就是金錢，作為一個機車駕駛人應重視:', answer: '1', choices: ['1: 安全重於時間觀念。', '2: 交通設施。', '3: 機車儀容。'], choice: '' }, 
        { question: '10. 騎乘機車未依規定配戴安全帽（含應繫緊扣環），罰駕駛人多少錢?', answer: '2', choices: ['1: 1000元。', '2: 500元。', '3: 300元。'], choice: '' }, 
        { question: '11. 酒醉駕車肇事致人傷亡者，依照道路交通管理處罰條例應處:', answer: '2', choices: ['1: 吊扣駕駛執照。', '2: 罰鍰並吊銷駕照。', '3: 罰鍰。'], choice: '' }, 
        { question: '12. 駕駛人在道路上以蛇行或僅以後輪著地等危險方式駕車因而肇事者，應處:', answer: '1', choices: ['1: 罰鍰並吊銷駕照。', '2: 吊扣駕照。', '3: 罰鍰。'], choice: '' }, 
        { question: '13. 速度較慢之小型客車，應行駛:', answer: '2', choices: ['1: 內側車道。', '2: 外側車道。', '3: 慢車道。'], choice: '' }, 
        { question: '14. 機踏車附載物品，高度不得超過駕駛人:', answer: '2', choices: ['1: 頭部。', '2: 肩部。', '3: 腰部。'], choice: '' }, 
        { question: '15. 夜間駕駛汽車行駛市區及會車跟前車距離在一百公尺以內時為求安全:', answer: '3', choices: ['1: 戴有色眼鏡。', '2: 使用遠光登。', '3: 使用近光燈。'], choice: '' }, 
        { question: '16. 未領有駕照駕車者應罰鍰:', answer: '3', choices: ['1: 三千元至六千元。', '2: 二千元至四千元。', '3: 六千元至一萬二千元。'], choice: '' }, 
        { question: '17. 臨時停車停止時間:', answer: '1', choices: ['1: 不超過三分鐘。', '2: 不超過五分鐘。', '3: 不超過十分鐘。'], choice: '' }, 
        { question: '18. 在未劃分快慢車道之道路駕駛，應靠:', answer: '2', choices: ['1: 左邊行駛。', '2: 右邊行駛。', '3: 中間行駛。'], choice: '' }, 
        { question: '19. 行經鐵路平交道時應:', answer: '3', choices: ['1: 加速通過。', '2: 按鳴喇叭加速通過。', '3: 停車看清左右確無來車駛行通過。'], choice: '' }, 
        { question: '20. 在狹窄的坡道路會車時，應該:', answer: '1', choices: ['1: 下坡車讓上坡車先行。', '2: 上坡車讓下坡車先行。', '3: 不須相讓。'], choice: '' }, 
      ],
      curQues: 0,
      showUnfinishedDialog: false,
      showSubmitDialog: false,
      window: {
          width: 0,
          height: 0
      },
      errMsg: '',
    };
  },
  methods: {
    onPageChange(event) {
      this.errMsg = '';
      this.curQues = event.page;
    },
    check() {
      this.errMsg = (this.questions[this.curQues].choice !== this.questions[this.curQues].answer) ? '答案錯誤!' : '';
    },
    handleSubmitBtnClick() {
      for (let i = 0; i < this.questions.length; i++) {
        if (!this.questions[i].choice) {
          this.showUnfinishedDialog = true;
          return;
        }
      }
      this.showSubmitDialog = true;
    },
    async handleSubmit() {
      let grade = 0;
      this.questions.forEach(question => {
        if (question.choice === question.answer) grade += 5;
      });

      try {
        setUser({
          name: this.user.name,
          stuid: this.user.stuid,
          depGrade: this.user.depGrade,
          grade,
        });
        await storeUser({ user: this.user });

        this.$router.push('/result');
      } catch (error) {
        console.log(error);
      }

      this.showSubmitDialog = false;
    },
    handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0px;
  margin-top: -5px;
}
.navbar {
  position: sticky;
  height: 100px;
  color: white;
  background-color: #38618f;
  border-radius: 0px;
  border-width: 0px;
}
.root {
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 50px;
  background-color: #c7c5b8;
  overflow: auto;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  max-width: 600px;
  min-width: 500px;
  height: 480px;
  color: white;
  background-color: #fd9735;
  border-radius: 20px;
  box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, .3);
  margin-bottom: 30px;
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
@media (max-width: 500px) {
  .card {
    min-width: 300px;
  }
  .title {
    font-size: 20px;
  }
}
.card h4 {
  text-align: center;
  color: white;
  margin: 0px;
}
.titleicon {
  font-size: inherit;
}
.radbtns {
  width: 90%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  margin-left: 5%;
  border-width: 20px;
  color: white;
  font-size:1.2rem;
}
.option {
  margin-inline: 10px;
}
.footer {
  display: flex;
  justify-content: center;
}
.paginator {
  display: flex;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.3);
  border-width: 0px;
  border-radius: 30px;
  padding: 0px;
}
.submitbtn {
  width: 200px;
  height: 50px;
  margin-bottom: 20px;
}
</style>
