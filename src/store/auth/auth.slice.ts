import { createSlice } from "@reduxjs/toolkit";
import { ResponseType } from "@/store/auth/auth.types";
import { login, logout, register } from "@/store/auth/auth.actions";

const initialState: ResponseType = {
  token: ""
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        localStorage.setItem("token", payload.token);
      })
      .addCase(register.rejected, (state) => {
        state.token = "";
        localStorage.removeItem("token");
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        localStorage.setItem("token", payload.token);
      })
      .addCase(login.rejected, (state) => {
        state.token = "";
        localStorage.removeItem("token");
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = "";
        localStorage.removeItem("token");
      });
  }
});
