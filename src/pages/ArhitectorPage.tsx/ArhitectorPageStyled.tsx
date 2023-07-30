import { styled } from "styled-components";
import { StyledMain } from "../StyledMain";

export const ArhitectorPageStyleds = styled(StyledMain)`
  margin-top: 0;
  display: flex;
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

export const OutletDiv = styled.div`
  padding-right: 30px;
  padding-top: 50px;
  padding-left: 30px;
  padding-bottom: 50px;
  flex-grow: 1;
`;
