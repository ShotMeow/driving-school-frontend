import React, { FC } from "react";
import { UserType } from "@/store/api/api.types";

interface Props {
  user: UserType;
}

const AdminPage: FC<Props> = ({ user }) => {
  return <div>Админ</div>;
};

export default AdminPage;
