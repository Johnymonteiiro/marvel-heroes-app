import styled from "styled-components";

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding:50px 20px;

    @media only screen and (max-width: 1273px) {
     padding:50px 50px;
  }
`;
