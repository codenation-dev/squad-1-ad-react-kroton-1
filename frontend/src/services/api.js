import axios from 'axios';

const api = axios.create({
  baseURL: `http://felipealves.tech:3333`,
});

export default api;
