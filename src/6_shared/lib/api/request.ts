import { API_BASE_URL } from '@env';
import { URLSearchParams } from 'react-native-url-polyfill';
import { _fetch } from './_fetch';
import { log, logline } from '../debug/log';

type RequestProps = {
  endpoint: string;
  method?: 'get' | 'post' | 'put';
  body?: any;
  params?: any;
  headers?: Headers;
  signal?: AbortSignal;
};

export const request = ({
  endpoint,
  method = 'get',
  body,
  params,
  signal,
  headers,
}: RequestProps) => {
  const url = new URL(endpoint, API_BASE_URL);
  url.search = new URLSearchParams(params).toString();
  log('request', { url }); // Good example for debounce search

  return _fetch(url, { method, body, signal });
};
