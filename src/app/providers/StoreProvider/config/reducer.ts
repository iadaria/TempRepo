import { combineReducers } from '@reduxjs/toolkit';
import { settingsReducer } from '@src/app/services/msw';
import authReducer from '@src/features/auth/auth.slice';
import { shopReducer } from '@src/features/shop/shop.slice';

export const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  settings: settingsReducer,
});
