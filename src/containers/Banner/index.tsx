import * as style from './styles'
import styles from '../../globalStyle.module.css'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

export const Banner = () => {
    
    return(
        <style.Banner>
            <div className={styles.container}>
                <Tag size='big'>Destaque do dia</Tag>
                <div>
                    <style.Titulo>Marvel's Spider-Man: Miles Morales PS4 & PS5</style.Titulo>
                    <style.Precos>
                        De <s>R$250,00</s> <br/>
                        Por apenas R$99,90
                    </style.Precos>
                </div>
                <Button tipo="link" to="/produto" title="Clique para ver esta oferta">
                    Aproveitar
                </Button>
            </div>
        </style.Banner>
    )
}