import { styled } from "styled-components";

export const StyledBookInfo = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-column-gap: 20px;
  & .box {
    /* outline: 2px solid green; */
  }
  & .titleBox {
    font-size: 40px;
    font-weight: 700;
    padding-top: 30px;
  }
  & .imageThumb {
    grid-row: 1/3;
    padding: 30px;
    /* background-color: #dfdfdf; */
    border-radius: 50px;
    box-shadow: inset 0px 0px 60px #b1b1b1;
  }

  & .author {
    font-size: 20px;
  }
  & .description {
    grid-column: 1 / 3;
  }
`;
