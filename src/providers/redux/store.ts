import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import wishListSlice from './slices/wishListSlice';
import cartSlice from './slices/cartSlice';

import bannerSlice from './slices/bannersSlice';
import serviceProviderSlice from './slices/serviceProviderSlice';
import homeScreenDataSlice from './slices/homeScreenDataSlice';
import categoryLIstSlice from './slices/categoryLIstSlice';
import filterModalSlice from './slices/filterModalSlice';
import activeFilterSlice from './slices/activeFilterSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    wishList: wishListSlice,
    cart: cartSlice,
    serviceProvider: serviceProviderSlice,
    banners: bannerSlice,
    homeData: homeScreenDataSlice,
    categoryListItems: categoryLIstSlice,
    filterModal: filterModalSlice,
    isActive: activeFilterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false, //dev
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
