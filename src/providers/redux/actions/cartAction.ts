import {createAsyncThunk} from '@reduxjs/toolkit';
import {getMethodApi} from '../../../common/getMethodApi';

export const getCart = createAsyncThunk(
  'getCart/cart',
  async ({
    accessToken,
    language = 'ru',
  }: {
    accessToken: string;
    language: string;
  }) => {
    const cart = await getMethodApi('/cart/', language, accessToken);

    console.log(cart);
    if (!cart) {
      throw new Error('Что то пошло не так...');
    }
    console.log(cart);
    return cart;
  },
);
