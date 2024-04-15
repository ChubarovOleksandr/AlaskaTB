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
   }
};

///////////// AUTH LOGIC ////////////

export const registData = createAsyncThunk(
   'authSlice/registData',
   async function (params, { rejectWithValue }) {
      try {
         const response = await setRegisterData(params);
         return response;
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const sendCode = createAsyncThunk(
   'authSlice/sendCode',
   async function (params, {rejectWithValue}) {
      try {
         const response = await sendVerifyCode(params);
         console.log('i return good response');
         return response;
      } catch (error) {
         console.log('i return error response');
         return rejectWithValue(error);
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
   }
})

export const { setUserData } = authSlice.actions;