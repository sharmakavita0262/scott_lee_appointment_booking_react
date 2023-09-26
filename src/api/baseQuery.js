import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

const baseUrl = process.env.REACT_APP_LOCAL_HOST_API;

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth?.user?.token ?? '';
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export default baseQuery;

