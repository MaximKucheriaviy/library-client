import React from "react";
import { OutletDiv } from "../../ArhitectorPage.tsx/ArhitectorPageStyled";
import { StyledBookInfo } from "./BookInfoStyled";
import { useParams } from "react-router-dom";
import { IBook, getBookById } from "../../../sevice/api";
import { useEffect, useState } from "react";
export const BoockInfoPage: React.FC = () => {
  const { id } = useParams();
  const [book, setBook] = useState<IBook>();
  useEffect(() => {
    (async () => {
      if (!id) {
        return;
      }
      const result = await getBookById(id);
      setBook(result.data);
    })();
  }, [id]);
  return (
    <OutletDiv>
      <StyledBookInfo>
        <div className="imageThumb box">
          <img src={book?.picture.url} alt={book?.name} />
        </div>
        <div className="infoThumb box">
          <p>
            <span>Name</span>
            {book?.name}
          </p>
        </div>
        <div className="description box"></div>
      </StyledBookInfo>
    </OutletDiv>
  );
};
