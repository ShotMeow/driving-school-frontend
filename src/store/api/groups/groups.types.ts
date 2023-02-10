import { ScheduleType } from "@/store/api/schedules/schedules.types";
import { UserType } from "@/store/api/users/users.types";
import { CategoryType } from "@/store/api/categories/categories.types";

export interface GroupType {
  id: number;
  practiceTeacher: UserType;
  theoryTeacher: UserType;
  category: CategoryType;
  students: UserType[];
  schedules: ScheduleType[];
}

export interface CreateGroupType {
  practiceTeacherId: number;
  theoryTeacherId: number;
  categoryId: number;
}

export interface ChangeGroupType extends Partial<CreateGroupType> {}
