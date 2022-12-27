import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice';
import productSlice from './product-slice';

const store = configureStore({
  reducer: { product: productSlice.reducer, cart: cartSlice.reducer },
});

export default store;
