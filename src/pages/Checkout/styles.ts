import styled from "styled-components";

export const TabButton = styled.button<{$isActive: boolean}>`
    border-radius:8px;
    font-size:14px;
    font-weight:bold;
    background-color:${props => props.$isActive ? 'var(--verde)' :'var(--preto)'};
    margin-right:16px;
    padding:8px 16px;
    border:none;
    margin-bottom:24px;
    color:white;

    img{
        margin-right:8px;
    }

    &:hover{
        cursor:pointer;
    }
`