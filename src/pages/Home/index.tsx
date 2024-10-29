//Componentes
import { Banner } from "../../containers/Banner";
import { Header } from "../../containers/Header";
import { ListaProdutos } from "../../containers/ListaProdutos";
//Styles
import { Footer } from "../../containers/Footer";
import { useEffect, useState } from "react";

import { ItemGaleria } from '../../components/Galeria/index'


export interface Game {
    id:number
    name:string
    description: string
    release_date?: string
    prices: {
        discount?: number
        old?: number
        current?: number
    }
    details: {
        category: string
        system: string
        developer: string
        publisher: string
        languages:string[]
    },
    media: {
        thumbnail: string
        cover: string
        gallery: ItemGaleria[]
    }
}

export const Home = () => {

    const [ promocoes, setPromocoes ] = useState<Game[]>([])
    const [ emBreve, setEmbreve ] = useState<Game[]>([])

    useEffect( () => {
        fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
        .then(resposta => resposta.json())
        .then(resposta => setPromocoes(resposta))

        fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
        .then(resposta => resposta.json())
        .then(resposta => setEmbreve(resposta))
    }, [] )

    return(
        <>
        <div className="container">
        <Header/>
        </div>
        <Banner/>
        <ListaProdutos games={promocoes} titulo="Promoções" $backgroundColor="cinza"/>
        <ListaProdutos games={emBreve} titulo="Em breve" $backgroundColor="preto"/>
        <Footer/>
        </>
    )


}
