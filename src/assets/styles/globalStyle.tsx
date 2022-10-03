import { createGlobalStyle } from 'styled-components';
import reset from 'react-style-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};

  :root {
    --logofont: 'Black Han Sans', sans-serif;
    --scriptfont: 'Ubuntu', sans-serif;
    --headerfont: 'Bebas Neue', cursive;
    --bgcolor: #3c1452;
  }

  h1 {
    font-family: var(--headerfont);
    font-size: 32px;
    color: white;
  }

  #root {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: var(--bgcolor);
  }
`;