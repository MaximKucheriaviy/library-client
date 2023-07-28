import React, { useState } from "react";
import { StyledDropzone, StyledProps } from "./DropzoneStyled";
import { AiFillFileImage, AiOutlineClose } from "react-icons/ai";

interface Pops extends StyledProps {}

export const Dropzone: React.FC<Pops> = ({ width, height }) => {
  const [active, setActive] = useState<boolean>(false);
  const [imgURL, setIngURL] = useState<string>("");

  const blocker = (event: React.DragEvent) => {
    event.preventDefault();
  };
  const onDragEntered = (event: React.DragEvent) => {
    event.preventDefault();
    setActive(true);
  };
  const onDragExit = (event: React.DragEvent) => {
    event.preventDefault();
    setActive(false);
  };
  const onDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const item = event.dataTransfer.files[0];
    setActive(false);
    if (!item.type.includes("image")) {
      return;
    }
    const path = URL.createObjectURL(item);
    console.log(path);

    setIngURL(path);
  };

  const reset = () => {
    setActive(false);
    setIngURL("");
  };
  return (
    <StyledDropzone
      width={width}
      height={height}
      active_props={active ? 1 : 0}
      onDragEnter={onDragEntered}
      onDragOver={blocker}
      onDragExit={onDragExit}
      onDrop={onDrop}
    >
      {imgURL && (
        <button type="button" onClick={reset}>
          <AiOutlineClose />
        </button>
      )}
      {imgURL && <img src={imgURL} />}
      {!imgURL && (
        <div className="dropPart">
          <AiFillFileImage className="icon" />
        </div>
      )}
      {!imgURL && <p>Перенесіть картику сюди</p>}
    </StyledDropzone>
  );
};
