import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";

import { useAuth } from "@/hooks/useAuth";
import { TypeComponentAuthField } from "@/providers/PrivateRouter.types";

const CheckRole: FC<PropsWithChildren<TypeComponentAuthField>> = ({
  children,
  Component: { isOnlyUser }
}) => {
  const token = useAuth();
  const { replace, pathname } = useRouter();

  const Children = () => <>{children}</>;

  if (token) return <Children />;

  if (isOnlyUser) pathname !== "/" && replace("/");
  return null;
};

export default CheckRole;
