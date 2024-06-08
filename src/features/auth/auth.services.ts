import { createAsyncThunk } from '@reduxjs/toolkit';

import { API_BASE_URL } from '@env';
import { AuthResponse, LoginDto } from './auth.types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from './auth.slice';
import { AUTH_TOKEN_STORAGE_KEY } from '@src/shared/consts/storageKeys';

export const login = createAsyncThunk<
  // Return type of the payload creator
  AuthResponse,
  // First argument to the payload creator
  LoginDto
>('auth/login', async (credentials: LoginDto) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(credentials),
  });
  const user = await response.json();
  console.log({ user });
  return user.data;
});

export const initAuth = createAsyncThunk(
  'auth/init',
  async (_, { dispatch }) => {
    const token = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
    if (!token) {
      dispatch(logout());
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
