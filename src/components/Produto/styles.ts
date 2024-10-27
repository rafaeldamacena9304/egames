import styled from "styled-components";
import { Tag } from "../Tag/styles";

export const Produto = styled.div`
    background-color:var(--cinza);
    border-radius:8px;
    padding:8px;
    position:relative;

    ${Tag}{
        margin-right:8px;
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