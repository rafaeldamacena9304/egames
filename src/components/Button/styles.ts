import styled from "styled-components";
import { Link } from "react-router-dom";


export const Button = styled.button`
    background-color:transparent;
    color:var(--branco);
    border:2px solid var(--branco);
    padding:4px 6px;
    border-radius:8px;
    font-size:16px;
    font-weight:bold;
    text-decoration:none;

`
export const ButtonLink = styled(Link)`
    background-color:transparent;
    color:var(--branco);
    border:2px solid var(--branco);
    padding:4px 6px;
    border-radius:8px;
    font-size:16px;
    font-weight:bold;
    text-decoration:none;
    display:inline-block;
`