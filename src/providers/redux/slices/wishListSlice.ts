import {createSlice} from '@reduxjs/toolkit';
import {
  addToWishList,
  removeFromWishList,
  wishListAction,
} from '../actions/wishListAction';
import {Service} from '../../../types/types';

interface IInitialState {
  wishList: Service[];
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
    builder.addCase(addToWishList.fulfilled, (state, action) => {
      state.wishList = action.payload;
    });
    builder.addCase(addToWishList.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(removeFromWishList.fulfilled, (state, action) => {
      state.wishList = action.payload;
    });
    builder.addCase(removeFromWishList.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const {} = wishListSlice.actions;

export default wishListSlice.reducer;
