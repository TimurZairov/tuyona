import {createAsyncThunk} from '@reduxjs/toolkit';
import {getMethodApi} from '../../../common/getMethodApi';
import {postMethodApi} from '../../../common/postMethodApi';
//get cart items
export const getCartAction = createAsyncThunk(
  'getCart/cart',
  async ({
    accessToken,
    language = 'ru',
  }: {
    accessToken: string;
    language: string;
  }) => {
    const cart = await getMethodApi('/cart/', language, accessToken);

    if (!cart) {
      throw new Error('Что то пошло не так...');
    }

    return cart;
  },
);
//add to cart item
export const addToCartAction = createAsyncThunk(
  'addToCart/cart',
  async ({token, data}: {token: string; data: Object}) => {
    const result = await postMethodApi('/cart/', data, token);
    if (!result) {
      throw new Error('Что то пошло не так...');
    }

    return await result;
  },
);
