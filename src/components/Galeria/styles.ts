import styled from "styled-components";

export const Galeria = styled.ul`
    display:flex;
    align-items: center;
    list-style:none;
    flex-wrap:wrap;
`
export const Item = styled.li`
    margin-right:16px;
    width:150px;
    height:150px;
    position:relative;
    margin-bottom:16px;

    & > img{
        border:2px solid var(--branco);
        border-radius:8px;
        width:100%;
        object-fit: cover;
    }
`
export const ActionContainer = styled.div`
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.3);
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    opacity:0;
    transition: all .5s;

    &:hover{
        opacity:1;
        transition: all .5s;
    }
`
export const Popup = styled.div`
    position:fixed;
    width:100%;
    height:100%;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    display:flex;
    align-items: center;
    justify-content: center;
    z-index:2;
    background-color:rgba(0,0,0,0.8);
        
`
export const PopupContent = styled.div`
    margin:0 auto;
    width:100%;
    max-width:960px;
    height:80%;

    & > img{
        width:100%;
    }
    & > iframe{
        width:100%;
    }

    @media (max-width:768px){
        width:80%;
        height:50%;
    }
`
export const PopupHeader = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:16px;
    font-size:18px;
    font-weight:bold;
`