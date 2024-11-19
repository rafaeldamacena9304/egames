//Dependencias
import { useState } from "react"

//Componentes
import { Button } from "../../components/Button"
import { CheckoutCard } from "../../components/CheckoutCard"
import { FormRow, InputContainer } from "../../components/CheckoutCard/styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer/styles"

//Imagens
import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'
import { TabButton } from "./styles"
import { useFormik } from "formik"
import * as yup from 'yup'
import { usePurchaseMutation } from "../../services/api"

export const Checkout = () => {


    const [ purchase, { isLoading, isError, data, isSuccess } ] = usePurchaseMutation()

    const form = useFormik({
        initialValues: {
            nomeCompleto: '',
            email: '',
            cpf: '',
            emailEntrega: '',
            confirmarEmailEntrega: '',
            titularCartao:'',
            cpfCartao:'',
            numeroCartao:'',
            mesVencimentoCartao:'',
            anoVencimentoCartao: '',
            codigoCartao:'',
            parcelamento:1,
        },
        validationSchema: yup.object({
            nomeCompleto: yup.string().min(5, 'Por favor, digite o nome completo').required('Por favor, digite o nome completo'),
            email: yup.string().email('Por favor, digite um endereço de email válido.').required('Digite um endereço de e-mail'),
            emailEntrega: yup.string().email('Por favor, digite um endereço de email válido.').required('Digite um endereço de e-mail'),
            confirmarEmailEntrega: yup.string().oneOf([yup.ref('emailEntrega')], 'Os e-mails precisam ser iguais').required('Este campo é necessário'),
            cpf: yup.string().min(14, 'Por favor, preencha com um CPF válido').max(14, 'Por favor, insira um CPF válido').required('Insira um CPF'),

            titularCartao: yup.string().when((values, schema) => 
                pagamentoCartao ? schema.required('O campo é obrigatório') : schema),
            cpfCartao: yup.string().when((values, schema) => 
                pagamentoCartao ? schema.required('O campo é obrigatório') : schema),
            numeroCartao: yup.string().when((values, schema) => 
                pagamentoCartao ? schema.required('O campo é obrigatório') : schema),
            mesVencimentoCartao: yup.string().when((values, schema) => 
                pagamentoCartao ? schema.required('O campo é obrigatório') : schema),
            anoVencimentoCartao: yup.string().when((values, schema) => 
                pagamentoCartao ? schema.required('O campo é obrigatório') : schema),
            codigoCartao: yup.string().when((values, schema) => 
                pagamentoCartao ? schema.required('O campo é obrigatório') : schema),
        }),
        onSubmit: (values) => {
            purchase({
                billing: {
                    document: values.cpf,
                    email: values.email,
                    name: values.nomeCompleto
                },
                delivery: {
                    email: values.emailEntrega
                },
                payment: {
                    installments:1, 
                    card:{
                        active: pagamentoCartao,
                        code: Number(values.codigoCartao),
                        name: values.titularCartao,
                        number: values.numeroCartao,
                        owner:{
                            document:values.cpfCartao,
                            name:values.titularCartao
                        },
                        expires:{
                            month:1,
                            year:2024
                        },
                    },

                },
                products:[]
            })
        }
    })

    const getErrorMessage = (nomeCampo: string, mensagem?: string) => {
        const foiAlterado = nomeCampo in form.touched;
        const invalido = nomeCampo in form.errors;
        
        if(foiAlterado && invalido){
            return mensagem
        } else{
            return ''
        }
    }

    const [pagamentoCartao, setPagamentoCartao] = useState(false)

    return(
        <div className="container">
            { isSuccess ? 
                (<CheckoutCard titulo="Muito obrigado">
                <>
                <p>
                    É com satisfação que informamos que recebemos seu pedido com sucesso! <br />
                    Abaixo estão os detalhes da sua compra: <br />
                    Número do pedido: XXXXXX <br />
                    Forma de pagamento: Boleto Bancário
                </p>
                <p>
                    Caso tenha optado pelo pagamento via boleto bancário, 
                    lembre-se de que a confirmação pode levar até 3 dias úteis. 
                    Após a aprovação do pagamento, enviaremos um e-mail 
                    contendo o código de ativação do jogo.
                </p>
                <p>
                    Se você optou pelo pagamento com cartão de crédito, 
                    a liberação do código de ativação ocorrerá após a aprovação da 
                    transação pela operadora do cartão. Você receberá o código no e-mail 
                    cadastrado em nossa loja.
                </p>
                <p>
                    Pedimos que verifique sua caixa de entrada e a 
                    pasta de spam para garantir que receba nossa comunicação.
                    Caso tenha alguma dúvida ou necessite de mais informações, 
                    por favor, entre em contato conosco através dos nossos canais de atendimento ao cliente.
                </p>
                <p>
                    Agradecemos por escolher a EPLAY e esperamos que desfrute do seu jogo!
                </p>
                </>
            </CheckoutCard>)
            :
            (<form onSubmit={form.handleSubmit}>
            <Header/>
            <CheckoutCard titulo="Dados para cobrança">
                <>
                <FormRow>
                    <InputContainer>
                        <label htmlFor="nomeCompleto">Nome completo</label>
                        <input id="nomeCompleto" placeholder="Digite seu nome" name="nomeCompleto" value={form.values.nomeCompleto} onChange={form.handleChange} onBlur={form.handleBlur}/>
                        <small>{getErrorMessage('nomeCompleto', form.errors.nomeCompleto)}</small>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="email">Seu e-mail</label>
                        <input type="email" id="email" placeholder="Digite seu email" name="email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur}/>
                        <small>{getErrorMessage('email', form.errors.email)}</small>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" id="cpf" placeholder="Digite seu CPF" name="cpf" value={form.values.cpf} onChange={form.handleChange} onBlur={form.handleBlur}/>
                        <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
                    </InputContainer>
                </FormRow>
                <h3>Dados de entrega do conteúdo</h3>
                <FormRow>
                    <InputContainer>
                        <label htmlFor="emailEntrega" >Email de entrega</label>
                        <input id="emailEntrega" placeholder="Seu e-mail para recebimento do produto" type="email" name="emailEntrega" value={form.values.emailEntrega} onChange={form.handleChange}  onBlur={form.handleBlur}/>
                        <small>{getErrorMessage('emailEntrega', form.errors.emailEntrega)}</small>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="confirmarEmailEntrega" >Confirmar email de entrega</label>
                        <input id="confirmarEmailEntrega" placeholder="Conrfirme o e-mail de recebimento" type="email" name="confirmarEmailEntrega" value={form.values.confirmarEmailEntrega} onChange={form.handleChange} onBlur={form.handleBlur}/>
                        <small>{getErrorMessage('confirmarEmailEntrega', form.errors.confirmarEmailEntrega)}</small>
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
                                <input id="titularCartao" type="text" name="titularCartao" value={form.values.titularCartao} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                <small>{getErrorMessage('titularCartao', form.errors.titularCartao)}</small>

                            </InputContainer>
                            <InputContainer>
                                <label htmlFor="cpfCartao">
                                    CPF do titular do cartão
                                </label>
                                <input id="cpfCartao" type="text"  name="cpfCartao" value={form.values.cpfCartao} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                <small>{getErrorMessage('cpfCartao', form.errors.cpfCartao)}</small>
                            </InputContainer>
                        </FormRow>
                        <FormRow>
                            <InputContainer>
                                <label htmlFor="numeroCartao">
                                    Número do cartão
                                </label>
                                <input id="numeroCartao" type="text" name="numeroCartao" value={form.values.numeroCartao} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                <small>{getErrorMessage('numeroCartao', form.errors.numeroCartao)}</small>
                            </InputContainer>
                            <InputContainer>
                                <label htmlFor="vencimentoCartao">
                                    Mês de vencimento
                                </label>
                                <input id="mesVencimentoCartao" type="text" name="mesVencimentoCartao" value={form.values.anoVencimentoCartao} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                <small>{getErrorMessage('vencimentoCartao', form.errors.mesVencimentoCartao)}</small>
                            </InputContainer>
                            <InputContainer>
                                <label htmlFor="vencimentoCartao">
                                    Ano de vencimento
                                </label>
                                <input id="anoVencimentoCartao" type="number" name="anoVencimentoCartao" value={form.values.anoVencimentoCartao} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                <small>{getErrorMessage('vencimentoCartao', form.errors.anoVencimentoCartao)}</small>
                            </InputContainer>
                            <InputContainer>
                                <label htmlFor="codigoCartao">
                                    Código de segurança
                                </label>
                                <input id="codigoCartao" type="text" name="codigoCartao" value={form.values.codigoCartao} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                <small>{getErrorMessage('codigoCartao', form.errors.codigoCartao)}</small>
                            </InputContainer>
                        </FormRow>
                        <FormRow>
                            <InputContainer>
                                <label htmlFor="parcelamento">Parcelamento</label>
                                <select id="parcelamento" name="parcelamento" value={form.values.parcelamento} onChange={form.handleChange} onBlur={form.handleBlur}>
                                    <option value="">1x de xxx,xx</option>
                                    <option value="">2x de xxx,xx</option>
                                    <option value="">3x de xxx,xx</option>
                                    <option value="">4x de xxx,xx</option>
                                    <option value="">5x de xxx,xx</option>
                                    <option value="">6x de xxx,xx</option>
                                </select>
                                <small>{getErrorMessage('parcelamento', form.errors.parcelamento)}</small>
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
            <Button type="submit" onClick={form.handleSubmit} title="Clique aqui para finalizar a compra" tipo="button">Finalizar compra</Button>
            <Footer/>
            </form>)
            }
        
        </div>
    )
}