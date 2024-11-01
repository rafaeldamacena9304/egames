//Dependencias
import { useState } from "react"

//Componentes
import { Button } from "../../components/Button"
import { CheckoutCard } from "../../components/CheckoutCard"
import { FormRow, InputContainer } from "../../components/CheckoutCard/styles"
import { Header } from "../../containers/Header"
import { Footer } from "../../containers/Footer/styles"

//Imagens
import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'
import { TabButton } from "./styles"

export const Checkout = () => {

    const [pagamentoCartao, setPagamentoCartao] = useState(false)

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
                        <input id="emailEntrega" placeholder="Seu e-mail para recebimento do produto" type="text" />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="confirmarEmailEntrega" >Confirmar email de entrega</label>
                        <input id="confirmarEmailEntrega" placeholder="conrfirme o e-mail de recebimento" type="text" />
                    </InputContainer>
                </FormRow>
                </>
            </CheckoutCard>
            <CheckoutCard titulo="Pagamento">
                <div>
                    <TabButton onClick={() => setPagamentoCartao(false)} $isActive={!pagamentoCartao}>
                        <img src={boleto} alt="" />
                        Boleto bancário
                    </TabButton>
                    <TabButton onClick={() => setPagamentoCartao(true)} $isActive={pagamentoCartao}>
                        <img src={cartao} alt="" />
                        Cartão de crédito
                    </TabButton>
                    {pagamentoCartao ? 
                        <>
                        <FormRow>
                            <InputContainer>
                                <label htmlFor="titularCartao">
                                    Nome do titular (como consta no cartão)
                                </label>
                                <input id="titularCartao" type="text" />
                            </InputContainer>
                            <InputContainer>
                                <label htmlFor="cpfCartao">
                                    CPF do titular do cartão
                                </label>
                                <input id="cpfCartao" type="text" />
                            </InputContainer>
                        </FormRow>
                        <FormRow>
                            <InputContainer>
                                <label htmlFor="numeroCartao">
                                    Número do cartão
                                </label>
                                <input id="numeroCartao" type="text" />
                            </InputContainer>
                            <InputContainer>
                                <label htmlFor="vencimentoCartao">
                                    Vencimento
                                </label>
                                <input id="vencimentoCartao" type="text" />
                            </InputContainer>
                            <InputContainer>
                                <label htmlFor="codigoCartao">
                                    Código de segurança
                                </label>
                                <input id="codigoCartao" type="text" />
                            </InputContainer>
                        </FormRow>
                        <FormRow>
                            <InputContainer>
                                <label htmlFor="parcelamento">Parcelamento</label>
                                <select>
                                    <option value="">1x de xxx,xx</option>
                                    <option value="">2x de xxx,xx</option>
                                    <option value="">3x de xxx,xx</option>
                                    <option value="">4x de xxx,xx</option>
                                    <option value="">5x de xxx,xx</option>
                                    <option value="">6x de xxx,xx</option>
                                </select>
                            </InputContainer>
                        </FormRow>
                        </>
                        :
                        <p>
                            Ao optar por essa forma de pagamento, 
                            é importante lembrar que a confirmação pode levar até 3 dias úteis, 
                            devido aos prazos estabelecidos pelas instituições financeiras. 
                            Portanto, a liberação do código de ativação do jogo adquirido 
                            ocorrerá somente após a aprovação do pagamento do boleto.
                        </p>
                    }
                </div>
            </CheckoutCard>
            <Button title="Clique aqui para finalizar a compra" tipo="button">Finalizar compra</Button>
            <Footer/>
        </div>
    )
}