import React from "react";
import { Header } from "../header/Header";
import { Loader } from "../Loader/Loader";
import { useIsLoading } from "../../redux/selectors/loadingSelector";

interface Props {
  children?: React.ReactNode;
}

export const SharedLayout: React.FC<Props> = ({ children }) => {
  const isLoading = useIsLoading();
  return (
    <>
      {isLoading && <Loader />}
      <Header />
      {children}
    </>
  );
};
