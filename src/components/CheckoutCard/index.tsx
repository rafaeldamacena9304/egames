
//Componentes
import { CardContainer } from "./styles"

//Types
interface CheckoutCardProps {
    children: JSX.Element
    titulo: string
}

export const CheckoutCard = (props: CheckoutCardProps ) => {

    return(
        <CardContainer>
            <h2>{props.titulo}</h2>
            {props.children}
        </CardContainer>
    )
}