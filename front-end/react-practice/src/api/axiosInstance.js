import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8088', // 後端URL
  timeout: 10000,
  withCredentials: true,
});

export default axiosInstance;
