import { createGlobalStyle } from 'styled-components';
import reset from 'react-style-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  :root {
    --logofont: 'Black Han Sans', sans-serif;
    --scriptfont: 'Ubuntu', sans-serif;
    --headerfont: 'Bebas Neue', cursive;
    --maincolor: #3ad6ea;
    --contrastcolor1: #ffffff;
    --contrastcolor2: #489de2;
    --contrastcolor3: #bb0fe6;
    --divcolor1: #1d362c;
    --divcolor1-light: #2a5241;
    --divcolor1-dark: #15271f;
    --divcolor2: #457260;
    --divcolor3: #cbe4db;
    --divcolor4-light: #4b96a3;
    --divcolor4: #366c75;
    --divcolor4-dark: #234950;
    --textcolor1: #e2e9ee;
    --textcolor2: #7c8d99;
    --textcolor3: #38444d;
    --bgcolor1: #0c2630;
    --bgcolor2: #000000;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  #root {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
`;

export default GlobalStyle;