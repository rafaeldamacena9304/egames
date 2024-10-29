import styled from "styled-components";
import { Tag } from "../Tag/styles";
import { Link } from "react-router-dom";

export const Produto = styled(Link)`
    background-color:var(--cinza);
    border-radius:8px;
    padding:8px;
    position:relative;
    height:100%;
    text-decoration:none;
    color:var(--branco)
    
    ${Tag}{
        margin-right:8px;
    }

    & > img{
        width:100%;
        height:250px;
        object-fit: cover;
    }
`

export const Titulo = styled.h3`
    font-weight:bold;
    font-size:16px;
    margin-top:16px;
    margin-bottom:8px;
`

export const Descricao = styled.p`
    font-size:14px;
    line-height:22px;
    margin-top:16px;
`

export const Infos = styled.div`
    position:absolute;
    top:16px;
    right:16px;
`