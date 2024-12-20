import styled from "styled-components";

export const CardContainer = styled.div`
    border-radius:8px;
    background-color:var(--cinza);
    padding:24px;
    margin-bottom:40px;

    h2, h3{
        font-size:18px;
        font-weight:bold;
        color:var(--branco);
        margin-bottom:24px;
    }
    p{
        font-size:14px;
        line-height:22px;
        margin-bottom:24px;
    }
`
export const FormRow = styled.div`
    display:flex;
    align-items: center;
    gap:24px;
`
export const InputContainer = styled.div`
    flex:auto;
    margin-bottom:24px;
    
    label{
        display:block;
        margin-bottom:8px;
    }
    input, select{
        font-size:14px;
        background-color:#EEE;
        padding:8px;
        border:1px solid var(--cinza);
        width:100%;

        &:focus{
            outline:none;
        }
    }
`