import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@src/features/auth/auth.slice';

export const rootReducer = combineReducers({
  auth: authReducer,
});
