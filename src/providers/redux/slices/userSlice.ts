import {createSlice} from '@reduxjs/toolkit';
import {loginAction} from '../actions/loginAction';
import {ActionSheetIOS} from 'react-native';
import {User} from '../../../types/types';

interface IInitialState {
  user: User | unknown;
  error: Error | unknown;
}

const initialState: IInitialState = {
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
