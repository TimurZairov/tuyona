import {createAsyncThunk} from '@reduxjs/toolkit';
import {getMethodApi} from '../../../common/getMethodApi';
import {BASE_URL} from '../../../config/config';

export const getServices = createAsyncThunk(
  'get/services',
  async ({language = 'ru'}: {language: string}) => {
    try {
      const result = await getMethodApi('/services/', language);
      if (!result) {
        throw new Error('Что то пошло не так попробуйте позже...');
      }
      return result;
    } catch (error) {
      console.log('get services', error);
    }
  },
);
