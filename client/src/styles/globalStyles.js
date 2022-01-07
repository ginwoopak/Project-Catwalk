import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 1.0s linear;
  }
  `;

export const lightTheme = {
  body: 'ghostwhite',
  text: '#000',
};

export const darkTheme = {
  body: '#262626',
  text: '#FFF',
};
