import { Galeria } from "../../components/Galeria"
import { Hero } from "../../components/Hero"
import { Section } from "../../containers/Section"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Game } from "../Home"

export const ProdutoPage = () => {
    const { id } = useParams()

    const [game, setGame] = useState<Game>()

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
        .then(resposta => resposta.json())
        .then(resposta => setGame(resposta))
    }, [id])

    if (!game) {
        return <h3>Carregando...</h3>
    }

    return(
        <>
            <Hero game={game}/>
            <Section titulo="Sobre o jogo" backgroundColor="preto">
                <p>{game.description}</p>
            </Section>
            <Section titulo="Mais detalhes" backgroundColor="cinza">
                <p>
                    <b>Plataforma</b>: {game.details.system} <br />
                    <b>Desenvolvedor</b>: {game.details.developer} <br />
                    <b>Editora</b>: {game.details.publisher} <br />
                    <b>Idiomas</b>: {game.details.languages.join(', ')}
                </p>
            </Section>
            <Section titulo="Galeria" backgroundColor="preto">
                <Galeria nome={game.name} capaPadrao={game.media.cover} itens={game.media.gallery}/>
            </Section>
        </>
    )
}