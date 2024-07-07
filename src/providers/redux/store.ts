import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import wishListSlice from './slices/wishListSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    wishList: wishListSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;