require('./bootstrap');
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { useState } from './hooks/useState';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import './styles';

export const [user, setUser] = useState({
    id: '',
    depGrade: '',
    name: '',
});

createApp(App)
    .use(router)
    .use(PrimeVue, { ripple: true })
    .component('Button', Button)
    .component('InputText', InputText)
    .mount('#app');