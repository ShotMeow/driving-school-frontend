import { useDispatch } from "react-redux";
import { store } from "@/store";

type Dispatch = typeof store.dispatch;
export const useTypedDispatch = () => useDispatch<Dispatch>();
