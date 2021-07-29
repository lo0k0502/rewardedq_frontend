import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/api' });

export const storeUser = (payload) => API.post('/user/store', payload, { headers:{ 'Content-Type': 'application/json' } });