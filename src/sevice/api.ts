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

export interface IBook {
  name: string;
  author: string;
  reliseDate: number;
  picture: {
    url: string;
    publick_id: string;
  };
  description: string;
  ganre: Array<string>;
  keyWords: Array<string>;
  countOfExamples: number;
  inHands: number;
  _id: string;
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

export const getUserByToken = async (
  token: string
): Promise<AxiosResponse<ServerResponse<SignupInfo>>> => {
  try {
    const response = axios.get("/user/userInfo", {
      headers: {
        Authorization: token,
      },
    });
    return response;
  } catch (err: any) {
    return err.response;
  }
};

export const createBook = async (token: string, data: FormData) => {
  try {
    const response = axios.post("/books", data, {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (err: any) {
    return err.response;
  }
};

export const getAllBooks = async (keyword: string) => {
  try {
    const result = await axios.get("/books", {
      params: {
        keyword,
      },
    });
    return result.data;
  } catch (error: any) {
    return error.response;
  }
};

export const getBookById = async (id: string) => {
  try {
    const result = await axios.get(`books/${id}`);
    return result.data;
  } catch (error: any) {
    return error.response;
  }
};
