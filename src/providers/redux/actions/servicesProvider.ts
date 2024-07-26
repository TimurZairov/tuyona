import {createAsyncThunk} from '@reduxjs/toolkit';
import {getMethodApi} from '../../../common/getMethodApi';

export const getServices = createAsyncThunk(
  'get/serviceProvider',
  async ({language = 'ru'}: {language: string}) => {
    try {
      const result = await getMethodApi('/service-providers/', language);
      if (!result) {
        throw new Error('Что то пошло не так попробуйте позже...');
      }
      return result;
    } catch (error) {
      console.log('get serviceProvider', error);
    }
  },
);
