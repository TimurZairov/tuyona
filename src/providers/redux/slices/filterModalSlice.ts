import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  filterModal: [],
};

const filterModalSlice = createSlice({
  name: 'filterModal',
  initialState,
  reducers: {
    setFilterModalSlice: (state, action) => {
      state.filterModal = action.payload;
    },
  },
});

export const {setFilterModalSlice} = filterModalSlice.actions;

export default filterModalSlice.reducer;
