import Toast from 'react-native-toast-message';
import {authApiController} from './../../../controllers/authController/authApiController';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {getUser} from '../../../common/getUserApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch, SetStateAction} from 'react';
import {User} from '../../../types/types';

export interface ILoginAction {
  data: {
    username: string;
    password: string;
  };
  setAccessToken: Dispatch<SetStateAction<string | null>>;
}

interface CustomError extends Error {
  message: string;
}

export const loginAction = createAsyncThunk(
  'user/login',
  async ({data, setAccessToken}: ILoginAction, {rejectWithValue}) => {
    try {
      const token = await authApiController('/users/login/', 'post', data);

      if (!token?.access) {
        Toast.show({
          type: 'error',
          text1: 'Ошибка',
          text2: 'Неверный логин или пароль!',
        });
        return;
      }
      const user: User | undefined = await getUser(token.access);

      await AsyncStorage.setItem('refreshToken', token.refresh);
      setAccessToken(token.access);
      return user;
    } catch (error) {
      const customError = error as CustomError;
      console.log('login user', customError.message);
      return rejectWithValue(customError.message);
    }
  },
);
