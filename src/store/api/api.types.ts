export interface BaseType {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface UserType extends BaseType {
  surname: string;
  name: string;
  patronymic: string;
  phone: string;
  email: string;
  password: string;
  role: UserRole;
  avatarPath: string;
  group?: GroupType;
}

export enum UserRole {
  student = "student",
  teacher = "teacher",
  admin = "admin"
}

export interface GroupType extends BaseType {
  practiceTeacher: UserType;
  theoryTeacher: UserType;
  category: CategoryType;
  students: UserType[];
  schedules: ScheduleType[];
}

export interface CategoryType extends BaseType {
  category: string;
}

export interface ScheduleType extends BaseType {
  weekday: string;
  startTime: string;
  endTime: string;
}
