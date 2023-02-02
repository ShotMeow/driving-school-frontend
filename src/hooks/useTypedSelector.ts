import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TypeRootState } from "@/store";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> =
  useSelector;
