import {authApiController} from './../../../controllers/authController/authApiController';
import {createAsyncThunk} from '@reduxjs/toolkit';

interface ILoginAction {
  endpoint: string;
  method: string;
  userData: {
    username: string;
    password: string;
  };
}

export const loginAction = createAsyncThunk(
  'user/login',
  async ({endpoint, method, userData}: ILoginAction, {rejectWithValue}) => {
    const user = await authApiController(endpoint, method, userData);

    if (!user) {
      rejectWithValue('User is not found');
    }
    console.log(user);
    return user;
  },
);
