import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setRegisterData } from "../../api/authAPI";

const initialState = {
   userData: {
      email: 'asdadasas@sadas.das',
      username: '',
      password: '',
      phoneNumber: null,
      accountType: '',
   }
};

export const registData = createAsyncThunk(
   'authSlice/registData',
   async function (params) {
      const response = await setRegisterData(params);
      return response;
   }
)

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
         .addCase(registData.pending, () => {
         })
         .addCase(registData.fulfilled, (state, action) => {
            state.userData = action.payload;
         })
   }
})

export const { setUserData } = authSlice.actions;