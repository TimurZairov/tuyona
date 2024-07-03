import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  wishList: [],
  error: null,
};

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {},
});

export const {} = wishListSlice.actions;

export default wishListSlice.reducer;
