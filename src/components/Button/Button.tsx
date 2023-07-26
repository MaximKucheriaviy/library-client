import React from "react";
import { StyledButton, StyledProps } from "./ButtonStyled";

interface Props extends StyledProps {
  text: string;
  type?: "button" | "submit";
}

export const Button: React.FC<Props> = ({
  text,
  type = "button",
  margin_bottom = 0,
  margin_top = 0,
  width = "",
}) => {
  return (
    <StyledButton
      margin_top={margin_top}
      margin_bottom={margin_bottom}
      type={type}
      width={width}
    >
      {text}
    </StyledButton>
  );
};
