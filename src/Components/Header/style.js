import styled from "styled-components";
import img from "../../img/marvel.jpg";

export const Container = styled.header`
  width: 100%;
  height: auto;
  padding: 20px 0;
  background: url(${img}) no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;

  @media only screen and (max-width: 1273px) {
     padding: 0 50px;
  }

  @media only screen and (max-width: 600px) {
    display: inline-block;
    width: 100%;
    text-align: center;
  }

  .logo {
    width: 6rem;
    margin: 0 auto;
  }
`;
