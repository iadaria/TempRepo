import { API_BASE_URL } from '@env';
import { URLSearchParams } from 'react-native-url-polyfill';

const headers = new Headers();
headers.set('Content-Type', 'application/json');
headers.set('Accept', 'application/json');

type RequestProps = {
  endpoint: string;
  method?: 'get' | 'post' | 'put';
  body?: any;
  params?: any;
};

/* interface RequestReponse<T> extends Response {
  json(): Promise<T>;
} */

export const request = ({
  endpoint,
  method = 'get',
  body,
  params,
}: RequestProps) => {
  const url = new URL(endpoint, API_BASE_URL);
  url.search = new URLSearchParams(params).toString();

  return fetch(url, { headers, method, body });
};
