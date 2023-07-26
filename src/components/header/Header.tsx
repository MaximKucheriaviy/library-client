import React from "react";
import { StyledHeader } from "./HeaderStyled";
import { Button } from "../Button/Button";
import { useStoreDispatch } from "../../redux/store";
import { logoutOperation } from "../../redux/operations/userOperations";
import { useLogedIn } from "../../redux/selectors";

export const Header: React.FC = () => {
  const dispatch = useStoreDispatch();
  const logedIn = useLogedIn();

  const buttonCallback = () => {
    dispatch(logoutOperation());
  };
  return (
    <StyledHeader>
      <h1>LIBRARY</h1>
      {logedIn && (
        <Button text="Вийти" width="130px" callback={buttonCallback} />
      )}
    </StyledHeader>
  );
};
