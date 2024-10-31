//Dependencias
import { useState } from 'react'

//Estilo
import * as style from './styles'

//Imagens
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import close from '../../assets/images/close.png'


interface GaleriaProps{
    capaPadrao: string
    nome: string
    itens: ItemGaleria[]
}

export interface ItemGaleria {
    type: "image" | "video"
    url: string
}

interface PopupState {
    type: "image" | "video"
    url: string
    isVisible: boolean
}



export const Galeria = (props: GaleriaProps) => {


    const [Popup, setPopup] = useState<PopupState>({
        isVisible: false,
        type: "image",
        url: '',
    })

    const getMediaCover = (item: ItemGaleria) => {
        if (item.type === "image") return item.url;
        return props.capaPadrao
    }

    const getMediaIcon = (item: ItemGaleria) => {
        if (item.type === "image") return zoom;
        return play
    }
    
    return(
        <>
        {Popup.isVisible ? 
            <>
            <style.Popup onClick={() => setPopup({
                isVisible: false,
                type: 'image',
                url:''
            })}>
                <style.PopupContent>
                    <style.PopupHeader className='header'>
                        <h4>{props.nome}</h4>
                        <img onClick={() => setPopup({
                            isVisible: false,
                            type: 'image',
                            url:''
                        }) } src={close} alt="" />
                    </style.PopupHeader>
                    {Popup.type === 'image' ?
                        (<img src={Popup.url} alt=""/>) :
                        // eslint-disable-next-line
                        <iframe src={Popup.url} title=""/>  }
                </style.PopupContent>
            </style.Popup>
            </>
            :
            <></>
        }

            <style.Galeria>
                {props.itens.map((media, index) => (
                    <style.Item onClick={( ) => setPopup({
                                                    isVisible: true, 
                                                    type:media.type, 
                                                    url:media.url
                                                        })} 
                                                    key={media.url}>

                        <img src={getMediaCover(media)} alt={`Midia ${index + 1} de ${props.nome}`} />
                        <style.ActionContainer>
                            <img src={getMediaIcon(media)} alt="" />
                        </style.ActionContainer>
                    </style.Item>
                ))}
            </style.Galeria>
        </>
    )
}