import {createSlice} from '@reduxjs/toolkit';

interface IIsActive {
  isActive: string[] | never;
}

const initialState = {
  isActive: [],
};

const activeFilterSlice = createSlice({
  name: 'activeFilter',
  initialState,
  reducers: {
    setIsActive: (state, action) => {
      state.isActive = action.payload;
    },
  },
});
export const {setIsActive} = activeFilterSlice.actions;

export default activeFilterSlice.reducer;
