import { OutletDiv } from "../ArhitectorPageStyled";
import { useDropzone } from "react-dropzone";
import React from "react";

export const AddBookPage: React.FC = () => {
  const onDrop = (acceptedFiles: any) => {
    console.log("OK");
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <OutletDiv>
      <div style={{ border: "2px solid black" }} {...getRootProps}>
        <input {...getInputProps} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </OutletDiv>
  );
};
