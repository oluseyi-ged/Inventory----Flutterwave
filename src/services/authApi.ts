/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

interface CustomError {
  data: {
    error: string;
    message: string;
    statusCode: number;
  };
  status: number;
}

const baseUrl = 'https://something.com/';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    // prepareHeaders
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,
  endpoints: builder => ({
    authUser: builder.mutation({
      query: (body: any) => {
        return {
          url: 'authentication/',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const {useAuthUserMutation} = authApi;
