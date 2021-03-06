import styled, { createGlobalStyle } from 'styled-components';
import "@fontsource/muli";
import "@fontsource/montserrat";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #FFFFFF;
    --primary-color: #BADC58;
    --white: #ffffff;
    --black: #1D164D;
    --gray: #9E9BAF;

    --font-title: 'Montserrat';
    --font-body: 'Muli';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;

    &:focus-visible, &:focus, &:focus-within {
      outline-color: var(--primary-color);
    }
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }

`;

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  z-index: 1;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
  padding-left: 30px;
  }
`