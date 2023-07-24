import React from "react";
import { StyledButton } from "./ButtonStyled";

interface Props {
  text: string;
  type?: "button" | "submit";
}

export const Button: React.FC<Props> = ({ text, type = "button" }) => {
  return <StyledButton type={type}>{text}</StyledButton>;
};
