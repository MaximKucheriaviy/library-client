import React from "react";
import { SignUpForm } from "../components/Forms/SignUpForm/SginUpForm";
import { StyledMain } from "./StyledMain";

export const SignUpPage: React.FC = () => {
  return (
    <StyledMain>
      <SignUpForm />
    </StyledMain>
  );
};
