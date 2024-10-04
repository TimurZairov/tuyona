import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../../../config/config';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  // refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ['WishList', 'ServiceProvider'],
  endpoints: builder => ({
    categories: builder.query({
      query: (language = 'ru') => {
        return {
          url: '/provider-categories/',
          method: 'Get',
          params: {lang: language},
        };
      },
    }),
    homeData: builder.query({
      query: (language = 'ru') => {
        return {
          url: '/homepage/',
          method: 'Get',
          params: {lang: language},
        };
      },
    }),
    advBanners: builder.query({
      query: () => {
        return {url: '/banners/', method: 'Get'};
      },
    }),
  }),
});

export const {useHomeDataQuery, useAdvBannersQuery, useCategoriesQuery} =
  apiSlice;
