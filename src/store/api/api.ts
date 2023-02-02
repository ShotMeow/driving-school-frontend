import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TypeRootState } from "@/store";
import { UserType } from "@/store/api/api.types";
import { LoginType, RegisterType, ResponseType } from "@/store/auth/auth.types";
import { logout, setToken } from "@/store/auth/auth.slice";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Profile"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as TypeRootState).auth.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    }
  }),
  endpoints: (builder) => ({
    register: builder.mutation<ResponseType, RegisterType>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body: body
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          await dispatch(setToken(data));
        } catch (error) {
          await dispatch(logout());
        }
      }
    }),
    login: builder.mutation<ResponseType, LoginType>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body: body
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          await dispatch(setToken(data));
        } catch (error) {
          await dispatch(logout());
        }
      }
    }),
    getProfile: builder.query<UserType, void>({
      query: () => `/users/profile`,
      providesTags: () => [{ type: "Profile" }]
    })
  })
});
