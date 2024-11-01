//Dependencias
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../redux/reducers/cart'

//Types

//Estilos
import * as style from './styles'
import { RootReducer } from '../../redux/store'


//Imagens
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'


export const Header = () => {

    const { items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const abrirCarrinho = () => {
        dispatch(open())
    }

return(
    <style.Header>
        <div>
            <Link to="/">
                <img src={logo} alt="EPLAY logo"/>
            </Link>
            
            <style.Nav>
                <style.aLink to="/categorias">Categorias</style.aLink>
                <style.aLink to="#">Novidades</style.aLink>
                <style.aLink to="#">Promoções</style.aLink>
            </style.Nav>
        </div>
        <style.CarrinhoLink onClick={abrirCarrinho} to="#">
            {items.length} - produto(s)
            <img src={carrinho} alt="carrinho de compras eplay" />
        </style.CarrinhoLink>
    </style.Header>

    )
}