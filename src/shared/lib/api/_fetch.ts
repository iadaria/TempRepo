import { Alert } from 'react-native';

const baseHeaders = new Headers();
baseHeaders.set('Content-Type', 'application/json');
baseHeaders.set('Accept', 'application/json');

export async function _fetch(input: URL, init?: RequestInit) {
  const headers = { ...baseHeaders, ...init?.headers };
  const response = await fetch(input, { ...init, headers });

  if (response.status == 500) {
    Alert.alert('Server Error');
  }

  return response;
}
