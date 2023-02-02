import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "@/services/auth.service";
import { LoginType, RegisterType, ResponseType } from "@/store/auth/auth.types";

export const register = createAsyncThunk<ResponseType, RegisterType>(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      return await AuthService.register(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk<ResponseType, LoginType>(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      return await AuthService.login(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", () => {
  return {};
});
