import styled from 'styled-components';

export const Form = styled.form`
  width: 35%;

  @media only screen and (max-width: 800px) {
    width:50%;

  }
  @media only screen and (max-width: 600px) {
    width:80%;
    text-align:center;
    margin: 0 auto;
    margin-top: 10px;

  }
  .input-area{
      width: 100%;
      padding: 10px;
      font-size:18px;
      border-radius:8px;
      font-weight:bold;
  }
`;