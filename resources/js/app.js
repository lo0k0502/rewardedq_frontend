require('./bootstrap');
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { useState } from './hooks/useState';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Toolbar from 'primevue/toolbar';
import Divider from 'primevue/divider';
import Card from 'primevue/card';
import Message from 'primevue/message';
import RadioButton from 'primevue/radiobutton';
import InlineMessage from 'primevue/inlinemessage';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Paginator from 'primevue/paginator';
import Dialog from 'primevue/dialog';
import './styles';

export const [user, setUser] = useState({
    name: '',
    stuid: '',
    depGrade: '',
    grade: 0,
});

createApp(App)
    .use(router)
    .use(PrimeVue, { ripple: true })
    .use(ToastService)
    .component('Button', Button)
    .component('InputText', InputText)
    .component('Toolbar', Toolbar)
    .component('Card', Card)
    .component('Divider', Divider)
    .component('Message', Message)
    .component('RadioButton', RadioButton)
    .component('InlineMessage', InlineMessage)
    .component('Toast', Toast)
    .component('Paginator', Paginator)
    .component('Dialog', Dialog)
    .mount('#app');