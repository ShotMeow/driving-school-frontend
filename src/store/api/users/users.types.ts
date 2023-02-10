import { GroupType } from "@/store/api/groups/groups.types";

export interface UserType {
  id: number;
  surname: string;
  name: string;
  patronymic?: string;
  phone: string;
  email: string;
  password: string;
  role: UserRole;
  avatarPath?: string;
  group: GroupType;
}

export interface ChangeUserType {
  role: string;
}

export enum UserRole {
  ADMIN = "admin",
  PRACTICE_TEACHER = "practice_teacher",
  THEORY_TEACHER = "theory_teacher",
  STUDENT = "student"
}
