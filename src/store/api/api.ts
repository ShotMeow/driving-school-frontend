import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TypeRootState } from "@/store";
import { LoginType, RegisterType, ResponseType } from "@/types/auth.types";
import { logout, setToken } from "@/store/auth/auth.slice";
import { Roles, UserType } from "@/types/user.types";
import { CreateGroupType, GroupType } from "@/types/group.types";
import { CategoryType } from "@/types/category.types";

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
      forceRefetch: () => true
    }),
    getGroupByAuth: builder.query<GroupType, void>({
      query: () => `/users/profile/group`,
      forceRefetch: () => true
    }),
    getGroupById: builder.query<GroupType, number>({
      query: (arg) => `/users/profile/group/${arg}`,
      forceRefetch: () => true
    }),
    getAllGroups: builder.query<GroupType[], { search?: string }>({
      query: (arg) => {
        return {
          url: `/groups`,
          params: { search: arg.search }
        };
      },
      forceRefetch: () => true
    }),
    getUsersByType: builder.query<UserType[], { role: Roles; search?: string }>(
      {
        query: (arg) => {
          return {
            url: "/users/filter",
            params: { role: arg.role, search: arg.search }
          };
        },
        forceRefetch: () => true
      }
    ),
    getStudentWithGroup: builder.query<UserType[], { search?: string }>({
      query: (arg) => {
        return {
          url: "/users/students",
          params: { search: arg.search }
        };
      },
      forceRefetch: () => true
    }),
    getCategories: builder.query<CategoryType[], void>({
      query: () => `/categories`,
      forceRefetch: () => true
    }),
    createGroup: builder.mutation<GroupType, CreateGroupType>({
      query: (body) => ({
        url: `/groups/create`,
        method: "PUT",
        body: body
      })
    })
  })
});
