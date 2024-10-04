import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import userSlice from './slices/userSlice';
import wishListSlice from './slices/wishListSlice';
import cartSlice from './slices/cartSlice';

import serviceProviderSlice from './slices/serviceProviderSlice';
import categoryLIstSlice from './slices/categoryLIstSlice';
import filterModalSlice from './slices/filterModalSlice';
import activeFilterSlice from './slices/activeFilterSlice';
import {apiSlice} from './slices/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userSlice,
    wishList: wishListSlice,
    cart: cartSlice,
    serviceProvider: serviceProviderSlice,
    categoryListItems: categoryLIstSlice,
    filterModal: filterModalSlice,
    isActive: activeFilterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
