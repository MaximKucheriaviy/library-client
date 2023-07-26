import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateTokens } from "../../sevice/api";
import { getRFTfromStorage } from "../../sevice/localStorageProcess";
import {
  siguptUser,
  SignupInfo,
  ServerResponse,
  SignupData,
  UserTokens,
  getUserByToken,
} from "../../sevice/api";

export const signupUseOperation = createAsyncThunk(
  "user/signup",
  async (
    data: SignupData,
    thunkAPI
  ): Promise<ServerResponse<SignupInfo> | any> => {
    const result = await siguptUser(data);
    console.log(result);

    if (result.status !== 201) {
      return thunkAPI.rejectWithValue(result.data);
    }
    return result.data;
  }
);

export const updateTokensOperation = createAsyncThunk(
  "user/updateToken",
  async (_, thunkAPI): Promise<ServerResponse<UserTokens> | any> => {
    const RFT = getRFTfromStorage();
    if (RFT === null) {
      return thunkAPI.rejectWithValue("no stored RFT");
    }
    const result = await updateTokens(RFT);
    if (result.status !== 201) {
      return thunkAPI.rejectWithValue(result.data);
    }
    return result.data;
  }
);

export const signupByRFT = createAsyncThunk(
  "user/signupByRFT",
  async (_, thunkAPI): Promise<ServerResponse<SignupInfo> | any> => {
    const RFT = getRFTfromStorage();
    if (RFT === null) {
      return thunkAPI.rejectWithValue("no stored RFT");
    }
    const result = await updateTokens(RFT);
    if (result.status !== 201) {
      return thunkAPI.rejectWithValue(result.data);
    }
    const userResult = await getUserByToken(result.data.data.token);
    if (userResult.status !== 200) {
      return thunkAPI.rejectWithValue(userResult.data);
    }
    userResult.data.data.token = result.data.data.token;
    userResult.data.data.refreshToken = result.data.data.refreshToken;
    return userResult.data;
  }
);

export const logoutOperation = createAsyncThunk(
  "user/logout",
  async (_, thunkAPI): Promise<boolean> => {
    return true;
  }
);
