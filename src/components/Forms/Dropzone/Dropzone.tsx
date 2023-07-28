import React, { ReactEventHandler } from "react";
import { StyledDropzone, StyledProps } from "./DropzoneStyled";

interface Pops extends StyledProps {}

export const Dropzone: React.FC<Pops> = ({ width, height }) => {
  const blocker = (event: React.DragEvent) => {
    event.preventDefault();
  };
  return (
    <StyledDropzone
      width={width}
      height={height}
      onDragEnter={blocker}
      onDragOver={blocker}
      onDragExit={blocker}
    ></StyledDropzone>
  );
};
