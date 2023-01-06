import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import uiSlice from './uiSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    ui: uiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
