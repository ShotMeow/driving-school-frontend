import { UserType } from "@/types/user.types";
import { CategoryType } from "@/types/category.types";

export interface GroupType {
  id: number;
  practiceTeacher: UserType;
  theoryTeacher: UserType;
  category: CategoryType;
}
