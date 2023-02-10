import { api } from "@/store/api/api";
import {
  ChangeUserType,
  UserRole,
  UserType
} from "@/store/api/users/users.types";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<
      UserType[],
      { search?: string; role?: UserRole; withGroup?: boolean }
    >({
      query: (args) => ({
        url: `/users`,
        params: { ...args }
      }),
      forceRefetch: () => true,
      providesTags: ["User"]
    }),
    getUserById: builder.query<UserType, { userId: number }>({
      query: (args) => `/users/${args.userId}`,
      providesTags: ["User"]
    }),
    changeUserRole: builder.mutation<
      UserType,
      { userId: number; body: ChangeUserType }
    >({
      query: (args) => ({
        url: `/users/${args.userId}`,
        method: "PATCH",
        body: { ...args.body }
      }),
      invalidatesTags: ["User"]
    })
  })
});
