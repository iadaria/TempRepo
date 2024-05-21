import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

interface CounterState {
  count: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  count: 0,
  status: 'idle',
};

// export const incrementAsync = createAsyncThunk<
//   number,
//   number,
//   { state: { counter: CounterState } }
// >('counter/fetchCount', async (/* amount: number, { getState } */) => {
//   //const { count } = getState().counter;
//   const response = await fetch('/count');
//   const json: { data: { count: number } } = response.json();
//   return;
// });
