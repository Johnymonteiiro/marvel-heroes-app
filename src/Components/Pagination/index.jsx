import NavPage from "react-paginate";
import * as S from "./style";
import { Footer } from "../Footer";

export const Pagination = ({ changePage, countPage}) => {
  return (
    <>
      <S.Page>
        <NavPage
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={countPage}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          activeClassName={"paginationActive"}
          marginPagesDisplayed={1}
        />
      </S.Page>
      <Footer />
    </>
  );
};
