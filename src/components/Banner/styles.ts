import styled from "styled-components";
import { Tag } from "../Tag/styles";

export const Banner = styled.div`
    width:100%;
    height:560px;
    display:block;
    background-repeat:no-repeat;
    background-size:cover;
    position:relative;
    padding-top:340px;

    & > div{
        display:flex;
        justify-content: space-between;
        align-items: flex-end;
        background-color:rgba(0,0,0,0.95);
        padding:16px;
        border-radius:16px;
    }

    ${Tag}{
        position:absolute;
        top:-320px;
    }
    &::after{
        content:'';
        background-color:rgba(0,0,0,0.5);
        position:absolute;
        top:0;
        left:0;
        z-index:1;
        width:100%;
        height:100%;
    }
    .container{
        position:relative;
        z-index:2;
    }   

`
export const Titulo = styled.h2`
    font-size:36px;
    font-weight:bold;
    max-width:450px;

`
export const Precos = styled.p`
    font-weight:medium;
    font-size:24px;
    margin-top:24px;
`