import { useSelector } from "react-redux";
import { UserState } from "../slices/userSlice";
import { RootState } from "../store";

export const useLogedIn = (): typeof RootState.user.logegIn => {
  return useSelector<typeof RootState, typeof RootState.user.logegIn>(
    (state) => state.user.logegIn
  );
};

export const usePremision = (): typeof RootState.user.data.premision => {
  return useSelector<typeof RootState, typeof RootState.user.data.premision>(
    (state) => state.user.data.premision
  );
};
