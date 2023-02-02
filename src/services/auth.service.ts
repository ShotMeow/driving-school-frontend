import { axiosClassic } from "@/api/axios";
import { LoginType, RegisterType, ResponseType } from "@/store/auth/auth.types";

export const AuthService = {
  async login(data: LoginType) {
    const response = await axiosClassic.post<ResponseType>("/auth/login", data);

    return response.data;
  },

  async register(data: RegisterType) {
    const response = await axiosClassic.post<ResponseType>(
      "/auth/register",
      data
    );

    return response.data;
  }
};
