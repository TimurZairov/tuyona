import {createAsyncThunk} from '@reduxjs/toolkit';
import {getMethodApi} from '../../../common/getMethodApi';

export const bannerAction = createAsyncThunk(
  'getBanner/banner',
  async ({language = 'ru'}: {language: string}) => {
    const banners = await getMethodApi('/banners/', language);
    if (!banners) {
      throw new Error('Что то пошло не так...');
    }
    console.log(banners);
    return banners;
  },
);
