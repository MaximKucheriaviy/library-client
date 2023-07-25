import React from "react";
import { useLogedIn } from "../../redux/selectors/userSelectors";
import { Navigate } from "react-router-dom";
import { usePremision } from "../../redux/selectors/userSelectors";

interface Props {
  children: React.ReactNode;
  type: "admin" | "user" | "architector" | "";
}

export const ClosedRout: React.FC<Props> = ({ children, type }) => {
  const logedIn = useLogedIn();
  const premision = usePremision();
  return (
    <>
      {!logedIn && <Navigate to={"/"} />}
      {type !== premision && <Navigate to={"/"} />}
      {children}
    </>
  );
};
