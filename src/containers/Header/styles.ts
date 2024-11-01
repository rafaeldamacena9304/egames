import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
    background-color: var(--cinza);
    padding:24px;
    border-radius:16px;
    margin-top:40px;
    margin-bottom:80px;
    display:flex;
    align-items: center;
    justify-content: space-between;

    div{
        display:flex;
        align-items: center;
    }
    
    @media (max-width:395px){
        display:none;
    }
`
export const Nav = styled.nav`
    display:flex;
    margin-left:40px;
`
export const aLink = styled(Link)`
    margin-right:16px;
    color:var(--branco);
    text-decoration:none;
    font-weight:bold;
`
export const CarrinhoLink = styled(aLink)`
    display:flex;
    align-items:center;
    img{
        margin-left:16px;
    }
`