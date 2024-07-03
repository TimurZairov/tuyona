import {createAsyncThunk} from '@reduxjs/toolkit';
import {authApiController} from '../../../controllers/authController/authApiController';

interface IRegisterAction {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  password2: string;
}

export const registerAction = createAsyncThunk(
  'register/user',
  async (data: IRegisterAction) => {
    try {
      const user = await authApiController('/users/register/', 'POST', data);
      return user;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);
