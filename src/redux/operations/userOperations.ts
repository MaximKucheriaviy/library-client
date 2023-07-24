import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateTokens } from "../../sevice/api";
import { getRFTfromStorage } from "../../sevice/localStorageProcess";
import {
  siguptUser,
  SignupInfo,
  ServerResponse,
  SignupData,
  UserTokens,
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
      return thunkAPI.rejectWithValue(result);
    }
    return result;
  }
);
