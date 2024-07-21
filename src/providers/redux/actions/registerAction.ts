import {createAsyncThunk} from '@reduxjs/toolkit';
import {authApiController} from '../../../controllers/authController/authApiController';
import Toast from 'react-native-toast-message';
import {getUser} from '../../../common/getUserApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch, SetStateAction} from 'react';
import {User} from '../../../types/types';

interface IRegisterAction {
  data: {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    password2: string;
  };
  setAccessToken: Dispatch<SetStateAction<string | null>>;
}

export const registerAction = createAsyncThunk(
  'register/user',
  async ({data, setAccessToken}: IRegisterAction) => {
    try {
      const token = await authApiController('/users/register/', 'POST', data);
      if (!token?.tokens?.access) {
        Toast.show({
          type: 'error',
          text1: 'Ошибка',
          text2: token?.username,
        });
        return;
      }

      const user: User | undefined = await getUser(token.access);

      await AsyncStorage.setItem('refreshToken', token?.tokens?.refresh);
      setAccessToken(token?.tokens?.access);
      return user;
    } catch (error) {
      console.log('register user', error);
      return error;
    }
  },
);
