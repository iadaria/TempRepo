import { Alert } from 'react-native';

declare global {
  var token: string;
}

const baseHeaders = new Headers();
baseHeaders.set('Content-Type', 'application/json');
baseHeaders.set('Accept', 'application/json');
baseHeaders.set('Authorization', global.token);

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
