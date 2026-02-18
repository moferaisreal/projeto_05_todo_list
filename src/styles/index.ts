import styled, { createGlobalStyle } from "styled-components";
import * as variables from "./variables"

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    font-family: "Roboto", sans-serif;
    background-color: ${variables.default.bgpage};
    color: ${variables.default.textonlight};
  }

`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: clamp(9.375rem, 7.4185rem + 9.7826vw, 15rem) auto;
`;

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`;
export const Titulo = styled.h2`
  display: block;
  margin-bottom: 40px;
  margin-top: 40px;
  font-size: 18px;
  font-weight: bold;
`;
export const Campo = styled.input`
  width: 100%;
  background-color: ${variables.default.bgpage};
  font-weight: bold;
  color: ${variables.default.textonlight};
  padding: .5rem;
  border-color: ${variables.default.borderdark};
  border-radius: .5rem;
`;

export const Botao = styled.button`
  font-size: .875rem;
  border: none;
  border-radius: .5rem;
  cursor: pointer;
  padding: .5rem 1rem;
  margin-right: .5rem;
  color: ${variables.default.textondark};
  font-weight: bold;
  background-color: ${variables.default.btneditar};
  margin-right: .5rem;
`;

export default GlobalStyles;
