import React, { useState } from "react";
import { FormTextInput } from "../FormTextInput/FormTexInput";
import { StyledForm } from "../StyledForm";
import { Button } from "../../Button/Button";
import { signupUseOperation } from "../../../redux/operations/userOperations";
import { useStoreDispatch } from "../../../redux/store";

export const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useStoreDispatch();
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(signupUseOperation({ email, password }));
  };
  return (
    <StyledForm onSubmit={onSubmit}>
      <h2>Увійти до системи</h2>
      <FormTextInput
        margintop={30}
        name={"Email"}
        placeholder="ivanka@gmail.com"
        type="mail"
        value={email}
        chageCallback={setEmail}
      />
      <FormTextInput
        margintop={30}
        name={"Пароль"}
        placeholder=""
        type="password"
        autocomplite
        value={password}
        chageCallback={setPassword}
      />
      <Button text="Увійти" type="submit" margin_top={20} />
    </StyledForm>
  );
};
