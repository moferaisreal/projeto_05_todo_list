import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    font-family: "Roboto", sans-serif;
    background-color: #121214;
    color: #fff;
  }

`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: clamp(9.375rem, 7.4185rem + 9.7826vw, 15rem) auto;
`;

export default GlobalStyles;
