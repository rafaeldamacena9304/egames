import styled from "styled-components";
import { Produto } from "../../components/Produto/styles";
import { SectionProps } from ".";
export const Container = styled.section<Omit<SectionProps, 'titulo' | 'games'>>`
    padding:32px 0;
    background-color: ${props => props.$backgroundColor === 'preto' ? 'var(--preto)' : 'var(--cinza)'};

    ${Produto}{
        background-color: ${props => props.$backgroundColor === 'preto' ? 'var(--cinza)' : 'var(--preto)'};
    }

    p{
        font-size:14px;
        line-height:22px;
        max-width:640px;
    }
`
export const Titulo = styled.h2`
    font-size:18px;
    font-weight:bold;
    margin-bottom:32px;
`