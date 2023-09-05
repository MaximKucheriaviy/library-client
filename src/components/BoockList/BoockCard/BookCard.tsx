import React from "react";
import { StyledBookCard } from "./BookCardStyled";
import { IBook } from "../../../sevice/api";

interface Props {
  book: IBook;
}

export const BookCard: React.FC<Props> = ({ book }) => {
  const name =
    book.name.split(" ").length > 4
      ? book.name.split(" ").splice(0, 4).join(" ") + "..."
      : book.name;

  return (
    <StyledBookCard>
      <div className="imageThumb">
        <img src={book.picture.url} alt={name} />
      </div>
      <div className="textThumb">
        <h3>{name}</h3>
        <p className="author">{book.author}</p>
      </div>
    </StyledBookCard>
  );
};
