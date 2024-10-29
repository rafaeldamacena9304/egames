import { Game } from "../../pages/Home"
import { Tag } from "../Tag"
import * as style from './styles'

interface ProdutoProps{
    id: number
    titulo: string
    categoria: string
    sistema: string
    imagem: string
    infos: string[]
    descricao:string
}

export const Produto = (props: ProdutoProps) => {
    const getDescricao = (descricao: string) => {
        if (descricao.length > 95){
            return descricao.slice(0, 92) + '...'
        }
        return descricao
    }

    return(
        <style.Produto to={`/produto/${props.id}`}>
            <img src={props.imagem} alt=""/>
            <style.Infos>
                {props.infos.map(info => <Tag key={info}>{info}</Tag>)}
            </style.Infos>
            <style.Titulo>{props.titulo}</style.Titulo>
            <Tag>{props.categoria}</Tag>
            <Tag>{props.sistema}</Tag>
            <style.Descricao>{getDescricao(props.descricao)}</style.Descricao>

        </style.Produto>
    )
}