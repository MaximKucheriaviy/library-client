import React from "react";
import { Header } from "../header/Header";

interface Props {
  children?: React.ReactNode;
}

export const SharedLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
