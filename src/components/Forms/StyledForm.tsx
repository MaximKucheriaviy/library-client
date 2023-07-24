import { styled } from "styled-components";

export const StyledForm = styled.form`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  border: 3px solid ${(props) => props.theme.primaryColor};
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  border-radius: 30px;

  box-shadow: 2px 2px 5px black;
  & h2 {
    font-size: 30px;
  }
`;
