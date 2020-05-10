import { createGlobalStyle } from 'styled-components';
import { Theme } from '@styles/theme';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #222;
    margin: 0;
    background: ${Theme.colorSecondary};
  }
`;
