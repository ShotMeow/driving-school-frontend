import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TypeRootState } from "@/store";
import { UserType } from "@/store/api/api.types";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Profile"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as TypeRootState).auth.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getProfile: builder.query<UserType, void>({
      query: () => `/users/profile`,
      providesTags: () => [{ type: "Profile" }]
    })
  })
});
