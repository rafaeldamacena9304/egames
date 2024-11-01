//Dependencias
import { useGetJogoDestaqueQuery } from '../../services/api'

//Componentes
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'

//Estilos
import * as style from './styles'


export const Banner = () => {

    const { data: currentGame } = useGetJogoDestaqueQuery()
    
    const formatarPreco = (preco: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(preco)
    }

    if (!currentGame) {
        return <h3>Carregando...</h3>
    }

    return(
        <>
        <div className='overlay'></div>
        <style.Banner style={{ backgroundImage: `url(${currentGame?.media.cover})` }}>
            <div className="container">
                <Tag size='big'>Destaque do dia</Tag>
                <div>
                    <style.Titulo>{currentGame?.name}</style.Titulo>
                    <style.Precos>
                        {currentGame?.prices.old && (<>De <s>{formatarPreco(currentGame?.prices.old)}</s> <br/></>)}
                        Por apenas {formatarPreco(currentGame.prices.current ?? 0)}
                    </style.Precos>
                </div>
                <Button $background="transparente" tipo="link" to={`/produto/${currentGame?.id}`} title="Clique para ver esta oferta">
                    Aproveitar
                </Button>
            </div>
        </style.Banner>
        </>
    )
}