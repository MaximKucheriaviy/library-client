import React from "react";
import { ArhitectorPageStyleds, NavigationBar } from "./ArhitectorPageStyled";
import { Button } from "../../components/Button/Button";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const ArchitectorPage: React.FC = () => {
  const navigate = useNavigate();
  const tavigateTo = (path: string): Function => {
    return () => {
      navigate(path);
    };
  };
  return (
    <ArhitectorPageStyleds>
      <NavigationBar>
        <h2>Керування бібіотекою</h2>
        <Button
          text="Створити книгу"
          margin_top={50}
          width="240px"
          callback={tavigateTo("addbook")}
        />
        <Button text="Змінити книгу" margin_top={20} width="240px" />
        <Button text="Видалити книгу" margin_top={20} width="240px" />
        <Button text="Додати користувача" margin_top={20} width="240px" />
        <Button text="Змінити користувача" margin_top={20} width="240px" />
        <Button text="Видалити користувача" margin_top={20} width="240px" />
      </NavigationBar>
      <Outlet />
    </ArhitectorPageStyleds>
  );
};