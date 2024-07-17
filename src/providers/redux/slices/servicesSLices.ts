import {createSlice} from '@reduxjs/toolkit';
import {Service} from '../../../types/types';
import {getServices} from '../actions/servicesAction';

interface IInitialSate {
  services: Service[];
  error: Error | unknown;
}

const initialState: IInitialSate = {
  services: [],
  error: null,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setFilteredItems: (state, action) => {
      state.services = action.payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(getServices.fulfilled, (state, action) => {
      state.services = action.payload.results;
    });
  },
});

export const {setFilteredItems} = servicesSlice.actions;

export default servicesSlice.reducer;
