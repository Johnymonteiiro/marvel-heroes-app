/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Cards } from "../../Components/Card";
import { Header } from "../../Components/Header";
import { NavBar } from "../../Components/NavBar";
import { Pagination } from "../../Components/Pagination";
import Api from "../../services/api";

export const Main = () => {
  const api = Api();
  const [dados, setDados] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(true);

  /* ========= PAGINATION CONFIG ======================= */

  const [pageNumber, setPageNumber] = useState(0);
  const postPerPage = 8;
  const pageVisited = pageNumber * postPerPage;
  const heroes = dados.slice(pageVisited, pageVisited + postPerPage);
  const countPage = Math.ceil(dados.length / postPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  /* ========= API, SEARCH-AREA AND lOCALSTORAGE CONFIG ======================= */

  useEffect(() => {
    const fetch = async () => {
      const limit = 100;
      if (!search) {
        api
          .get("characters?", {
            params: { limit },
          })
          .then((res) => {
            setDados(res.data.data.results);
            setLoading(false);
            console.log(res.data.data.results);
          })
          .catch((err) => {
            console.log(err);
            console.log("ESTÁ FUNCIONANDO-1:");
          });
      } else {
        api
          .get(`characters?nameStartsWith=${search}`)
          .then((res) => {
            setDados(res.data.data.results);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            console.log("ESTÁ FUNCIONANDO-2:");
          });
      }
    };
    fetch();
  }, [search]);

  /* ========= CALLING THE COMPONENTS ======================= */

  return (
    <>
      <Header searchValue={(q) => setSearch(q)} />
      <NavBar />
      <Cards heroes={heroes} />
      <Pagination
        isLoading={isLoading}
        countPage={countPage}
        changePage={changePage}
      />
    </>
  );
};
