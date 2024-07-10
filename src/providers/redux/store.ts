import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import wishListSlice from './slices/wishListSlice';
import cartSlice from './slices/cartSlice';
import servicesSLices from './slices/servicesSLices';

export const store = configureStore({
  reducer: {
    user: userSlice,
    wishList: wishListSlice,
    cart: cartSlice,
    services: servicesSLices,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
