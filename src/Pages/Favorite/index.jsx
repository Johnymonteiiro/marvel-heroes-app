/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Cards } from "../../Components/Card";
import { Header } from "../../Components/Header";
import { CreateLocalStore, GetLocalStore } from "../../assets/localStorage";
import {FavoriteTitle} from './style';
import { NavBar } from "../../Components/NavBar";
import { Footer } from "../../Components/Footer";

export const Favorites = () => {
  const [favorite, setFavorite] = useState([]);
  const getLocalStorage = GetLocalStore();

  useEffect(() => {
    if (getLocalStorage === "[]" || !getLocalStorage) {
      CreateLocalStore();
    }else{
        const mylist = JSON.parse(getLocalStorage);
        setFavorite(mylist);
    }
  }, []);

  return (
    <div>
      <Header />
      <NavBar />
      <FavoriteTitle>My favorites heroes</FavoriteTitle>
      <Cards heroes={favorite} />
      <Footer/>
    </div>
  );
};
