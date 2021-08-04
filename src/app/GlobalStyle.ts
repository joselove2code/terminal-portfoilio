import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --marginX: 15px;
    --fontSize: 16px;
    --marginTop: 15px;
    --highlightColor: #3a96ddff;
    --fontColor: #16c60cff;
    --maxWidth: 1210px;
    --lineHeight: 20px;
    --backgroundColor: black;
    --font: Consolas, monospace;

    @media (min-width: 1250px) {
      --marginTop: 80px;
    }
  }
`;
