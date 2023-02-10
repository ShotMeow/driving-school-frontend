import React, { FC } from "react";
import Student from "@/components/pages/Profile/Student/Student";
import Teacher from "@/components/pages/Profile/Teacher/Teacher";
import Admin from "@/components/pages/Profile/Admin/Admin";
import { UserRole, UserType } from "@/store/api/users/users.types";

interface Props {
  user: UserType;
}

const Profile: FC<Props> = ({ user }) => {
  return (
    <>
      {user.role === UserRole.STUDENT && <Student user={user} />}
      {(user.role === UserRole.THEORY_TEACHER ||
        user.role === UserRole.PRACTICE_TEACHER) && <Teacher user={user} />}
      {user.role === UserRole.ADMIN && <Admin user={user} />}
    </>
  );
};

export default Profile;
