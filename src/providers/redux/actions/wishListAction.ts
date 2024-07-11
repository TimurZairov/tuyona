import {createAsyncThunk} from '@reduxjs/toolkit';
import {getMethodApi} from '../../../common/getMethodApi';
import {postMethodApi} from '../../../common/postMethodApi';

export const wishListAction = createAsyncThunk(
  'getWishList/user',
  async ({
    accessToken,
    language = 'ru',
  }: {
    accessToken: string;
    language: string;
  }) => {
    const wishList = await getMethodApi('/wishlist/', language, accessToken);
    if (!wishList) {
      throw new Error('Что то пошло не так...');
    }
    return wishList;
  },
);

export const addToWishList = createAsyncThunk(
  'addToWishList/user',
  async ({data, token}: {data: Object; token: string}) => {
    const wishList = await postMethodApi('/wishlist/', data, token);
    if (!wishList) {
      throw new Error('Что то пошло не так...');
    }
    return wishList;
  },
);
