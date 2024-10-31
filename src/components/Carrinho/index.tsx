import { Button } from "../Button"
import { Tag } from "../Tag"
import { Overlay, CartContainer, SideBar, QtdItems, Precos, ItemCarrinho } from "./styles"
import close from '../../assets/images/close.png'


export const Carrinho = () => {

    return(
        <CartContainer>
        <Overlay/>
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
                    <img className="close" src={close} alt="" />
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