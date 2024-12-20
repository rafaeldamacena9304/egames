import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior: smooth;
    }
    :root{
    --branco:#EEE; 
    --cinza:#333;
    --preto:#111;
    --verde:#10AC84;
    }

    @font-face {
          font-family: 'Geist';
          src: url('/fonts/Geist-Regular.woff2') format('woff2');
          font-weight: 400;
          font-style: normal;
    }

    @font-face {
        font-family: 'Geist';
        src: url('/fonts/Geist-Bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
    }
    *, *::after, *::before{
        font-family:'Geist';
        padding:0;
        margin:0;
        box-sizing:border-box;
        list-style: none;
    }


    body{
        background-color:var(--preto);
        color:var(--branco);
    }
    .container{
        margin:0 auto;
        width:100%;
        max-width:1024px;
        
        @media (max-width:768px){
            width:80%;
        }
    }
`
