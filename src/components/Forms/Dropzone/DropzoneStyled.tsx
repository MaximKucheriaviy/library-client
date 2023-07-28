import { styled } from "styled-components";

export interface StyledProps {
  width?: string;
  height?: string;
  active_props?: number;
}

export const StyledDropzone = styled.div<StyledProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 25px;
  padding-top: 25px;
  border-radius: 30px;
  overflow: hidden;
  position: relative;

  & P {
    font-size: 14px;
    opacity: 0.4;
  }
  & .dropPart {
    border-radius: 50%;
    background-color: ${(props) => (props.active_props ? "green" : "white")};
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    & svg {
      width: 50%;
      height: 50%;
      fill: ${(props) => (props.active_props ? "white" : "black")};
    }
  }
  & img {
    max-height: 100%;
    max-width: 100%;
    border-radius: 10px;
  }
  & button {
    position: absolute;
    top: 15px;
    right: 15px;
    border-radius: 50%;
    border: none;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.2;
    transition-duration: 250ms;
    transition-property: "opacity";
    &:hover {
      opacity: 0.7;
    }
  }
`;
