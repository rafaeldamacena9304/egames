import { Produto } from "../../components/Produto"
import * as style from './styles'
import styles from '../../globalStyle.module.css'
import { Game } from "../../models/Game"

export interface ListaProdutosProps{
    titulo: string
    backgroundColor: 'cinza' | 'preto'
    games: Game[]
}

export const ListaProdutos = (props: ListaProdutosProps) => {

    return(
        <style.ListaProdutosContainer backgroundColor={props.backgroundColor}>
            <div className={styles.container}>
                <style.Titulo>{props.titulo}</style.Titulo>
                <style.ListaProdutos>
                    {props.games.map(game => (
                        <li>
                            <Produto
                                key={game.id}
                                categoria={game.categoria} descricao={game.descricao}
                                imagem={game.imagem} titulo={game.titulo}
                                infos={game.infos} sistema={game.sistema}
                            />
                        </li>
                    ))}
                </style.ListaProdutos>
            </div>
        </style.ListaProdutosContainer>
    )
}