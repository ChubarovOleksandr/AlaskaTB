import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://45.81.227.0:8000/api/v1/reset_password',
   withCredentials: false
})

export const sendEmail = async (email) => {
   try {
      const response = instance.post('/email', {
         email
      })
      return response;
   } catch (error) {
      console.log(error);
      return error; // 1
   }
}

export const sendEmailCode = async (data) => {
   try {
      const response = instance.post('/verify', {
         ...data
      })
      return response;
   } catch (error) {
      console.log(error);
      return error;
   }
}

export const sendNewPassword = async (data) => {
   try {
      const response = instance.post('/password', {
         ...data
      })
      return response;
   } catch (error) {
      console.log(error);
      return error;
   }
}