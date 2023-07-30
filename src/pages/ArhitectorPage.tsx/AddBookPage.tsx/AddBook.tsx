import { OutletDiv } from "../ArhitectorPageStyled";
import { CreateBookForm } from "../../../components/Forms/CreateBookForm/CreateBookForm";
import React from "react";

export const AddBookPage: React.FC = () => {
  return (
    <OutletDiv>
      <CreateBookForm width="auto" />
    </OutletDiv>
  );
};
