import { PostCard,PostCardComic} from "../Post";
import * as S from "./style";

/* ============== HEROES CARDS =================== */

export const Cards = ({ heroes }) => {
  return (
    <>
      <S.Content>
        {heroes.map((hero) => {
          return <PostCard key={hero.id} hero={hero} />;
        })}
      </S.Content>
    </>
  );
};

/* ============== COMICS CARDS =================== */

export const ComicCards = ({comics}) => {
     const lists = comics
  return (
    <>
      <S.Content>
           {lists.map((list) => {
          return (
            <PostCardComic key={list.id} comic={list} />
          )
        })}
      </S.Content>
    </>
  );
};