import { StyledProps } from "../StyledForm";
import { useState } from "react";
import { FormTextInput } from "../FormTextInput/FormTexInput";
import { CrateBookFormStyeld } from "./CreateBookFormStyled";
import { Dropzone } from "../Dropzone/Dropzone";

interface Props extends StyledProps {}

export const CreateBookForm: React.FC<Props> = ({
  width = "500px",
  border = true,
}) => {
  const [name, setName] = useState<string>("");
  const [autor, setAutor] = useState<string>("");
  const [reliseDate, setReliseDate] = useState<number>(2023);
  const [janre, setJanre] = useState<string>("");
  const [countOfExamples, setCountOfExamples] = useState<number>(1);
  const [description, setDescription] = useState<string>("");
  const [keyWords, setKeyWords] = useState<string>("");
  const marginTop = 35;
  return (
    <CrateBookFormStyeld width={width} border={border ? 1 : 0}>
      <h2>Створити книгу</h2>
      <div className="mainBlock">
        <div className="leftBlock">
          <FormTextInput
            name="Назва"
            value={name}
            chageCallback={setName}
            margintop={0}
          />
          <FormTextInput
            name="Автор"
            value={autor}
            chageCallback={setAutor}
            margintop={marginTop}
          />
          <div className="flexdiv">
            <FormTextInput
              name="Дата виходу"
              type="number"
              value={reliseDate}
              chageCallback={setReliseDate}
              margintop={marginTop}
            />
            <FormTextInput
              name="Кількість примірників"
              type="number"
              value={countOfExamples}
              chageCallback={setCountOfExamples}
              margintop={marginTop}
            />
          </div>
          <FormTextInput
            name="Жанр"
            value={janre}
            chageCallback={setJanre}
            margintop={marginTop}
          />
          <FormTextInput
            name="Ключові слова"
            value={keyWords}
            chageCallback={setKeyWords}
            margintop={marginTop}
          />
        </div>
        <div className="rightBlock">
          <div className="dropzone">
            <Dropzone width="250px" height="250px" />
          </div>
          <FormTextInput
            name="Опис"
            value={description}
            chageCallback={setDescription}
            margintop={20}
            type="textAria"
            height="200px"
          />
        </div>
      </div>
    </CrateBookFormStyeld>
  );
};
