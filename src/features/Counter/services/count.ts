import { API_BASE_URL } from '@env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countApi = createApi({
  reducerPath: 'countApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/` }),
  tagTypes: [],
  endpoints: builder => ({
    getCount: builder.query({
      query: () => `/count`,
    }),
  }),
});

export const { useGetCountQuery } = countApi;
