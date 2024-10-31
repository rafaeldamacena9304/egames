import * as style from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { useDispatch } from 'react-redux'
import {open} from '../../redux/reducers/cart'

export const Header = () => {


    const dispatch = useDispatch()

    const abrirCarrinho = () => {
        dispatch(open())
    }

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
        <style.CarrinhoLink onClick={abrirCarrinho} to="#">
            0 - produto(s)
            <img src={carrinho} alt="carrinho de compras eplay" />
        </style.CarrinhoLink>
    </style.Header>

    )
}