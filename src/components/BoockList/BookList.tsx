import React from "react";
import { StyledBockList } from "./StyledBockList";
import { BookCard } from "./BoockCard/BookCard";
import { IBook, getAllBooks } from "../../sevice/api";
import { useEffect, useState } from "react";

interface Props {
  keyword: string;
}

export const BookList: React.FC<Props> = ({ keyword }) => {
  const [books, setBooks] = useState<Array<IBook>>([]);
  useEffect(() => {
    const fun = async () => {
      const reuslt = await getAllBooks(keyword);
      setBooks(reuslt.data);
    };
    fun();
  }, [keyword]);
  return (
    <StyledBockList>
      {books.map((item) => (
        <BookCard key={item._id} book={item} />
      ))}
    </StyledBockList>
  );
};
