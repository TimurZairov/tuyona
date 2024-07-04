import Toast from 'react-native-toast-message';
import {authApiController} from './../../../controllers/authController/authApiController';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {getUser} from '../../../common/getUserApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppContext} from '../../context/context';
import {Dispatch, SetStateAction} from 'react';

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
      const user = await getUser(token.access);
      await AsyncStorage.setItem('refreshToken', token.refresh);
      setAccessToken(token.access);
      return user;
    } catch (error) {
      const customError = error as CustomError;
      return rejectWithValue(customError.message);
    }
  },
);
