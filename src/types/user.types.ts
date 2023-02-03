export enum Roles {
  ADMIN = "admin",
  PRACTICE_TEACHER = "practice_teacher",
  THEORY_TEACHER = "theory_teacher",
  STUDENT = "student"
}

export interface UserType {
  id: number;
  surname: string;
  name: string;
  patronymic?: string;
  phone: string;
  email: string;
  role: Roles;
  avatarPath: string | null;
}
