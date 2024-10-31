//Componentes
import { Banner } from "../../containers/Banner";
import { Header } from "../../containers/Header";
import { ListaProdutos } from "../../containers/ListaProdutos";
//Styles
import { Footer } from "../../containers/Footer";

import { ItemGaleria } from '../../components/Galeria/index'
import { useGetEmBreveQuery, useGetPromocoesQuery } from "../../services/api";


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

    const { data: emBreve } = useGetEmBreveQuery();
    const { data: promocoes } = useGetPromocoesQuery();

    if (promocoes && emBreve){
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
    return(
        <h4>Carregando...</h4>
    )
}
