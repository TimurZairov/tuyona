import {createSlice} from '@reduxjs/toolkit';
import {Cart} from '../../../types/types';
import {getCartAction} from '../actions/cartAction';

interface ICart {
  cart: Cart[];
  error: Error | unknown;
}

const initialState: ICart = {
  cart: [],
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCartAction.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(getCartAction.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
