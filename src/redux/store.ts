import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartReducer);
export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: persistedReducer,
    },
  });
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
