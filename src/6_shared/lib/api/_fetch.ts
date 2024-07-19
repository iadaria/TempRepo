import { Alert } from 'react-native';
import { log } from '../debug/log';

declare global {
  var token: string;
}

const baseHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  //baseHeaders.set('Authorization', global.token);
  Authorization: '28Zb1iJA92kbv9FQTEbDy',
};

export async function _fetch(input: URL, init?: RequestInit) {
  const headers = { ...baseHeaders, ...init?.headers };
  const response = await fetch(input, { ...init, headers });
  if (response.status == 401) {
    Alert.alert('Authorize, please');
  }
  /* if (response.status == 500) {
    Alert.alert('Server Error');
  } */

  return response;
}

export const controller = new AbortController();
