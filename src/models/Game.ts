export class Game {
    id: number
    categoria: string
    descricao: string
    imagem:string
    infos: string[]
    sistema:string
    titulo:string

    constructor(
        id:number, 
        categoria:string, 
        descricao: string, 
        imagem:string, 
        infos:string[], 
        sistema:string, 
        titulo:string)
    {
        this.id = id,
        this.categoria = categoria
        this.descricao = descricao
        this.imagem = imagem
        this.infos = infos
        this.sistema = sistema
        this.titulo = titulo
    }
}