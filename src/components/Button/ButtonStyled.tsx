import { styled } from "styled-components";

export interface StyledProps {
  margin_top?: number;
  margin_bottom?: number;
  width?: string;
}

export const StyledButton = styled.button<StyledProps>`
  display: inline-block;
  border: 2px solid ${(props) => props.theme.primaryColor};
  margin-bottom: ${(props) => props.margin_bottom}px;
  margin-top: ${(props) => props.margin_top}px;
  background-color: ${(props) => props.theme.backGround};
  padding-top: 10px;
  padding-bottom: 10px;

  font-size: 18px;
  font-weight: 500px;
  border-radius: 15px;
  width: ${(props) => props.width || "auto"};
  text-align: center;
  transition-property: box-shadow, background-color;
  transition-duration: 250ms;
  &:hover {
    box-shadow: 2px 2px 5px black;
    background-color: ${(props) => props.theme.buttonHoverBackground};
  }
`;
