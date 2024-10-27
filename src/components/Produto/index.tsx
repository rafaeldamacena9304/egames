import { Tag } from "../Tag"
import * as style from './styles'

interface ProdutoProps{
    titulo: string
    categoria: string
    sistema: string
    descricao: string
    infos: string[]
    imagem: string
}

export const Produto = (props: ProdutoProps) => {

    return(
        <style.Produto>
            <img src={props.imagem} alt=""/>
            <style.Infos>
                {props.infos.map(info => <Tag key={info}>{info}</Tag>)}
            </style.Infos>
            <style.Titulo>{props.titulo}</style.Titulo>
            <Tag>{props.categoria}</Tag>
            <Tag>{props.sistema}</Tag>
            <style.Descricao>{props.descricao}</style.Descricao>

        </style.Produto>
    )
}