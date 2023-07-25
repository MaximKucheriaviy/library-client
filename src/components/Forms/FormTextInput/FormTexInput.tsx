import React from "react";
import { StyledInput, PropsStyled } from "./FormTexInputStyled";
import { useState } from "react";
import { v4 } from "uuid";

interface Porps extends PropsStyled {
  type?: React.HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  autocomplite?: boolean;
  chageCallback: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export const FormTextInput: React.FC<Porps> = ({
  margintop = 40,
  marginbotton = 0,
  type = "text",
  name,
  placeholder = "",
  autocomplite = false,
  chageCallback,
  value,
}) => {
  const [ID] = useState<string>(v4());
  const chage = (event: React.ChangeEvent<HTMLInputElement>) => {
    chageCallback(event.target.value);
  };
  return (
    <StyledInput margintop={margintop} marginbotton={marginbotton}>
      <label htmlFor={ID}>{name}</label>
      <input
        type={type}
        name={name}
        id={ID}
        placeholder={placeholder}
        autoComplete={autocomplite ? "true" : "false"}
        onChange={chage}
        value={value}
      />
    </StyledInput>
  );
};
