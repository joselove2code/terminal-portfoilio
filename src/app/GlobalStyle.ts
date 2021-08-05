import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --marginX: 15px;
    --fontSize: 16px;
    --verticalMargin: 15px;
    --highlightColor: #3a96dd;
    --fontColor: #16c60c;
    --fontColorLighten: #5cf153;
    --maxWidth: 1210px;
    --lineHeight: 20px;
    --backgroundColor: black;
    --font: Consolas, monospace;

    @media (min-width: 1250px) {
      --verticalMargin: 80px;
    }
  }
`;
