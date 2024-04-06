import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://45.81.227.0:8000/api/v1/auth',
})

export const setRegisterData = async (data) => {
   const response = await instance.post(`/register`, {
      ...data
   });
   return response.data;
}

export const sendLoginData = async (data) => {
   const response = await instance.post(`/login`, {
      ...data
   });
   return response.data;
}

export const sendVerifyCode = async (data) => {
   try {
      const response = await instance.post(`/verify`, {
         ...data
      });
      console.log(response.data);
      return response.data;
   } catch (error) {
      console.log(error);
      return error;
   }
}