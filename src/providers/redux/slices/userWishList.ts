import {apiSlice} from './apiSlice';

export const userSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    wishList: builder.query({
      query: ({token, language}) => {
        return {
          url: `/wishlist/`,
          method: 'Get',
          params: {lang: language},
          headers: {
            Authorization: 'Bearer ' + token,
          },
        };
      },
      providesTags: ['WishList'],
    }),
    addToWishList: builder.mutation({
      query: ({id, token}) => {
        return {
          url: `/wishlist/`,
          method: 'Post',
          headers: {
            Authorization: 'Bearer ' + token,
          },
          body: {service_provider: id},
        };
      },
      invalidatesTags: [{type: 'ServiceProvider', id: 'LIST'}, 'WishList'],
      //   invalidatesTags: (result, error, {id}) => {
      //     return [{type: 'Service_provider', id}];
      //   },
    }),
  }),

  overrideExisting: true,
});

export const {useAddToWishListMutation, useWishListQuery} = userSlice;
