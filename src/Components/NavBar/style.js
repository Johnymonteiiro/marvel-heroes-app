import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  height: 3rem;
  background-color: #202020;
  box-shadow: 0px 5px 8px -1px rgba(16, 15, 15, 0.98);
  -webkit-box-shadow: 0px 5px 8px -1px rgba(16, 15, 15, 0.98);
  -moz-box-shadow: 0px 5px 8px -1px rgba(16, 15, 15, 0.98);
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5px 20px;

  @media only screen and (max-width: 1273px) {
    padding: 5px 50px;
  }

  @media only screen and (max-width: 600px) {
    padding: 5px 30px;
  }
`;

export const Title = styled.h1`
  font-size: 2em;
  color: #fff;
  font-weight: bolder;

  @media only screen and (max-width: 600px) {
    font-size: 1.8em;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 30%;

  .menu-icon-mobile {
    display: none;
  }

  .link-name {
    margin-left: 30px;
    font-size: 25px;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    transition: all 1s;

    &:hover {
      color: #ec1d24;
    }
  }

  @media only screen and (max-width: 600px) {
    .nav-link {
      display: none;
    }
    .link-name {
      font-size: 1.4rem;
      color: #202020;
    }
    .nav-link-mobile {
      position: absolute;
      left: 0;
      top: 185px;
      padding: 5px 0;
      width: 100%;
      height: 6%;
      display: block;
      opacity: 0.9;
      list-style: none;
      background-color: #ffff;
      transition: all 0.5s ease;
      border-radius: 0 0 10px 10px;
    }

    .menu-icon-mobile {
      border: none;
      display: block;
      position: absolute;
      font-size: 20px;
      color: white;
      background: none;
      outline: none;
    }
  }
`;
