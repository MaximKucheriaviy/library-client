import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:3001/api";
export interface SignupData {
  email: string;
  password: string;
}
interface UserInfo {
  name: string;
  email: string;
  premision: "admin" | "user";
}
export interface UserTokens {
  token: string;
  refreshToken: string;
}
export interface SignupInfo extends UserInfo, UserTokens {}
export interface ServerResponse<T> {
  message: string;
  data: T;
}

export const siguptUser = async ({
  email,
  password,
}: SignupData): Promise<AxiosResponse<ServerResponse<SignupInfo>>> => {
  try {
    const response = await axios.post("/user/signup", { email, password });
    return response;
  } catch (err: any) {
    return err.response;
  }
};

export const updateTokens = async (
  refreshToken: string
): Promise<AxiosResponse<ServerResponse<UserTokens>>> => {
  try {
    const response = axios.get("/user/refreshToken", {
      headers: {
        Authorization: refreshToken,
      },
    });
    return response;
  } catch (err: any) {
    return err.response;
  }
};
