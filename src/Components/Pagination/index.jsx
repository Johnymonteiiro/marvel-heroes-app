import ClipLoader from "react-spinners/ClipLoader";
import NavPage from "react-paginate";
import * as S from "./style";
import { Footer } from "../Footer";

export const Pagination = ({ changePage, countPage, isLoading }) => {
  return isLoading ? (
    <S.Loading>
      <ClipLoader color={"red"} loading={isLoading} size={50} />
    </S.Loading>
  ) : (
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
