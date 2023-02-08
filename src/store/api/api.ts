import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TypeRootState } from "@/store";
import { LoginType, RegisterType, ResponseType } from "@/types/auth.types";
import { logout, setToken } from "@/store/auth/auth.slice";
import { Roles, UserType } from "@/types/user.types";
import { CreateGroupType, GroupType } from "@/types/group.types";

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
  tagTypes: ["Profile", "Group", "Student", "Instructor", "Category"],
  endpoints: (builder) => ({
    register: builder.mutation<ResponseType, RegisterType>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body: body
      }),
      invalidatesTags: ["Profile"],
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
      invalidatesTags: ["Profile"],
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
      providesTags: ["Profile"]
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
      forceRefetch: () => true,
      providesTags: ["Group"]
    }),
    getUsersByType: builder.query<UserType[], { role: Roles; search?: string }>(
      {
        query: (arg) => {
          return {
            url: "/users/filter",
            params: { role: arg.role, search: arg.search }
          };
        },
        providesTags: ["Instructor"],
        forceRefetch: () => true
      }
    ),
    getStudentsWithGroup: builder.query<UserType[], { search?: string }>({
      query: (arg) => {
        return {
          url: "/users/students",
          params: { search: arg.search }
        };
      },
      forceRefetch: () => true,
      providesTags: ["Student"]
    }),
    getStudentsWithoutGroup: builder.query<UserType[], void>({
      query: () => `/users/students/without`,
      forceRefetch: () => true,
      providesTags: ["Student"]
    }),
    createGroup: builder.mutation<GroupType, CreateGroupType>({
      query: (body) => ({
        url: `/groups/create`,
        method: "PUT",
        body: body
      }),
      invalidatesTags: ["Group"]
    }),
    deleteGroup: builder.mutation<GroupType, number>({
      query: (id) => ({
        url: `/groups/delete/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Group"]
    }),
    addStudentToGroup: builder.mutation<
      UserType[],
      { studentId: number; groupId: number }
    >({
      query: (arg) => ({
        url: `/groups/create/student/${arg.groupId}/${arg.studentId}`,
        method: "PUT"
      }),
      invalidatesTags: ["Student"]
    }),
    deleteStudentWithGroup: builder.mutation<
      UserType,
      { studentId: number; groupId: number }
    >({
      query: (arg) => ({
        url: `/groups/delete/student/${arg.groupId}/${arg.studentId}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Student"]
    }),
    changeUserRole: builder.mutation<
      UserType,
      { userId: number; role: string }
    >({
      query: (arg) => ({
        url: `/users/${arg.userId}`,
        method: "PATCH",
        params: { role: arg.role }
      }),
      invalidatesTags: ["Instructor", "Student"]
    })
  })
});
