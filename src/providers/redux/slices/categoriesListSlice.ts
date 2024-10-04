import {generateQueryParams} from '../../../common/helpers/generateQueryParams';
import {apiSlice} from './apiSlice';

export const categoriesListSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    providersList: builder.query({
      query: ({id, language = 'ru', token, isHome, params = {}}) => {
        let initParams = {
          category: id,
          ...params,
        };
        if (isHome) {
          initParams['is_home'] = 1;
        }
        const queryParams = generateQueryParams(initParams);
        return {
          url: `/service-providers/${queryParams}`,
          method: 'Get',
          params: {lang: language},
          headers: {
            Authorization: token ? 'Bearer ' + token : '',
          },
        };
      },

      providesTags: result => {
        return result
          ? [
              ...result?.results.map(({id}) => ({
                type: 'ServiceProvider',
                id,
              })),
              {type: 'ServiceProvider', id: 'LIST'},
            ]
          : [{type: 'ServiceProvider', id: 'LIST'}];
      },
    }),
  }),
  overrideExisting: true,
});

export const {useProvidersListQuery} = categoriesListSlice;
