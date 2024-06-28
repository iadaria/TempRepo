import { combineReducers } from '@reduxjs/toolkit';
import { settingsReducer } from '@src/1 app/services/msw';
import authReducer from '@src/5_entities/auth/auth.slice';
import { shopReducer } from '@src/5_entities/shop/shop.slice';

export const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  settings: settingsReducer,
});
