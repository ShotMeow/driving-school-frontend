import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TypeRootState } from "@/store";
import { UserType } from "@/store/api/users/users.types";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as TypeRootState).auth.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    }
  }),
  tagTypes: ["Profile", "Category", "Group", "Schedule", "User"],
  endpoints: (builder) => ({
    getAuthUser: builder.query<UserType, void>({
      query: () => `/users/profile`,
      providesTags: ["Profile"]
    })
  })
});
