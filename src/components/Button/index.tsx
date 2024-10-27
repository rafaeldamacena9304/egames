import * as style from './styles'

interface ButtonProps{
    tipo: 'button' | 'link'
    title: string
    children: string
    to?: string
    onClick?: () => void
}

export const Button = (props: ButtonProps) => {
    if (props.tipo === 'button'){
        return <style.Button title={props.title} onClick={props.onClick} >{props.children}</style.Button>
    }

    return(
        <style.ButtonLink to={props.to as string} title={props.title} onClick={props.onClick} >{props.children}</style.ButtonLink>
    )
}