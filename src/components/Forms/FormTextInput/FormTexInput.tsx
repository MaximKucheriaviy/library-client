import React from "react";
import { StyledInput, PropsStyled } from "./FormTexInputStyled";
import { useState } from "react";
import { v4 } from "uuid";

interface Porps extends PropsStyled {
  type?: React.HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  autocomplite?: boolean;
}

export const FormTextInput: React.FC<Porps> = ({
  margintop = 40,
  marginbotton = 0,
  type = "text",
  name,
  placeholder = "",
  autocomplite = false,
}) => {
  const [ID] = useState<string>(v4());
  return (
    <StyledInput margintop={margintop} marginbotton={marginbotton}>
      <label htmlFor={ID}>{name}</label>
      <input
        type={type}
        name={name}
        id={ID}
        placeholder={placeholder}
        autoComplete={autocomplite ? "true" : "false"}
      />
    </StyledInput>
  );
};
