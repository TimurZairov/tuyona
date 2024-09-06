import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  categoryListItems: [],
};

const categoryListSlice = createSlice({
  name: 'categoryList',
  initialState,
  reducers: {
    setCategoryListItems: (state, action) => {
      state.categoryListItems = action.payload;
    },
  },
});

export const {setCategoryListItems} = categoryListSlice.actions;

export default categoryListSlice.reducer;
