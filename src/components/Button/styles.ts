import styled from "styled-components";
import { Link } from "react-router-dom";


export const Button = styled.button<{$background?: string}>`
    background-color:${props => props.$background === "transparente" ? "transparent" : 'var(--verde)'};
    color:var(--branco);
    border:none;
    padding:6px 8px;
    border-radius:8px;
    font-size:16px;
    font-weight:bold;
    text-decoration:none;
    cursor: pointer;

    &:hover{
        cursor:pointer;
    }

`
export const ButtonLink = styled(Link)`
    background-color:transparent;
    color:var(--branco);
    border:none;
    padding:8px 8px;
    border-radius:8px;
    font-size:16px;
    font-weight:bold;
    text-decoration:none;
    display:inline-block;
    cursor: pointer;
    
    &:hover{
        cursor:pointer;
    }
`