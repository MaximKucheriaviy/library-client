import { styled } from "styled-components";

export const StyledBookInfo = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-column-gap: 20px;
  & .imageThumb {
  }
  & .description {
    grid-column: 1 / 3;
  }
`;
