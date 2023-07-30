import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useIsLoading = (): boolean => {
  const userLoading = useSelector<typeof RootState, boolean>(
    (state) => state.user.loading
  );
  const customLoading = useSelector<typeof RootState, boolean>(
    (state) => state.loading.value
  );
  return userLoading || customLoading;
};
