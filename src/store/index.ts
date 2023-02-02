import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "@/store/auth/auth.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
});

export type TypeRootState = ReturnType<typeof store.getState>;
