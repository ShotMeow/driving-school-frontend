import { api } from "@/store/api/api";
import {
  CreateScheduleType,
  ScheduleType,
  UpdateScheduleType
} from "@/store/api/schedules/schedules.types";

export const schedulesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSchedules: builder.query<ScheduleType[], { teacherId: number }>({
      query: (args) => ({
        url: `/schedules`,
        params: { teacherId: args.teacherId }
      }),
      providesTags: ["Schedule"]
    }),
    getSchedule: builder.query<ScheduleType[], { groupId: number }>({
      query: (args) => `/schedules/${args.groupId}`,
      providesTags: ["Schedule"]
    }),
    createSchedule: builder.mutation<
      ScheduleType,
      { groupId: number | "DEFAULT"; body: CreateScheduleType }
    >({
      query: (args) => ({
        url: `/schedules/${args.groupId}/create`,
        method: "PUT",
        body: { ...args.body }
      }),
      invalidatesTags: ["Schedule", "Group"]
    }),
    updateSchedule: builder.mutation<
      ScheduleType,
      { groupId: number; scheduleId: number; body: UpdateScheduleType }
    >({
      query: (args) => ({
        url: `/schedules/${args.groupId}/${args.scheduleId}`,
        method: "PATCH",
        body: { ...args.body }
      }),
      invalidatesTags: ["Schedule", "Group"]
    }),
    deleteSchedule: builder.mutation<
      ScheduleType,
      { groupId: number; scheduleId: number }
    >({
      query: (args) => ({
        url: `/schedules/${args.groupId}/${args.scheduleId}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Schedule", "Group"]
    })
  })
});
