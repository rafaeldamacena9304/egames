//Dependencias
import { useDispatch, useSelector } from "react-redux"

import { close, remove } from '../../redux/reducers/cart'

//Types
import { RootReducer } from "../../redux/store"

//Componentes
import { Button } from "../Button"
import { Tag } from "../Tag"

//Estilo
import { Overlay, CartContainer, SideBar, QtdItems, Precos, ItemCarrinho } from "./styles"

//Imagens
import closeButton from '../../assets/images/close.png'


export const Carrinho = () => {

    const dispatch = useDispatch();

    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    
    const fecharCarrinho = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const formatarPreco = (preco: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(preco)
    }
    
    const calcularPrecoTotal = () => {
        return items.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.prices.current ?? 0)
        }, 0)
    }


    if (isOpen) {
        return(
            <CartContainer>
            <Overlay onClick={fecharCarrinho}/>
            <SideBar>
                <ul>
                    {items.map(item => 
                        <ItemCarrinho key={item.id}>
                            <img src={item.media.thumbnail} alt=""/>
                            <div>
                                <h3>{item.name}</h3>
                                <Tag>{item.details.category}</Tag>
                                <Tag>{item.details.system}</Tag>
                                <span>{formatarPreco(item.prices.current!)}</span>
                            </div>
                            <img onClick={() => removeItem(item.id)} className="close" src={closeButton} alt="" />
                        </ItemCarrinho>)}
                </ul>
                <QtdItems>{items.length} jogos no carrinho</QtdItems>
                <Precos>
                    total de {formatarPreco(calcularPrecoTotal())} <br />
                    <span>Em até 6x sem juros</span>
                </Precos>
                <Button tipo="button" title="Clique aqui para continuar com a compra">
                    Continuar com a compra
                </Button>
            </SideBar>
            </CartContainer>
        )
    }
    return <></>
    
}