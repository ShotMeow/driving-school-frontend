import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "@/store/auth/auth.slice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["auth"]
};

const rootReducer = combineReducers({
  auth: authSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);
export type TypeRootState = ReturnType<typeof store.getState>;
