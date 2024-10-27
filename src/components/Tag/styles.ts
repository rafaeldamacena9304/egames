import styled from "styled-components";
import { TagProps } from ".";


export const Tag = styled.div<TagProps>`
    background-color:var(--verde);
    color:var(--branco);
    font-size:${props => props.size === 'big' ? '16px' : '10px'};
    font-weight:medium;
    padding:${props => props.size === 'big' ? '8px 16px' : '4px 6px'};
    border-radius:8px;
    display:inline-block;
`