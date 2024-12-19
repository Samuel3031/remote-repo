// src/services/userService.js
import axios from 'axios';  // 引入 axios 進行 HTTP 請求

// 登入 API 請求
export const login = async (userId, password) => {
  const response = await axios.post('http://localhost:8088/user/login', {
    userId,
    password,
  });

  if (response.data.code === 200) {
    return response.data.data;  // 返回 token
  } else {
    throw new Error(response.data.message);  // 錯誤處理
  }
};

