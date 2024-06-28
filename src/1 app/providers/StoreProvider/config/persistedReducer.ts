import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import { rootReducer } from './reducer';

export const persistConfig = {
  key: 'app',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
