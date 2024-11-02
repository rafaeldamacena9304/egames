//Dependencias
import { useGetGameQuery } from "../../services/api"
import { useParams } from "react-router-dom"

//Componentes
import { Galeria } from "../../components/Galeria"
import { Hero } from "../../components/Hero"
import { Section } from "../../components/Section"
import { Header } from "../../components/Header"

export const ProdutoPage = () => {
    const { id } = useParams()

    const {data:game, } = useGetGameQuery(id!)

    if (!game) {
        return <h3>Carregando...</h3>
    }

    return(
        <>
            <div className="container">
                <Header/>
            </div>
            <Hero game={game}/>
            <Section titulo="Sobre o jogo" $backgroundColor="preto">
                <p>{game.description}</p>
            </Section>
            <Section titulo="Mais detalhes" $backgroundColor="cinza">
                <p>
                    <b>Plataforma</b>: {game.details.system} <br />
                    <b>Desenvolvedor</b>: {game.details.developer} <br />
                    <b>Editora</b>: {game.details.publisher} <br />
                    <b>Idiomas</b>: {game.details.languages.join(', ')}
                </p>
            </Section>
            <Section titulo="Galeria" $backgroundColor="preto">
                <Galeria nome={game.name} capaPadrao={game.media.cover} itens={game.media.gallery}/>
            </Section>
        </>
    )
}