import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import authReducer from '@src/features/auth/auth.slice';
import { reactotron } from '@src/shared/config/reactotron.config';

const enhcnaer = __DEV__ ? [reactotron.createEnhancer!()] : [];

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(enhcnaer),
});
// https://fjolt.com/article/typescript-returntype-utility-type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
