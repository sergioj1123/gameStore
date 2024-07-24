import { createGlobalStyle } from 'styled-components';
import colors from './variables';

export const breakpoints = {
  tablet: '768px',
  desktop: '1024px',
};

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }


  body{
    background-color: ${colors.black};
    color: ${colors.white};
    padding-top: 40px;
  }

  a {
    color: ${colors.white};
    text-decoration: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`;
