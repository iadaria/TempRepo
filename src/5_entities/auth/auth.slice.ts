import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@src/1_app/providers/StoreProvider/config/store';
import { authLogout, initAuth, login } from './auth.services';

type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /* logout: () => {
      return initialState;
    } */
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    });
    builder.addCase(initAuth.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    });
    builder.addCase(authLogout.fulfilled, () => initialState);
  },
});

//export const { logout } = authSlice.actions;
//export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
