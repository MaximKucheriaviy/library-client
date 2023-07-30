import React from "react";
import { StyledInput, PropsStyled } from "./FormTexInputStyled";
import { useState } from "react";
import { v4 } from "uuid";

interface Porps extends PropsStyled {
  type?: React.HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  autocomplite?: boolean;
  chageCallback: React.Dispatch<React.SetStateAction<any>>;
  value: string | number;
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
  width,
  height,
  inputFontSize,
}) => {
  const [ID] = useState<string>(v4());
  const chage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (type === "number" && event.target instanceof HTMLInputElement) {
      if (Number.isNaN(event.target.valueAsNumber)) {
        chageCallback(0);
        return;
      }
      chageCallback(event.target.valueAsNumber);
      return;
    }
    chageCallback(event.target.value);
  };
  return (
    <StyledInput
      margintop={margintop}
      marginbotton={marginbotton}
      width={width}
      inputFontSize={inputFontSize}
      height={height}
    >
      <label htmlFor={ID}>{name}</label>
      {type !== "textAria" ? (
        <input
          type={type}
          name={name}
          id={ID}
          placeholder={placeholder}
          autoComplete={autocomplite ? "true" : "false"}
          onChange={chage}
          value={value}
        />
      ) : (
        <textarea
          name={name}
          id={ID}
          placeholder={placeholder}
          onChange={chage}
          value={value}
        ></textarea>
      )}
    </StyledInput>
  );
};
