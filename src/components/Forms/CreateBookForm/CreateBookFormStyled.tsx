import { styled } from "styled-components";
import { StyledForm } from "../StyledForm";
export const CrateBookFormStyeld = styled(StyledForm)`
  & .mainBlock {
    display: flex;
    gap: 60px;
  }
  & .rightBlock,
  & .leftBlock {
    width: 50%;
    padding-top: 40px;
  }

  & .flexdiv {
    display: flex;
    gap: 40px;
  }
  & .dropzone {
    display: flex;
    justify-content: center;
    padding-top: 40px;
  }
`;
