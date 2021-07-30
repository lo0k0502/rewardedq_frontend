import axios from 'axios';

const API = axios.create({ baseURL: 'https://admdmt.ccu.edu.tw/rewardedq_backend/index.php' });

export const storeUser = (payload) => API.post('/user/store', payload, { headers:{ 'Content-Type': 'application/json' } });