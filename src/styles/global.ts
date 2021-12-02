import { createGlobalStyle } from 'styled-components';
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