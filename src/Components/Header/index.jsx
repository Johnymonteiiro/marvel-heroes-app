import * as S from "./style";
import Logo from "../../img/marvel-logo.png";
import { Input } from "../Input";
export const Header = ({searchValue}) => {
  return (
    <S.Container>
      <S.Content>
        <div>
          <img className="logo" src={Logo} alt="" />
        </div>
        <Input searchValue={searchValue} />
      </S.Content>
    </S.Container>
  );
};
