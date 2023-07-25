import React from "react";
import { SignUpForm } from "../components/Forms/SignUpForm/SginUpForm";
import { StyledMain } from "./StyledMain";
import { useLogedIn, usePremision } from "../redux/selectors/userSelectors";
import { Navigate } from "react-router-dom";

export const SignUpPage: React.FC = () => {
  const logedIn = useLogedIn();
  const premision = usePremision();
  return (
    <StyledMain>
      {logedIn && <Navigate to={`/${premision}`} />}
      <SignUpForm />
    </StyledMain>
  );
};
