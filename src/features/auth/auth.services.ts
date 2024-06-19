import { createAsyncThunk } from '@reduxjs/toolkit';

import { API_BASE_URL } from '@env';
import { AuthResponse, LoginDto } from './auth.types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_TOKEN_STORAGE_KEY } from '@src/shared/consts/storageKeys';
import { endpoints } from '@src/shared/consts/endpoints';

const { account } = endpoints;

export const login = createAsyncThunk<
  // Return type of the payload creator
  AuthResponse,
  // First argument to the payload creator
  LoginDto
>('auth/login', async (credentials: LoginDto, { dispatch }) => {
  const response = await fetch(`${API_BASE_URL}/${account.login}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(credentials),
  });
  const json = await response.json();

  await AsyncStorage.setItem(AUTH_TOKEN_STORAGE_KEY, 'hi there');
  dispatch(setToken(json.data.token));
  return json.data;
});

export const initAuth = createAsyncThunk(
  'auth/init',
  async (_, { dispatch }) => {
    const token = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
    if (!token) {
      //dispatch(logout());
    }
    return { token };
  },
);

export const authLogout = createAsyncThunk(
  'auth/remove',
  async (_, { dispatch }) => {
    AsyncStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
  },
);

export const setToken = createAsyncThunk<void, string>(
  'auth/set',
  async token => {
    AsyncStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
  },
);
