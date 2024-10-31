import * as style from './styles'

export interface TagProps{
    children: string
    size?: 'small' | 'big'
}

export const Tag = (props: TagProps) => {
    
    return(
        <style.Tag size={props.size}>{props.children}</style.Tag>
    )
}