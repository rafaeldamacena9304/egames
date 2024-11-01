import styled from "styled-components";
import { ListaProdutosProps } from ".";
import { Produto } from "../../components/Produto/styles";

export const ListaProdutosContainer = styled.section<Omit<ListaProdutosProps, 'titulo' | 'games'>>`
    padding:32px 0;
    background-color: ${props => props.$backgroundColor === 'preto' ? 'var(--preto)' : 'var(--cinza)'};

    ${Produto}{
        background-color: ${props => props.$backgroundColor === 'preto' ? 'var(--cinza)' : 'var(--preto)'};
    }
`
export const ListaProdutos = styled.ul`
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    gap:24px;
    list-style:none;

    @media (max-width:768px){
        grid-template-columns:1fr 1fr;
    }
    @media (max-width:395px){
        grid-template-columns:1fr;
    }
`

export const Titulo = styled.h2`
    font-size:18px;
    font-weight:bold;
    margin-bottom:32px;
`