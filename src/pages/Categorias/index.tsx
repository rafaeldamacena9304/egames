//Componentes
import { Header } from "../../containers/Header";
import { ListaProdutos } from "../../containers/ListaProdutos";
import { Footer } from "../../containers/Footer";
//Classes
import { useGetActionGamesQuery, useGetEsportesGamesQuery, useGetLutaGamesQuery, useGetRpgGamesQuery, useGetSimulacaoGamesQuery } from "../../services/api";
//Styles





export const Categorias = () => {
    
    const { data: acao } = useGetActionGamesQuery();
    const { data: esportes } = useGetEsportesGamesQuery();
    const { data: simulacao } = useGetSimulacaoGamesQuery();
    const { data: rpg } = useGetRpgGamesQuery();
    const { data: luta } = useGetLutaGamesQuery();


    if (acao && esportes && simulacao && rpg && luta){
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
    return <h4>Carregando...</h4>
    

}