import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

interface Produto {
    id: number
    preco: number
}

interface PurchasePayload {
    products: Produto[]
    billing: {
        name: string
        email:string
        document:string
    },
    delivery: {
        email:string
    },
    payment: {
        card: {
            active: boolean
            owner?: {
                name:string
                document:string
            }
            name?:string
            number?: string
            expires?: {
                month:number
                year:number
            }
            code?: number
        }
        installments: number
    }
}

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
    }),
    endpoints: (builder) => ({
        getJogoDestaque: builder.query<Game, void>({
            query: () => 'destaque'
        }),
        getPromocoes: builder.query<Game[], void>({
            query: () => 'promocoes'
        }),
        getEmBreve: builder.query<Game[], void>({
            query: () => 'em-breve'
        })
        ,
        getActionGames: builder.query<Game[], void>({
            query: () => 'acao'
        })
        ,
        getEsportesGames: builder.query<Game[], void>({
            query: () => 'esportes'
        })
        ,
        getSimulacaoGames: builder.query<Game[], void>({
            query: () => 'simulacao'
        })
        ,
        getRpgGames: builder.query<Game[], void>({
            query: () => 'rpg'
        })
        ,
        getLutaGames: builder.query<Game[], void>({
            query: () => 'luta'
        }),
        getGame: builder.query<Game, string>({
            query: (id) => `jogos/${id}`
        }),
        purchase: builder.mutation<any,PurchasePayload>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body: body
            })
        })
    })
})

export const {  useGetJogoDestaqueQuery, 
                useGetEmBreveQuery, 
                useGetPromocoesQuery,
                useGetActionGamesQuery,
                useGetEsportesGamesQuery,
                useGetLutaGamesQuery,
                useGetRpgGamesQuery,
                useGetSimulacaoGamesQuery,
                useGetGameQuery, usePurchaseMutation
            } = api