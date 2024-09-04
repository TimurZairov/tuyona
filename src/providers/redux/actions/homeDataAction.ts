import {getMethodApi} from './../../../common/getMethodApi';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const homeDataAction = createAsyncThunk(
  'getHomeData',
  async ({endpoint, language}: {endpoint: string; language: string}) => {
    const response = await getMethodApi(endpoint, language);
    if (!response) {
      throw new Error('Jщибка');
    }

    return response.categories;
  },
);
