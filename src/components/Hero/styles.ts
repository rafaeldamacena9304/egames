import styled from 'styled-components'

export const HeroContainer = styled.div`
    height:480px;
    width:100%;
    display:block;
    background-repeat:no-repeat;
    background-size:100%;
    background-position:center;
    padding-top:16px;

    .container{
        display:flex;
        flex-direction:column;
        justify-content: space-between;
        height:100%;
    }
`
export const PricesAndCta = styled.div`
    padding:16px;
    background-color:#111;
    border-radius:var(--preto);
    width:300px;
    font-weight:bold;

    h2{
        font-size:32px;
        margin-bottom:16px;
    }
    p:nth-child(3){
        font-size:18px;
        margin-bottom:16px;;
    }
`
export const Button = styled.button`
    background-color:var(--verde);
    color:var(--branco);
    border:2px solid var(--branco);
    padding:4px 6px;
    border-radius:8px;
    font-size:16px;
    font-weight:bold;
    text-decoration:none;

`