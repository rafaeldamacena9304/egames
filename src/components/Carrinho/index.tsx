//Dependencias
import { useDispatch, useSelector } from "react-redux"

import { close } from '../../redux/reducers/cart'

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

    const { isOpen } = useSelector((state: RootReducer) => state.cart)
    
    const fecharCarrinho = () => {
        dispatch(close())
    }

    if (isOpen) {
        return(
            <CartContainer>
            <Overlay onClick={fecharCarrinho}/>
            <SideBar>
                <ul>
                    <ItemCarrinho>
                        <img src="https://via.placeholder.com/200x200" alt="" />
                        <div>
                            <h3>Nome do jogo</h3>
                            <Tag>Categoria</Tag>
                            <Tag>Sistema</Tag>
                            <span>R$150,00</span>
                        </div>
                        <img className="close" src={closeButton} alt="" />
                    </ItemCarrinho>
                </ul>
                <QtdItems>2 jogos no carrinho</QtdItems>
                <Precos>
                    total de R$250,00 <br />
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