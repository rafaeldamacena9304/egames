//Componentes
import { Header } from "../../containers/Header";
import { ListaProdutos } from "../../containers/ListaProdutos";
import { Footer } from "../../containers/Footer";
//Classes
import { Game } from "../../models/Game";
//Imagens
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
//Styles
import styles from '../../globalStyle.module.css';



const gamesPromocao: Game[] = [
    {
        id:1,
        categoria:'Ação',
        descricao:'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom, lançado originalmente para... ',
        titulo:'Resident Evil 4',
        sistema: 'Windows, PS5',
        infos: ['-10%', 'R$250,00'],
        imagem: resident
    },
    {
        id:2,
        categoria:'Ação',
        descricao:'Trilhe seu próprio caminho nas terras corrompidas de Santuário nesse RPG de ação e fantasia sombria aclamado pela crítica. Explore um mundo aberto corrompido e repleto de missões envolventes...',
        titulo:'Diablo 4',
        sistema: 'Windows, PS4',
        infos: ['-70%', 'R$24,90'],
        imagem: diablo
    },
    {
        id:3,
        categoria:'Aventura',
        descricao:'Survivor™ se passa cinco anos após os acontecimentos de STAR WARS Jedi: Fallen Order™. Cal deve estar sempre um passo à frente da perseguição constante do Império enquanto carrega o fardo...',
        titulo:'Star Wars',
        sistema: 'PS4, PS5',
        infos: ['-20%', 'R$75,00'],
        imagem: starWars
    },
    {
        id:4,
        categoria:'Ação',
        descricao:'É o décimo nono título da série The Legend of Zelda e foi lançado mundialmente para Wii U e Nintendo Switch em 3 de março de 2017. A história segue Link, que acorda em uma Hyrule devastada...',
        titulo:'Zelda',
        sistema: 'Nintendo Switch',
        infos: ['-35%', 'R$89,90'],
        imagem: zelda
    }
]
const gamesEmBreve: Game[] = [
    {
        id:1,
        categoria:'Ação',
        descricao:'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom, lançado originalmente para... ',
        titulo:'Resident Evil 4',
        sistema: 'Windows, PS5',
        infos: ['-10%', 'R$250,00'],
        imagem: resident
    },
    {
        id:2,
        categoria:'Ação',
        descricao:'Trilhe seu próprio caminho nas terras corrompidas de Santuário nesse RPG de ação e fantasia sombria aclamado pela crítica. Explore um mundo aberto corrompido e repleto de missões envolventes...',
        titulo:'Diablo 4',
        sistema: 'Windows, PS4',
        infos: ['-70%', 'R$24,90'],
        imagem: diablo
    },
    {
        id:3,
        categoria:'Aventura',
        descricao:'Survivor™ se passa cinco anos após os acontecimentos de STAR WARS Jedi: Fallen Order™. Cal deve estar sempre um passo à frente da perseguição constante do Império enquanto carrega o fardo...',
        titulo:'Star Wars',
        sistema: 'PS4, PS5',
        infos: ['-20%', 'R$75,00'],
        imagem: starWars
    },
    {
        id:4,
        categoria:'Ação',
        descricao:'É o décimo nono título da série The Legend of Zelda e foi lançado mundialmente para Wii U e Nintendo Switch em 3 de março de 2017. A história segue Link, que acorda em uma Hyrule devastada...',
        titulo:'Zelda',
        sistema: 'Nintendo Switch',
        infos: ['-35%', 'R$89,90'],
        imagem: zelda
    }
]



export const Categorias = () => (
    <>
        <div className={styles.container}>
            <Header/>
        </div>
        <ListaProdutos games={gamesPromocao} titulo="Ação" backgroundColor="cinza"/>
        <ListaProdutos games={gamesEmBreve} titulo="RPG" backgroundColor="preto"/>
        <ListaProdutos games={gamesPromocao} titulo="Aventura" backgroundColor="cinza"/>
        <ListaProdutos games={gamesEmBreve} titulo="TPS" backgroundColor="preto"/>
        <Footer/>
    </>
)