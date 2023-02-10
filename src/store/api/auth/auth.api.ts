import {api} from "@/store/api/api";
import {logout, setToken} from "@/store/auth/auth.slice";
import {LoginType, RegisterType, ResponseType} from "@/store/api/auth/auth.types";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<ResponseType, RegisterType>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body: body
      }),
      invalidatesTags: ["Profile"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          await dispatch(setToken(data));
        } catch (error) {
          await dispatch(logout());
        }
      }
    }),
    login: builder.mutation<ResponseType, LoginType>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body: body
      }),
      invalidatesTags: ["Profile"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          await dispatch(setToken(data));
        } catch (error) {
          await dispatch(logout());
        }
      }
    }),
  })
})