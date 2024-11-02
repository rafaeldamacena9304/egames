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
import { useState } from 'react'


export const Header = () => {

    const { items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const [menuResponsivoVisivel, setMenuResponsivoVisivel] = useState(false)

    const abrirCarrinho = () => {
        dispatch(open())
    }

return(
    <style.Header>
            <style.MenuResponsivo menuResponsivoVisivel={menuResponsivoVisivel}>
                <style.aLink to="/categorias">Categorias</style.aLink>
                <style.aLink to="#">Novidades</style.aLink>
                <style.aLink to="#">Promoções</style.aLink>
            </style.MenuResponsivo>
        <div>
            <style.Hamburger onClick={() => setMenuResponsivoVisivel(!menuResponsivoVisivel)}>
                <span />
                <span />
                <span />
            </style.Hamburger>

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
            {items.length} <span>- produto(s)</span>
            <img src={carrinho} alt="carrinho de compras eplay" />
        </style.CarrinhoLink>
    </style.Header>

    )
}