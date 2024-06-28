import { combineReducers } from '@reduxjs/toolkit';
import { settingsReducer } from '@src/app/services/msw';
import authReducer from '@src/5 entities/auth/auth.slice';
import { shopReducer } from '@src/5 entities/shop/shop.slice';

export const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  settings: settingsReducer,
});
