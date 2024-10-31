import styled from "styled-components";
import { Tag } from "../Tag/styles";



export const Overlay = styled.div`
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    background-color: rgba(0,0,0,0.7);
`
export const CartContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    justify-content: flex-end;
    z-index:2;
`
export const SideBar = styled.aside`
    background-color:var(--cinza);
    z-index:3;
    padding:40px 16px;
    width:100%;
    max-width:360px;

    Button{
        background-color:var(--verde);
        width:100%;
        border:none;
    }
`
export const Precos = styled.p`
    font-weight:bold;
    font-size:14px;
    color:var(--branco);

    span{
        display:block;
        font-size:12px;
        color:#777;
    }
    margin-bottom:24px;
`
export const QtdItems = styled.p`
    font-weight:bold;
    font-size:16px;
    color:var(--branco);
    margin-top:32px;
    margin-bottom:16px;
`
export const ItemCarrinho = styled.li`
    display:flex;
    align-items:center;
    padding:8px 0;
    border-bottom:1px solid #777;
    position:relative;

    img{
        width:80px;
        height:80px;  
        object-fit: cover;
        margin-right:24px;
    }
    .close{
        width:16px;
        height:16px;
        position:absolute;
        right:0;
        top:12px;
    }
    div{
        h3{
            font-size:16px;
            font-weight:bold;
            color:var(--branco)
        }
        ${Tag}{
            margin:8px 0;
            margin-right:8px;
        }
        span{
            display:block;
            font-size:14px;
            font-weight:bold;
        }
    }
`