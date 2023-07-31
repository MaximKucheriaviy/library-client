import { useSelector } from "react-redux";
import { RootState } from "../store";
import { stat } from "fs";

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

export const useToken = (): typeof RootState.user.data.token => {
  return useSelector<typeof RootState, typeof RootState.user.data.token>(
    (state) => state.user.data.token
  );
};
