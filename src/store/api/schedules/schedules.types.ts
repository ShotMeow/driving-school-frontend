import { GroupType } from "@/store/api/groups/groups.types";

export interface ScheduleType {
  id: number;
  type: ScheduleEnum;
  startTime: string;
  endTime: string;
  date: string;
  address?: string;
  group: GroupType;
}

export interface CreateScheduleType {
  type: ScheduleEnum;
  startTime: string;
  endTime: string;
  date: string;
  address?: string;
}

export interface UpdateScheduleType extends Partial<CreateScheduleType> {}

export enum ScheduleEnum {
  Theory = "theory",
  Practice = "practice",
  Testing = "testing"
}
