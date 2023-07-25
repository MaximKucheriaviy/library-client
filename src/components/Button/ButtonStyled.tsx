import { styled } from "styled-components";

export interface StyledProps {
  margin_top?: number;
  margin_bottom?: number;
}

export const StyledButton = styled.button<StyledProps>`
  display: inline-block;
  border: 2px solid ${(props) => props.theme.primaryColor};
  margin-bottom: ${(props) => props.margin_bottom}px;
  margin-top: ${(props) => props.margin_top}px;
  background-color: ${(props) => props.theme.backGround};
  padding: 10px 30px 10px 30px;
  font-size: 18px;
  font-weight: 500px;
  border-radius: 15px;

  transition-property: box-shadow, background-color;
  transition-duration: 250ms;
  &:hover {
    box-shadow: 2px 2px 5px black;
    background-color: ${(props) => props.theme.buttonHoverBackground};
  }
`;
