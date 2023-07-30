import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { useDispatch } from "react-redux";
import { customLoadingSlice } from "./slices/customLoadingSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    loading: customLoadingSlice.reducer,
  },
});

export const RootState = store.getState();

type StoreDispatch = typeof store.dispatch;
export const useStoreDispatch = useDispatch<StoreDispatch>;

// const store = configureStore);
