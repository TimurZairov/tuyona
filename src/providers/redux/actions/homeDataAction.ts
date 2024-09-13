import {getMethodApi} from './../../../common/getMethodApi';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const homeDataAction = createAsyncThunk(
  'getHomeData',
  async ({
    endpoint,
    language,
    token,
  }: {
    endpoint: string;
    language: string;
    token: string | unknown;
  }) => {
    const response = await getMethodApi(endpoint, language, token);
    if (!response) {
      throw new Error('Jщибка');
    }

    return response.categories;
  },
);
