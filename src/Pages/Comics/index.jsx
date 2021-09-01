/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { FaFrown } from "react-icons/fa";
import { ComicCards } from "../../Components/Card";
import { Header } from "../../Components/Header";
import { NavBar } from "../../Components/NavBar";
import { Pagination } from "../../Components/Pagination";
import * as S from "./style";
import Db from "../../backend/db.json";

export const Comics = () => {
  const [search, setSearch] = useState("");
  const comics = Db;

  /* ========= PAGINATION CONFIG ======================= */

  const [pageNumber, setPageNumber] = useState(0);
  const postPerPage = 8;
  const pageVisited = pageNumber * postPerPage;
  const mycomics = comics.slice(pageVisited, pageVisited + postPerPage);
  const countPage = Math.ceil(comics.length / postPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const filteredComics = !!search
    ? mycomics.filter((comic) => {
        return comic.title.toLowerCase().includes(search.toLowerCase());
      })
    : mycomics;

  /*=========== Components Area ===========*/

  return (
    <div>
      <Header searchValue={(q) => setSearch(q)} />
      <NavBar />
      <S.ComicsTitle>Comics</S.ComicsTitle>
      {filteredComics.length > 0 && (
        <>
          <ComicCards comics={filteredComics} />
          <Pagination countPage={countPage} changePage={changePage} />
        </>
      )}

      {filteredComics.length === 0 && (
        <S.NotFound>
          <S.NotFoundTitle>Hero not found</S.NotFoundTitle>
          <FaFrown size={30} color={"#ec1d24"} />
        </S.NotFound>
      )}
    </div>
  );
};
