import { UserType } from "@/types/user.types";
import { CategoryType } from "@/types/category.types";

export interface GroupType {
  id: number;
  practiceTeacher: UserType;
  theoryTeacher: UserType;
  category: CategoryType;
}

export interface CreateGroupType {
  practice_teacher: number;
  theory_teacher: number;
  category: string;
}
