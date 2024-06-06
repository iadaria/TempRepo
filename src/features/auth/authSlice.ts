import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@src/app/providers/StoreProvider/config/store';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type LoginDto = {
  email: string;
  password: string;
};

export type AuthResponse = {
  user: User;
  token: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

export const loginAsync = createAsyncThunk<
  // Return type of the payload creator
  AuthResponse,
  // First argument to the payload creator
  LoginDto
>('auth/login', async (credentials: LoginDto) => {
  console.log('auth/login');
  const response = await fetch('/login', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(credentials),
  });
  const user = await response.json();

  return user.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      console.log('fulfilled', action);
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    });
  },
});

export const { logout } = authSlice.actions;
//export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
