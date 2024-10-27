import styled from "styled-components";
import backgroundImage from '../../assets/images/banner-homem-aranha.png'
import { Tag } from "../../components/Tag/styles";

export const Banner = styled.div`
    width:100%;
    height:560px;
    display:block;
    background-image:url(${backgroundImage});
    background-repeat:no-repeat;
    background-size:cover;
    position:relative;
    padding-top:340px;

    & > div{
        display:flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    ${Tag}{
        position:absolute;
        top:32px;
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