import axiosInstance from './axiosInstance';

export const login = async (userId, password) => {
  const response = await axiosInstance.post('/user/login', { userId, password });
  return response.data;
};

export const userinfo = async (userId) => {
  const response = await axiosInstance.get(`/user/{userId}`, {userId});
  return response.data;
};

export const editinfo = async ( userId,userName,password,email) => {
  const response = await axiosInstance.put(`/user`, { userId,userName,password,email});
  return response.data;
};

export const deleteuser = async (userId) => {
  console.log(`/user/${userId}`, { userId });
  const response = await axiosInstance.delete(`/user/${userId}`);
  return response.data;
};

export const createuser = async ( userName,password,email) => {
  const response = await axiosInstance.post('/user/create', { userName,password,email});
  return response.data;
};