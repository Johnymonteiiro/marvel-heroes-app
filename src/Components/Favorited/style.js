import styled from "styled-components";

export const FavoritedContent = styled.div``;

export const FavoriteButton = styled.button`
  background: none;
  border: none;
  .unset-favorite-icon {
    font-size: 25px;
    color: red;
    cursor: pointer;
    transition: all 1s;

    &:hover {
      transform: translateY(-10px);
    }
  }
  .set-favorite-icon {
    font-size: 25px;
    color: green;
    cursor: pointer;
    transition: all 1s;

    &:hover {
      transform: translateY(-10px);
    }
  }
`;
