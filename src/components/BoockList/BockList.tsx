import React from "react";
import { StyledBockList } from "./StyledBockList";
import { BockCard } from "./BoockCard/BockKard";

interface Props {
  keyword: string;
}

export const BoockList: React.FC<Props> = ({ keyword }) => {
  return <StyledBockList></StyledBockList>;
};
