import { Button } from "../../components/Button"
import { CheckoutCard } from "../../components/CheckoutCard"
import { FormRow, InputContainer } from "../../components/CheckoutCard/styles"
import { Header } from "../../containers/Header"

export const Checkout = () => {

    return(
        <div className="container">
            <Header/>
            <CheckoutCard titulo="Dados para cobrança">
                <>
                <FormRow>
                    <InputContainer>
                        <label htmlFor="nomeCompleto">Nome completo</label>
                        <input id="nomeCompleto" placeholder="Digite seu nome"/>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="email">Seu e-mail</label>
                        <input id="email" placeholder="Digite seu email"/>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="cpf">CPF</label>
                        <input id="cpf" placeholder="Digite seu CPF"/>
                    </InputContainer>
                </FormRow>
                <h3>Dados de entrega do conteúdo</h3>
                <FormRow>
                    <InputContainer>
                        <label htmlFor="emailEntrega" >Email de entrega</label>
                        <input id="emailEntrega" type="text" />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="confirmarEmailEntrega" >Confirmar email de entrega</label>
                        <input id="confirmarEmailEntrega" type="text" />
                    </InputContainer>
                </FormRow>
                </>
            </CheckoutCard>
            <CheckoutCard titulo="Pagamento">
                <div>
                    <p>
                        Ao optar por essa forma de pagamento, 
                        é importante lembrar que a confirmação pode levar até 3 dias úteis, 
                        devido aos prazos estabelecidos pelas instituições financeiras. 
                        Portanto, a liberação do código de ativação do jogo adquirido 
                        ocorrerá somente após a aprovação do pagamento do boleto.
                    </p>
                </div>
            </CheckoutCard>
            <Button title="Clique aqui para finalizar a compra" tipo="button">Finalizar compra</Button>
        </div>
    )
}