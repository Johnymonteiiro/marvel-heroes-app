/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Cards } from "../../Components/Card";
import { Header } from "../../Components/Header";
import { NavBar } from "../../Components/NavBar";
import { FaFrown } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { Pagination } from "../../Components/Pagination";
import * as S from "./style";
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

  /*=========== FILTER THE POST BY NAME ==============*/

  const filteredHeroes = !!search
    ? heroes.filter((hero) => {
        return hero.name.toLowerCase().includes(search.toLowerCase());
      })
    : heroes;

  /* ========= CALLING THE COMPONENTS ======================= */

  return (
    <>
      <Header searchValue={(q) => setSearch(q)} />
      <NavBar />
      {filteredHeroes.length > 0 && (
        <>
          <Cards heroes={filteredHeroes} />
          <Pagination
            isLoading={isLoading}
            countPage={countPage}
            changePage={changePage}
          />
        </>
      )}

      {isLoading ? (
        <S.Loading>
          <ClipLoader color={"red"} loading={isLoading} size={60} />
        </S.Loading>
      ) : (
        filteredHeroes.length === 0 && (
          <S.NotFound>
            <S.NotFoundTitle>Hero not found</S.NotFoundTitle>
            <FaFrown size={30} color={"#ec1d24"} />
          </S.NotFound>
        )
      )}
    </>
  );
};
