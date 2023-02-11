import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseType } from "@/store/api/auth/auth.types";

const initialState: ResponseType = {
  token: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
    },
    setToken: (state, action: PayloadAction<ResponseType>) => {
      state.token = action.payload.token;
    }
  }
});

export const { logout, setToken } = authSlice.actions;
