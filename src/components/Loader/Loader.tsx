import React from "react";
import { createPortal } from "react-dom";
import { Blocks } from "react-loader-spinner";
import { styled } from "styled-components";

const StyledLoader = styled.div`
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #80808057;
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader: React.FC = () => {
  const portalRoot = document.getElementById("PORTAL-ROOT") as HTMLElement;
  return createPortal(
    <StyledLoader>
      <Blocks color="red" />
    </StyledLoader>,
    portalRoot
  );
};
