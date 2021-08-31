import { FaStar } from "react-icons/fa";
import { unsetFavorite, setFavorite } from "../../assets/localStorage";
import * as S from "./style";

/* ========= FAVORITE CHARACTERS ===============*/

export const Favorited = ({ hero }) => {
  return (
    <S.FavoritedContent>
      {localStorage.getItem("myHeroes").includes(JSON.stringify(hero)) ? (
        <S.FavoriteButton onClick={() => unsetFavorite(hero)}>
          <FaStar className="unset-favorite-icon" title={"Set Favorite"} />
        </S.FavoriteButton>
      ) : (
        <S.FavoriteButton type="button" onClick={() => setFavorite(hero)}>
          <FaStar className="set-favorite-icon" title={"Set Favorite"} />
        </S.FavoriteButton>
      )}
    </S.FavoritedContent>
  );
};
