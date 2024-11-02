//Componentes
import { Produto } from "../Produto"
import { Game } from "../../pages/Home"

//Estilos
import * as style from './styles'

export interface ListaProdutosProps{
    titulo: string
    $backgroundColor: 'cinza' | 'preto'
    games: Game[]
}

export const ListaProdutos = (props: ListaProdutosProps) => {
    const formatarPreco = (preco: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(preco)
    }

    const getGameInfos = (game: Game) => {
        const tags = [];

        if (game.release_date) {
            tags.push(game.release_date)
        }
        if (game.prices.discount){
            tags.push(`${game.prices.discount}%`)
        }
        if(game.prices.current){
            tags.push(formatarPreco(game.prices.current))
        }
        return tags
    } 

    return(
        <style.ListaProdutosContainer $backgroundColor={props.$backgroundColor}>
            <div className="container">
                <style.Titulo>{props.titulo}</style.Titulo>
                <style.ListaProdutos>
                    {props.games.map(game => (
                        <li key={game.id}>
                            <Produto
                                id={game.id}
                                categoria={game.details.category} descricao={game.description}
                                imagem={game.media.thumbnail} titulo={game.name}
                                infos={getGameInfos(game)} sistema={game.details.system}
                            />
                        </li>
                    ))}
                </style.ListaProdutos>
            </div>
        </style.ListaProdutosContainer>
    )
}