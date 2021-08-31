/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { ComicCards } from "../../Components/Card";
import { Header } from "../../Components/Header";
import { NavBar } from "../../Components/NavBar";
import { Pagination } from "../../Components/Pagination";
import { ComicsTitle } from "./style";
import Db from "../../backend/db.json";

export const Comics = () => {
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

  /*=========== Components Area ===========*/
  
  return (
    <div>
      <Header />
      <NavBar />
      <ComicsTitle>My Comics</ComicsTitle>
      <ComicCards comics={mycomics} />
      <Pagination countPage={countPage} changePage={changePage} />
    </div>
  );
};
