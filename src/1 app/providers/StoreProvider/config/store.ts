import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { reactotron } from '@src/shared/config/reactotron.config';
import { persistedReducer } from './persistedReducer';
import { persistStore } from 'redux-persist';

const enhcnaer = __DEV__ ? [reactotron.createEnhancer!()] : [];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(enhcnaer),
});

export const persistor = persistStore(store);
// https://fjolt.com/article/typescript-returntype-utility-type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
