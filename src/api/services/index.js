import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../baseQuery';
import { ENDPOINTS } from './endpoints';


export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  tagTypes: ['services'],
  baseQuery,
  endpoints: (builder) => ({
    // userLogin: builder.mutation({
    //   query: (data) => ({
    //     url: ENDPOINTS.LOGIN,
    //     body: data,
    //     method: 'POST',
    //   }),
    // }),
    // userRegister: builder.mutation({
    //   query: (data) => ({
    //     url: ENDPOINTS.REGISTER,
    //     body: data,
    //     method: 'POST',
    //   }),
    // }),
    // userChangePassword: builder.mutation({
    //   query: (data) => ({
    //     url: ENDPOINTS.CHANGE_PASSWORD,
    //     body: data,
    //     method: 'PATCH',
    //   }),
    // }),
    // userDetails: builder.query({
    //   query: () => ({
    //     url: ENDPOINTS.USER,
    //     method: 'GET',
    //   }),
    //   providesTags: ['user'],
    // }),
    // userDetailsChange: builder.mutation({
    //   query: (data) => ({
    //     url: ENDPOINTS.USER,
    //     body: data,
    //     method: 'PATCH',
    //   }),
    //   invalidatesTags: ['user'],
    // }),
    // forgetPassword: builder.mutation({
    //   query: (data) => ({
    //     url: ENDPOINTS.FORGET_PASSWORD,
    //     body: data,
    //     method: 'POST',
    //   }),
    // }),
    // ResetPassword: builder.mutation({
    //   query: (data) => ({
    //     url: ENDPOINTS.RESET_PASSWORD,
    //     body: data,
    //     method: 'POST',
    //   }),
    // }),
    getServices: builder.query({
      query: () => ({
        url: ENDPOINTS.ALL_SERVICES,
        method: 'GET',
      }),
    }),
    getServiceDetails: builder.query({
      query: (data) => ({
        url: `${ENDPOINTS.SERVICE}/${data}`,
        method: 'GET',
      }),
    }),
    getPreference: builder.query({
      query: (data) => ({
        url: `${ENDPOINTS.PREFERENCE}/${data}`,
        method: 'GET',
      }),
    }),
    getProvider: builder.query({
      query: (data) => ({
        url: `${ENDPOINTS.SERVICE_PROVIDER}/${data}`,
        method: 'GET',
      }),
    }),
  }),
});
export const { useGetServicesQuery, useGetServiceDetailsQuery, useGetPreferenceQuery, useGetProviderQuery } = servicesApi;
