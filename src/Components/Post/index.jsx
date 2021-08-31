import { useState } from "react";
import { Favorited } from "../Favorited";
import { VscChromeClose } from "react-icons/vsc";
import Modal from "react-modal";
import * as S from "./style";

/* ============== HEROES CARDS =================== */

Modal.setAppElement("#root");
export const PostCard = ({ hero }) => {
  const [isOpnen, setisOpnen] = useState(false);
  return (
    <S.Post>
      <S.ImageHero
        id="image-hero"
        url={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
      />
      <S.Content>
        <S.HeroName>{hero.name}</S.HeroName>
        <Favorited hero={hero} />
      </S.Content>

      <S.OpenModalBtn onClick={() => setisOpnen(true)}>
        More informations
      </S.OpenModalBtn>

      <Modal
        isOpen={isOpnen}
        onRequestClose={() => setisOpnen(false)}
        shouldCloseOnOverlayClick={false}
        /* Modal inline-css-style  */

        style={{
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "opacity 10ms ease-in-out",
            backgroundColor:
              "rgba(8, 17, 35, 0.94);rgba(8, 17, 35, 0.94);rgba(8, 17, 35, 0.94)",
          },
          content: {
            width: "70%",
            height: "70%",
            margin: "0 auto",
            padding: "0",
          },
        }}
      >
        <S.ModalContent>
          <S.ModalImage>
            <img
              className="modal-image-hero"
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt=""
            />
          </S.ModalImage>

          <S.ModalInfor>
            <S.Info>
              Comics available : <span>{hero.comics.available}</span>
            </S.Info>
            <S.Info>
              Series : <span>{hero.series.available}</span>
            </S.Info>

            {hero.series.items.map((item) => (
              <ul key={item.id}>
                <li className="serie-list">{item.name}</li>
              </ul>
            ))}

            <S.Info>
              Stories available : <span>{hero.stories.available}</span>
            </S.Info>
            <p className="stories-link">
              The Link for more stories :{hero.stories.collectionURI}
            </p>

            <S.Title>Description:</S.Title>
            <S.Description>{hero.description}</S.Description>
          </S.ModalInfor>

          <S.CloseModalBtn onClick={() => setisOpnen(false)}>
            <VscChromeClose cursor={"pointer"} color={"#ec1d24"} size={25} />
          </S.CloseModalBtn>
        </S.ModalContent>
      </Modal>
    </S.Post>
  );
};

/* ============== COMICS POST =================== */

export const PostCardComic = ({ comic }) => {
  const [isOpnen, setisOpnen] = useState(false);
  return (
    <S.Post>
      <S.ImageHero
        id="image-hero"
        url={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
      />
      <S.Content>
        <S.HeroName>{comic.title}</S.HeroName>
      </S.Content>

      <S.OpenModalBtn onClick={() => setisOpnen(true)}>
        More informations
      </S.OpenModalBtn>

      <Modal
        isOpen={isOpnen}
        onRequestClose={() => setisOpnen(false)}
        shouldCloseOnOverlayClick={false}
        /* Modal inline-css-style  */

        style={{
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "opacity 10ms ease-in-out",
            backgroundColor:
              "rgba(8, 17, 35, 0.94);rgba(8, 17, 35, 0.94);rgba(8, 17, 35, 0.94)",
          },
          content: {
            width: "70%",
            height: "70%",
            margin: "0 auto",
            padding: "0",
          },
        }}
      >
        <S.ModalContent>
          <S.ModalImage>
            <img
              className="modal-image-hero"
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt=""
            />
          </S.ModalImage>

          <S.ModalInfor>
            <S.Info>
              Series name: <span>{comic.series.name}</span>
            </S.Info>
            <S.Info>
              Price : <span>{comic.prices.price} USD</span>
            </S.Info>
            <S.Info>
              Characters : <span>{comic.characters.available}</span>
            </S.Info>
            <S.Info>
              Stories available : <span>{comic.stories.available}</span>
            </S.Info>
            <S.Title>Description:</S.Title>
            <S.Description>{comic.description}</S.Description>
          </S.ModalInfor>

          <S.CloseModalBtn onClick={() => setisOpnen(false)}>
            <VscChromeClose cursor={"pointer"} color={"#ec1d24"} size={25} />
          </S.CloseModalBtn>
        </S.ModalContent>
      </Modal>
    </S.Post>
  );
};
