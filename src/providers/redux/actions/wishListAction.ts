import {createAsyncThunk} from '@reduxjs/toolkit';
import {getMethodApi} from '../../../common/getMethodApi';

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
