import {createAsyncThunk} from '@reduxjs/toolkit';
import {User} from '../../../types/types';
import {BASE_URL} from '../../../config/config';
import Toast from 'react-native-toast-message';
import {getUser} from '../../../common/getUserApi';

interface IData {
  first_name: string | undefined;
  last_name: string | undefined;
  phone_number: string | undefined;
}

export const userEdit = createAsyncThunk(
  'editUser/ user',
  async ({data, token}: {data: IData; token: string}) => {
    console.log(data);
    try {
      const result = await fetch(BASE_URL + '/users/me/', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(data),
      });

      if (!result) {
        throw new Error('Что то пошло не так');
      }

      await result.json();
      Toast.show({
        type: 'success',
        text1: 'Успешно',
        text2: 'Ваши данные успешно изменены',
      });

      const user = await getUser(token);
      return user;
    } catch (error) {
      console.log('userAction | edit data', error);
    }
  },
);
