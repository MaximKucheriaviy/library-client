import { styled } from "styled-components";

export interface PropsStyled {
  margintop?: number;
  marginbotton?: number;
  width?: string;
  height?: string;
  inputFontSize?: string;
}

export const StyledInput = styled.div<PropsStyled>`
  margin-top: ${(props) => props.margintop}px;
  margin-bottom: ${(props) => props.marginbotton}px;
  width: ${(props) => props.width || "auto"};
  & label {
    display: inline-block;
    color: ${(props) => props.theme.fontColor};
    font-size: 24px;
    font-weight: 500;
  }
  & input,
  & textarea {
    height: ${(props) => props.height || "40px"};
    border-radius: 10px;
    border: 3px solid ${(props) => props.theme.secondaryColor};
    width: 100%;
    margin-top: 10px;
    padding-left: 10px;
    resize: none;
    font-size: ${(props) => props.inputFontSize || "16px"};

    transition-property: border, box-shadow;
    transition-duration: 250ms;
    &:focus {
      outline: none;
      border: 3px solid ${(props) => props.theme.primaryColor};
      box-shadow: 4px 4px 10px gray;
    }

    &::placeholder {
      color: gray;
    }
  }
`;
