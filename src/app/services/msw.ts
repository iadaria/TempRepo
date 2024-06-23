import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../providers/StoreProvider/config/store';

interface SettingsState {
  mswEnabled: boolean;
}

const initialState: SettingsState = {
  mswEnabled: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    enableMsw: state => {
      state.mswEnabled = __DEV__ && true;
    },
  },
});

export const { enableMsw } = settingsSlice.actions;
export const selectMswEnabled = (state: RootState) => state.settings.mswEnabled;

export const settingsReducer = settingsSlice.reducer;
