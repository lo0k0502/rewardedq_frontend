require('./bootstrap');
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';
import 'balm-ui/dist/balm-ui.css';
import { useState } from './hooks/useState';

export const [user, setUser] = useState({
    id: '',
    depGrade: '',
    name: '',
});

createApp(App)
    .use(router)
    .use(BalmUI)
    .use(BalmUIPlus)
    .mount('#app');