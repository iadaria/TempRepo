import { API_BASE_URL } from '@env';
import { URLSearchParams } from 'react-native-url-polyfill';
import { _fetch } from './_fetch';

type RequestProps = {
  endpoint: string;
  method?: 'get' | 'post' | 'put';
  body?: any;
  params?: any;
  headers?: Headers;
};

export const request = ({
  endpoint,
  method = 'get',
  body,
  params,
  headers,
}: RequestProps) => {
  const url = new URL(endpoint, API_BASE_URL);
  url.search = new URLSearchParams(params).toString();

  return _fetch(url, { headers, method, body });
};
