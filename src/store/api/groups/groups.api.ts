import { api } from "@/store/api/api";
import { CategoryType } from "@/store/api/categories/categories.types";
import {
  ChangeGroupType,
  CreateGroupType,
  GroupType
} from "@/store/api/groups/groups.types";

export const groupsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getGroups: builder.query<GroupType[], { search?: string }>({
      query: (args) => ({
        url: `/groups`,
        params: { search: args.search }
      }),
      providesTags: ["Group"]
    }),
    getGroupById: builder.query<GroupType, { groupId: number }>({
      query: (args) => `/groups/${args.groupId}`,
      providesTags: ["Group"]
    }),
    createGroup: builder.mutation<GroupType, CreateGroupType>({
      query: (args) => ({
        url: `/groups/create`,
        method: "PUT",
        body: { ...args }
      }),
      invalidatesTags: ["Group"]
    }),
    updateGroup: builder.mutation<
      CategoryType,
      { groupId: number; body: ChangeGroupType }
    >({
      query: (args) => ({
        url: `/groups/${args.groupId}`,
        method: "PATCH",
        body: { ...args.body }
      }),
      invalidatesTags: ["Group"]
    }),
    deleteGroup: builder.mutation<GroupType, { groupId: number }>({
      query: (args) => ({
        url: `/groups/${args.groupId}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Group"]
    }),
    pushStudentToGroup: builder.mutation<
      GroupType,
      { groupId: number; userId: number }
    >({
      query: (args) => ({
        url: `/groups/${args.groupId}/${args.userId}`,
        method: "PATCH"
      }),
      invalidatesTags: ["User", "Group"]
    }),
    deleteStudentFromGroup: builder.mutation<
      GroupType,
      { groupId: number; userId: number }
    >({
      query: (args) => ({
        url: `/groups/${args.groupId}/${args.userId}`,
        method: "DELETE"
      }),
      invalidatesTags: ["User", "Group"]
    })
  })
});
