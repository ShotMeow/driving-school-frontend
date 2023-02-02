import { useTypedSelector } from "@/hooks/useTypedSelector";

export const useAuth = () => useTypedSelector((state) => state.auth.token);
