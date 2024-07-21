import {createSlice} from '@reduxjs/toolkit';
import {bannerAction} from '../actions/bannerAction';
import {Banner} from '../../../types/types';

interface IInitialState {
  banners: Banner[];
  error: Error | unknown;
}

const initialState: IInitialState = {
  banners: [],
  error: null,
};

const bannerSlice = createSlice({
  name: 'banners',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(bannerAction.fulfilled, (state, action) => {
      state.banners = action.payload.results;
    });
    builder.addCase(bannerAction.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const {} = bannerSlice.actions;

export default bannerSlice.reducer;
