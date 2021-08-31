import { useState } from "react";
import * as S from "./style";
export const Input = ({ searchValue }) => {
  const [buscar, setBuscar] = useState("");

  const busca = (q) => {
    setBuscar(q);
    searchValue(q);
  };

  function hadleBusca(e) {
    busca(e.target.value);
  }

  return (
    <S.Form>
      <input
        type="search"
        className="input-area"
        placeholder="Search your hero..."
        autoFocus
        onChange={hadleBusca}
        value={buscar}
      />
    </S.Form>
  );
};
