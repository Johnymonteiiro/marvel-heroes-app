import styled from "styled-components";

export const Post = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  padding: 0;
  background-color: #ffff;
  border-radius: 8px;
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    overflow: auto;
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: red;
      border-radius: 6px;
    }
  }

  &:hover {
    #image-hero {
      height: 150px;
    }
  }
`;

export const ImageHero = styled.div`
  background: url(${(props) => props.url}) no-repeat center;
  width: 100%;
  height: 320px;
  border-radius: 0 0 15px 15px;
  background-size: cover;
  transition: all 1s;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
`;

export const HeroName = styled.h1`
  color: #ec1d24;
  font-size: 35px;
  font-weight: 700;
`;

export const Title = styled(HeroName)`
  color: #ec1d24;
  font-size: 25px;
`;

export const Description = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
`;

/*====== Modal Content styles =========== */

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    padding: 2px 0;
  }

  .serie-list {
    font-size: 20px;
    color: #000;
    font-weight: bold;
  }

  .stories-link {
    color: #000;
    font-size: 18px;
    font-weight: bold;
    transition: all 1s;

    &:hover {
      color: #ec1d24;
    }
  }
`;

export const ModalImage = styled.div`
  width: 30%;
  height: 100%;

  .modal-image-hero {
    position: fixed;
    width: 320px;
    height: 491px;
  }
`;

export const ModalInfor = styled.div`
  width: 60%;
  height: 100%;
  padding: 30px 10px;
`;

export const Info = styled.p`
  color: #ec1d24;
  font-size: 25px;
  font-weight: bold;

  span {
    font-size: 25px;
    color: #000;
    font-weight: bold;
  }
`;

export const OpenModalBtn = styled.button`
  position: relative;
  top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 10px 20px;
  cursor: pointer;
  border: 3px solid #ec1d24;
  border-radius: 10px;
  color: #ec1d24;
  font-size: 20px;
  font-weight: bold;
  transition: all 1s;
  background: none;

  &:hover {
    color: #ffff;
    background-color: #ec1d24;
  }
`;

export const CloseModalBtn = styled.button`
  position: relative;
  top: -40%;
  right: 15px;
  width: 6%;
  border: none;
  cursor: pointer;
  text-align: center;
  background: none;
`;
