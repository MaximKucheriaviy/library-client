import { styled } from "styled-components";
import { StyledMain } from "../StyledMain";

export const ArhitectorPageStyleds = styled(StyledMain)`
  margin-top: 0;
`;
export const NavigationBar = styled.div`
  border-right: 2px solid black;
  display: inline-block;
  padding-right: 30px;
  padding-top: 50px;
  height: 100%;
  & button {
    display: block;
  }
`;
