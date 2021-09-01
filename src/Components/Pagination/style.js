import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;

  .paginationBtns {
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
    
    @media only screen and (max-width: 430px) {
      display:inline-block;
      text-align: center;
    }
  }

  .paginationBtns a {
    padding: 10px;
    margin: 8px;
    border-radius: 5px;
    border: 1px solid red;
    font-size: 20px;
    font-weight: bold;
    color: red;
    cursor: pointer;
    height: 40px;
    transition: all 0.9s;

    &:hover {
      color: #ffff;
      background-color: red;
    }

    @media only screen and (max-width: 430px) {
      display:inline-block;
      text-align: center;
    }
  }
  .paginationActive a {
    color: #fff;
    background-color: red;
  }
`;

