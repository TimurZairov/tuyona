import {createAsyncThunk} from '@reduxjs/toolkit';
import {getMethodApi} from '../../../common/getMethodApi';
import {postMethodApi} from '../../../common/postMethodApi';
import {deleteMethod} from '../../../common/deleteMethodApi';
import {BASE_URL} from '../../../config/config';
//get wishlist
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
//add to wishList
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

//remove from wishList
export const removeFromWishList = createAsyncThunk(
  'removeItem/wishList',
  async ({id, token}: {id: string; token: string}) => {
    const response = await postMethodApi(`/wishlist/`, id, token);
    if (!response) {
      throw new Error('Что то пошло не так...');
    }

    return response;
  },
);
