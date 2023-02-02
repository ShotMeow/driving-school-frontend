import dynamic from "next/dynamic";
import { FC, PropsWithChildren } from "react";
import { TypeComponentAuthField } from "@/providers/PrivateRouter.types";

const DynamicCheckRole = dynamic(() => import("./CheckRole"), {
  ssr: false
});

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthField>> = ({
  Component: { isOnlyUser },
  children
}) => {
  return !isOnlyUser ? (
    <>{children}</>
  ) : (
    <DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
  );
};

export default AuthProvider;
