import * as style from './styles'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { Game } from '../../pages/Home'
import { useEffect, useState } from 'react'

export const Banner = () => {
    
    const [currentGame, setCurrentGame] = useState<Game>();
    
    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
        .then(resposta => resposta.json())
        .then(resposta => setCurrentGame(resposta))
    }, [])

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
                        De <s>R${currentGame?.prices.old}</s> <br/>
                        Por apenas R${currentGame?.prices.current}
                    </style.Precos>
                </div>
                <Button tipo="link" to={`/produto/${currentGame?.id}`} title="Clique para ver esta oferta">
                    Aproveitar
                </Button>
            </div>
        </style.Banner>
        </>
    )
}