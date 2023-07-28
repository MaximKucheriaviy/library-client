import { styled } from "styled-components";

export interface StyledProps {
  width?: string;
  height?: string;
}

export const StyledDropzone = styled.div<StyledProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  background-color: gray;
`;
