/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaFrown } from "react-icons/fa";
import { Cards } from "../../Components/Card";
import { Header } from "../../Components/Header";
import { CreateLocalStore, GetLocalStore } from "../../assets/localStorage";
import { FavoriteTitle, NotFound, NotFoundTitle } from "./style";
import { NavBar } from "../../Components/NavBar";
import { Footer } from "../../Components/Footer";

export const Favorites = () => {
  const [favorites, setFavorite] = useState([]);
  const [search, setSearch] = useState("");
  const getLocalStorage = GetLocalStore();

  useEffect(() => {
    if (getLocalStorage === "[]" || !getLocalStorage) {
      CreateLocalStore();
    } else {
      const mylist = JSON.parse(getLocalStorage);
      setFavorite(mylist);
    }
  }, []);

  const filteredFavorite = !!search
    ? favorites.filter((favorite) => {
        return favorite.name.toLowerCase().includes(search.toLowerCase());
      })
    : favorites;

  return (
    <div>
      <Header searchValue={(q) => setSearch(q)} />
      <NavBar />
      <FavoriteTitle>My favorites heroes</FavoriteTitle>
      {filteredFavorite.length > 0 && <Cards heroes={filteredFavorite} />}

      {filteredFavorite.length === 0 && (
        <NotFound>
          <NotFoundTitle>Hero not found</NotFoundTitle>
          <FaFrown size={30} color={"#ec1d24"} />
        </NotFound>
      )}
      <Footer />
    </div>
  );
};
