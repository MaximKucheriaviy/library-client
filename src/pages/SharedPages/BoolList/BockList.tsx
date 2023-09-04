import { useEffect } from "react";
import React from "react";
import { OutletDiv } from "../../ArhitectorPage.tsx/ArhitectorPageStyled";
import { BoockList } from "../../../components/BoockList/BockList";

export const BoockLibrary: React.FC = () => {
  useEffect(() => {}, []);
  return (
    <OutletDiv>
      <BoockList keyword="" />
    </OutletDiv>
  );
};
