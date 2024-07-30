import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Game } from '../pages/Home';

type Products = {
  id: number;
  price: number;
};

type PurchasePayload = {
  products: Products[];
  billing: {
    name: string;
    email: string;
    document: string;
  };
  delivery: {
    email: string;
  };
  payment: {
    card: {
      active: boolean;
      owner?: {
        name: string;
        document: string;
      };
      name?: string;
      number?: string;
      expires?: {
        month: string;
        year: string;
      };
      code?: number;
    };
    installments: number;
  };
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay',
  }),
  endpoints: (builder) => ({
    getPromotionGames: builder.query<Game[], void>({
      query: () => 'promocoes',
    }),
    getUpcomingGames: builder.query<Game[], void>({
      query: () => 'em-breve',
    }),
    getDestaque: builder.query<Game, void>({
      query: () => 'destaque',
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao',
    }),
    getSportGames: builder.query<Game[], void>({
      query: () => 'esportes',
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => 'simulacao',
    }),
    getFightGames: builder.query<Game[], void>({
      query: () => 'luta',
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => 'rpg',
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`,
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetPromotionGamesQuery,
  useGetUpcomingGamesQuery,
  useGetDestaqueQuery,
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetGameQuery,
  usePurchaseMutation,
} = api;
export default api;
