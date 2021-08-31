import { Link } from "react-router-dom";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import * as S from "./style";

export const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <S.NavContainer>
      <S.NavContent>
        <S.Title>Super Heroes</S.Title>
        <S.Nav>
          <ul
            className={isMobile ? "nav-link-mobile" : "nav-link"}
            onClick={() => setIsMobile(false)}
          >
            <Link to="/" className="link-name">
              Home
            </Link>
            <Link to="/comics" className="link-name">
              Comics
            </Link>
            <Link to="/favorite" className="link-name">
              Favorites
            </Link>
          </ul>
          <button
            className="menu-icon-mobile"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <VscChromeClose cursor={"pointer"} color={"#ec1d24"} size={25} />
            ) : (
              <VscMenu cursor={"pointer"} color={"#ffff"} size={25} />
            )}
          </button>
        </S.Nav>
      </S.NavContent>
    </S.NavContainer>
  );
};
