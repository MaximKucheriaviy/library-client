import { OutletDiv } from "../ArhitectorPageStyled";
import { Dropzone } from "../../../components/Forms/Dropzone/Dropzone";
import React from "react";
export const AddBookPage: React.FC = () => {
  return (
    <OutletDiv>
      <Dropzone width="200px" height="200px" />
    </OutletDiv>
  );
};
