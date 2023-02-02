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
import { api } from "@/store/api/api";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["auth"]
};

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
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
    }).concat(api.middleware)
});

export const persistor = persistStore(store);
export type TypeRootState = ReturnType<typeof store.getState>;
