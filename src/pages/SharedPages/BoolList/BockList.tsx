import React from "react";
import { OutletDiv } from "../../ArhitectorPage.tsx/ArhitectorPageStyled";
import { BookList } from "../../../components/BoockList/BookList";

export const BookLibrary: React.FC = () => {
  return (
    <OutletDiv>
      <BookList keyword="" />
    </OutletDiv>
  );
};
