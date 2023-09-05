import styled from "styled-components";

export const StyledBookCard = styled.li`
  border: 4px solid red;
  border-radius: 30px;
  overflow: hidden;
  transition-duration: 300ms;
  transition-property: box-shadow;
  &:hover {
    box-shadow: 0px 0px 10px black;
  }
  & .imageThumb {
    height: 200px;
    display: flex;
    justify-content: center;
    & img {
      max-height: 100%;
    }
  }
  & .textThumb {
    padding: 20px;
    & h3 {
      font-size: 14px;
      min-height: 35px;
    }
    & .author {
      color: gray;
      font-size: 13px;
    }
  }
`;
