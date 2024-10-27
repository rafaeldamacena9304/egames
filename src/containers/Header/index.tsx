import * as style from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

export const Header = () => {

return(
    <style.Header>
        <div>
            <img src={logo} alt="EPLAY logo"/>
            <style.Nav>
                <style.aLink to="/categorias">Categorias</style.aLink>
                <style.aLink to="#">Novidades</style.aLink>
                <style.aLink to="#">Promoções</style.aLink>
            </style.Nav>
        </div>
        <style.CarrinhoLink to="#">
            0 - produto(s)
            <img src={carrinho} alt="carrinho de compras eplay" />
        </style.CarrinhoLink>
    </style.Header>

    )
}