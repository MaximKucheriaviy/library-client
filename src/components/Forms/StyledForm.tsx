import { styled } from "styled-components";
export interface StyledProps {
  width?: string;
  border?: number | boolean;
}
export const StyledForm = styled.form<StyledProps>`
  width: ${(props) => props.width || "500px"};
  margin-left: auto;
  margin-right: auto;
  border: ${(props) =>
    props.border ? `3px solid ${props.theme.primaryColor}` : "none"};
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  border-radius: 30px;

  box-shadow: ${(props) => (props.border ? ` 2px 2px 5px black ` : "none")};
  & h2 {
    font-size: 30px;
  }
`;
