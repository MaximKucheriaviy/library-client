import React, { useCallback, useRef } from "react";
import { Header } from "../header/Header";
import { Loader } from "../Loader/Loader";
import { useIsLoading, useLogedIn } from "../../redux/selectors";
import { useEffect } from "react";
import { useStoreDispatch } from "../../redux/store";
import { updateTokensOperation } from "../../redux/operations/userOperations";

interface Props {
  children?: React.ReactNode;
  refreshTime?: number;
}

export const SharedLayout: React.FC<Props> = ({
  children,
  refreshTime = 8,
}) => {
  const isLoading = useIsLoading();
  const logedIn = useLogedIn();
  const intervalID = useRef<NodeJS.Timer>();
  const dispatch = useStoreDispatch();

  const refreshCallback = useCallback(() => {
    if (!logedIn) {
      return;
    }
    dispatch(updateTokensOperation());
    console.log("refresh");
  }, [logedIn, dispatch]);

  useEffect(() => {
    const id = setInterval(refreshCallback, refreshTime * 1000 * 60);
    intervalID.current = id;
    return () => {
      clearInterval(intervalID.current);
    };
  }, [refreshCallback, refreshTime]);
  return (
    <>
      {isLoading && <Loader />}
      <Header />
      {children}
    </>
  );
};
