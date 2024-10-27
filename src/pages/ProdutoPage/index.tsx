import { useParams } from "react-router-dom"
import { Hero } from "../../components/Hero"


export const ProdutoPage = () => {
    const game = useParams()

    return(
        <>
            <Hero/>
        </>
    )
}