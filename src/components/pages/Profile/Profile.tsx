import React, { FC } from "react";
import { Roles, UserType } from "@/types/user.types";
import Student from "@/components/pages/Profile/Student/Student";
import Teacher from "@/components/pages/Profile/Teacher/Teacher";
import Admin from "@/components/pages/Profile/Admin/Admin";

interface Props {
  user: UserType;
}

const Profile: FC<Props> = ({ user }) => {
  return (
    <>
      {user.role === Roles.STUDENT && <Student user={user} />}
      {(user.role === Roles.THEORY_TEACHER ||
        user.role === Roles.PRACTICE_TEACHER) && <Teacher user={user} />}
      {user.role === Roles.ADMIN && <Admin user={user} />}
    </>
  );
};

export default Profile;
