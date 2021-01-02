import { createGlobalStyle } from 'styled-components';

import { colors } from './constants';


export const GlobalStyle = createGlobalStyle`
    /* @font-face {
        font-family: 'Panton';
        font-weight: 400;
        font-style: normal;
        src: url('https://grandvision.s3.amazonaws.com/pbe/fonts/Panton-Regular.otf');
    } */
    
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'poppins', 'system-ui','-apple-system','BlinkMacSystemFont','Segoe UI,Roboto','Helvetica Neue','Arial','Noto Sans','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    h2 {
        font-size: 30px;
    }

    h3 {
        font-size: 24px;
    }

    h4 {
        font-size: 14px;
    }

    a {
        color: ${colors.grey};
        text-decoration: none;
    }

    p {
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    } 
`; 
