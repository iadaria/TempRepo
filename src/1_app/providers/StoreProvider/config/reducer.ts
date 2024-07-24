import { combineReducers } from '@reduxjs/toolkit';
import { settingsReducer } from '@src/1_app/services/msw';

import authReducer from '@src/5_entities/auth/auth.slice';
import { cartReducer } from '@src/5_entities/cart/cart.slice';
import { orderReducer } from '@src/5_entities/order/order.slice';
import { shopReducer } from '@src/5_entities/shop/shop.slice';

export const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  settings: settingsReducer,
  cart: cartReducer,
  order: orderReducer,
});
