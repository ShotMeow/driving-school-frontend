import React, { FC } from "react";
import { UserType } from "@/store/api/api.types";

interface Props {
  user: UserType;
}

const TeacherPage: FC<Props> = ({ user }) => {
  return <div>Учитель</div>;
};

export default TeacherPage;
