import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

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
                useGetGameQuery
            } = api