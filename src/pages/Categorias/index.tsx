//Componentes
import { Header } from "../../containers/Header";
import { ListaProdutos } from "../../containers/ListaProdutos";
import { Footer } from "../../containers/Footer";
//Classes
import { Game } from "../Home";
import { useEffect, useState } from "react";
//Styles





export const Categorias = () => {
    
    const [acao, setAcao] = useState<Game[]>([])
    const [esportes, setEsportes] = useState<Game[]>([])
    const [simulacao, setSimulacao] = useState<Game[]>([])
    const [rpg, setRpg] = useState<Game[]>([])
    const [luta, setLuta] = useState<Game[]>([])

    useEffect( () => {
        fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
        .then(resposta => resposta.json())
        .then(resposta => setAcao(resposta))
        
        fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
        .then(resposta => resposta.json())
        .then(resposta => setEsportes(resposta))

        fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
        .then(resposta => resposta.json())
        .then(resposta => setSimulacao(resposta))

        fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
        .then(resposta => resposta.json())
        .then(resposta => setRpg(resposta))

        fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
        .then(resposta => resposta.json())
        .then(resposta => setLuta(resposta))
    }, [] )

    return(
        <>
        <div className="container">
            <Header/>
        </div>
        <ListaProdutos games={acao} titulo="Ação" $backgroundColor="cinza"/>
        <ListaProdutos games={esportes} titulo="Esportes" $backgroundColor="preto"/>
        <ListaProdutos games={simulacao} titulo="Simulação" $backgroundColor="cinza"/>
        <ListaProdutos games={rpg} titulo="RPG" $backgroundColor="preto"/>
        <ListaProdutos games={luta} titulo="Luta" $backgroundColor="cinza"/>

        <Footer/>
        </>
    )

}