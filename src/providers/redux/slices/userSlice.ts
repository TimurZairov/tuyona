import {createSlice} from '@reduxjs/toolkit';
import {loginAction} from '../actions/loginAction';
import {User} from '../../../types/types';
import {registerAction} from '../actions/registerAction';

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
  reducers: {
    logOutUser: state => {
      state.user = null;
    },
  },
  extraReducers: builder => {
    //login
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.error = action.payload;
    });
    //register
    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(registerAction.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const {logOutUser} = userSlice.actions;
export default userSlice.reducer;
