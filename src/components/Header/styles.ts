import styled from "styled-components";
import { HashLink } from 'react-router-hash-link'



export const Header = styled.header`
    background-color: var(--cinza);
    padding:24px;
    border-radius:16px;
    margin-top:40px;
    margin-bottom:80px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    position:relative;

    & > div{
        display:flex;
        align-items: center;

        @media (max-width:768px){
            flex:1;
            justify-content: space-around;
        }
    }
`

export const Nav = styled.nav`
    display:flex;
    margin-left:40px;

    @media (max-width:768px){
        display:none;
    }
`
export const aLink = styled(HashLink)`
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

    @media (max-width:768px){
        span{
            display:none;
        }
    }
`
export const Hamburger = styled.div`
    height:100%;
    width:30px;

    @media (min-width:768px){
        display:none;
    }

    &:hover{
        cursor:pointer;
    }

    span{
        display:block;
        height:2px;
        margin-bottom:4px;
        width:100%;
        background-color:var(--branco);
    }
`
export const MenuResponsivo = styled.nav<{menuResponsivoVisivel: boolean}>`
    display:flex;
    align-items: center;
    position:absolute;
    z-index:5;
    top:100px;
    left:0;
    width:100%;
    background-color:var(--cinza);
    opacity:${props => props.menuResponsivoVisivel ? "1" : "0"};
    border-radius:8px;
    padding:8px 16px;

    @media (max-width:395px){
        font-size:12px;
        justify-content: center;
    }

    ${aLink}{
        display:inline-block;
    }
`
