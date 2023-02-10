import { GroupType } from "@/store/api/groups/groups.types";

export interface ScheduleType {
  type: ScheduleEnum;
  startTime: string;
  endTime: string;
  date: Date;
  address?: string;
  group: GroupType;
}

export interface CreateScheduleType extends ScheduleType {
  address?: string;
}

export interface UpdateScheduleType extends Partial<CreateScheduleType> {}

export enum ScheduleEnum {
  Theory = "theory",
  Practice = "practice",
  Testing = "testing"
}
