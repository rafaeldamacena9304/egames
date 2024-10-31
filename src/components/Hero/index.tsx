//Dependencias
import { useDispatch } from "react-redux"
import { add } from '../../redux/reducers/cart' 

//Componentes
import { Game } from "../../pages/Home"
import { Tag } from "../Tag"

//Estilos
import * as style from "./styles"
      
interface HeroProps{
    game:Game
}

export const Hero = ({game}: HeroProps) => {

    const dispatch = useDispatch()

    const adicionarAoCarrinho = () => {
        dispatch(add(game))
    }

    return(
        <style.HeroContainer style={{ backgroundImage: `url(${game.media.cover})`}}>
            <div className="container">
                <div>
                    <Tag>{game.details.category}</Tag>
                    <Tag>{game.details.system}</Tag>
                </div>
                <style.PricesAndCta>
                    <h2>{game.name}</h2>
                    {game.prices.old && ( <p>De: <s>R${game.prices.old}</s></p>)}
                    {game.prices.current && (<p>Por: R${game.prices.current}</p>)}
                    
                    {game.prices.current && (<style.Button onClick={adicionarAoCarrinho}>Adicionar ao carrinho</style.Button>)}
                </style.PricesAndCta>
            </div>
        </style.HeroContainer>
    )
}