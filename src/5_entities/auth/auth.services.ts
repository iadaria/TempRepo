import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthResponse, LoginDto } from './auth.types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_TOKEN_STORAGE_KEY } from '@src/6_shared/consts/storageKeys';
import { endpoints } from '@src/6_shared/consts/endpoints';
import { request } from '@src/6_shared/lib/api/request';

const { account } = endpoints;

export const login = createAsyncThunk<
  // Return type of the payload creator
  AuthResponse,
  // First argument to the payload creator
  LoginDto
>('auth/login', async (credentials: LoginDto, { dispatch }) => {
  const endpoint = account.login;
  const method = 'post';
  const body = JSON.stringify(credentials);

  const response = await request({ endpoint, method, body });
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
