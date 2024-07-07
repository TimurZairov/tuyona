import {createSlice} from '@reduxjs/toolkit';
import {wishListAction} from '../actions/wishListAction';
import {WishList} from '../../../types/types';

interface IInitialState {
  wishList: WishList[];
  error: Error | unknown;
}

const initialState: IInitialState = {
  wishList: [],
  error: null,
};

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(wishListAction.fulfilled, (state, action) => {
      state.wishList = action.payload;
    });
    builder.addCase(wishListAction.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const {} = wishListSlice.actions;

export default wishListSlice.reducer;
