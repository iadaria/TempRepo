import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../../../features/counterOld/CounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
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
