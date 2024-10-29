import { Game } from "../../pages/Home"
import { Tag } from "../Tag"
import * as style from "./styles"
      
interface HeroProps{
    game:Game
}

export const Hero = ({game}: HeroProps) => {

    return(
        <style.HeroContainer style={{ backgroundImage: `url(${game.media.cover})`}}>
            <div className="container">
                <div>
                    <Tag>{game.details.category}</Tag>
                    <Tag>{game.details.system}</Tag>
                </div>
                <style.PricesAndCta>
                    <h2>{game.name}</h2>
                    <p>De: <s>R${game.prices.old}</s></p>
                    <p>Por: R${game.prices.current}</p>
                    <style.Button>Adicionar ao carrinho</style.Button>
                </style.PricesAndCta>
            </div>
        </style.HeroContainer>
    )
}