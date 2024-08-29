import {createSlice} from '@reduxjs/toolkit';
import {Providers, Service} from '../../../types/types';
import {getServices} from '../actions/servicesProvider';

interface IInitialSate {
  serviceProvider: Service[];
  error: Error | unknown;
}

const initialState: IInitialSate = {
  serviceProvider: [],
  error: null,
};

const serviceProviderSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setFilteredItems: (state, action) => {
      state.serviceProvider = action.payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(getServices.fulfilled, (state, action) => {
      state.serviceProvider = action.payload.results;
    });
    builder.addCase(getServices.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const {setFilteredItems} = serviceProviderSlice.actions;

export default serviceProviderSlice.reducer;
