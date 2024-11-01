import * as style from './styles'

export interface SectionProps {
    titulo: string
    $backgroundColor: 'preto' | 'cinza'
    children: JSX.Element
}

export const Section = (props: SectionProps) => {

    return(

            <style.Container $backgroundColor={props.$backgroundColor}>
                <div className="container">
                    <style.Titulo>
                        {props.titulo}
                    </style.Titulo>
                    {props.children}
                </div>
            </style.Container>

  
    )
}