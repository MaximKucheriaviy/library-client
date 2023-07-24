import React from "react";
import { FormTextInput } from "../FormTextInput/FormTexInput";
import { StyledForm } from "../StyledForm";
import { Button } from "../../Button/Button";

export const SignUpForm: React.FC = () => {
  return (
    <StyledForm>
      <h2>Увійти до системи</h2>
      <FormTextInput
        margintop={30}
        name={"Email"}
        placeholder="ivanka@gmail.com"
        type="text"
      />
      <FormTextInput
        margintop={30}
        name={"Пароль"}
        placeholder=""
        type="password"
        autocomplite
      />
      <Button text="Увійти" type="submit" />
    </StyledForm>
  );
};
