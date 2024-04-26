import { createGlobalStyle } from 'styled-components';
import colors from './variables';

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background-color: ${colors.black};
    color: ${colors.withe};
  }
`;
