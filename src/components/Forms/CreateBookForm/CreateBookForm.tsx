import { StyledProps } from "../StyledForm";
import { useState } from "react";
import { FormTextInput } from "../FormTextInput/FormTexInput";
import { CrateBookFormStyeld } from "./CreateBookFormStyled";
import { Dropzone } from "../Dropzone/Dropzone";
import { Button } from "../../Button/Button";
import { createBook } from "../../../sevice/api";
import { useStoreDispatch } from "../../../redux/store";
import { enable, disable } from "../../../redux/slices/customLoadingSlice";
import { useToken } from "../../../redux/selectors/userSelectors";

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
  const [picture, setFile] = useState<File | null>();

  const marginTop = 35;
  const dispatch = useStoreDispatch();
  const token = useToken();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit");
    dispatch(enable());
    const formData = new FormData();
    if (picture) {
      formData.append("picture", picture);
      formData.append("name", name);
      formData.append("autor", autor);
      formData.append("reliseDate", reliseDate.toString());
      formData.append("janre", JSON.stringify(janre.split(" ")));
      formData.append("countOfExamples", countOfExamples.toString());
      formData.append("description", description);
      formData.append("keyWords", JSON.stringify(keyWords.split(" ")));
    }
    createBook(token, formData)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(disable());
      });
  };
  return (
    <CrateBookFormStyeld
      width={width}
      border={border ? 1 : 0}
      onSubmit={onSubmit}
    >
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
            marginbotton={marginTop}
          />
          <Button text="Створити" type="submit" width="200px" />
        </div>

        <div className="rightBlock">
          <div className="dropzone">
            <Dropzone width="250px" height="250px" setFile={setFile} />
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
