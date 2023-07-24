import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { type } from "os";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

type StoreDispatch = typeof store.dispatch;
export const useStoreDispatch = useDispatch<StoreDispatch>;

// const store = configureStore);
