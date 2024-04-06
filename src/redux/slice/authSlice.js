import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendLoginData, sendVerifyCode, setRegisterData } from "../../api/authAPI";
import { sendEmail, sendEmailCode, sendNewPassword } from "../../api/resetPasswordAPI"

const initialState = {
   userData: {
      email: 'sasha.chubarov.2018@gmail.com',
      username: '',
      password: '',
      phone_number: '',
      account_type: '',
   },
   error: '',
};

///////////// AUTH LOGIC ////////////

export const registData = createAsyncThunk(
   'authSlice/registData',
   async function (params, { rejectWithValue }) {
      try {
         console.log(params);
         const response = await setRegisterData(params);
         return response.data;
      } catch (error) {
         console.log(error);
         return rejectWithValue(error.response.data);
      }
   }
)

export const sendCode = createAsyncThunk(
   'authSlice/sendCode',
   async function (params) {
      try {
         const response = await sendVerifyCode(params);
         return response;
      } catch (error) {
         console.log(error);
      }
   }
)

export const logIn = createAsyncThunk(
   'authSlice/logIn',
   async function (params) {
      const response = await sendLoginData(params);
      console.log(response);
      return response;
   }
)

///////////// RESET PASSWORD ////////////

export const setEmail = createAsyncThunk(
   'authSlice/setEmail',
   async function (params) {
      const response = await sendEmail(params);
      console.log(response);
      return response;
   }
)
export const setVerifeCode = createAsyncThunk(
   'authSlice/setVerifeCode',
   async function (params) {
      const response = await sendEmailCode(params);
      console.log(response);
      return response;
   }
)
export const setNewPassword = createAsyncThunk(
   'authSlice/setNewPassword',
   async function (params) {
      const response = await sendNewPassword(params);
      console.log(response);
      return response;
   }
)

//////////////////////////////////////

export const authSlice = createSlice({
   name: 'authSlice',
   initialState,
   reducers: {
      setUserData(state, action) {
         state.userData = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(registData.fulfilled, (state, action) => {
            state.userData = action.payload;
         })
         .addCase(registData.rejected, (state, action) => {
            console.log(action.payload);
            state.userData.error = action.payload.detail;
         })
         .addCase(sendCode.fulfilled, (state, action) => {

         })
         .addCase(logIn.fulfilled, (state, action) => {
            
         })
         .addCase(setEmail.fulfilled, (state, action) => {
            console.log(action);
         })
   }
})

export const { setUserData } = authSlice.actions;