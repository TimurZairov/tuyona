import {createSlice} from '@reduxjs/toolkit';
import {homeDataAction} from '../actions/homeDataAction';

const initialState = {
  homeData: [],
  error: Error,
};

const homeScreenDataSlice = createSlice({
  name: 'homeData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(homeDataAction.fulfilled, (state, action) => {
      state.homeData = action.payload;
    });
    builder.addCase(homeDataAction.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default homeScreenDataSlice.reducer;
