import { createSlice } from "@reduxjs/toolkit";
import {
  signupUseOperation,
  updateTokensOperation,
  signupByRFT,
} from "../operations/userOperations";
import { PayloadAction } from "@reduxjs/toolkit";
import { ServerResponse, SignupInfo, UserTokens } from "../../sevice/api";
import { RFTtoStorage } from "../../sevice/localStorageProcess";

export interface UserState {
  error: string | null;
  loading: boolean;
  logegIn: boolean;
  data: {
    name: string;
    email: string;
    token: string;
    premision: "admin" | "user" | "achitector" | "";
  };
}

const initialState: UserState = {
  error: null,
  loading: false,
  logegIn: false,
  data: {
    name: "",
    email: "",
    token: "",
    premision: "achitector",
  },
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUseOperation.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(signupUseOperation.rejected, (state, action) => {
        state.loading = false;
        const payload = action.payload as ServerResponse<SignupInfo>;
        state.error = payload.message;
      })
      .addCase(
        signupUseOperation.fulfilled,
        (state, action: PayloadAction<ServerResponse<SignupInfo>>) => {
          state.loading = false;
          state.logegIn = true;
          state.data.email = action.payload.data.email;
          state.data.name = action.payload.data.name;
          state.data.token = action.payload.data.token;
          state.data.premision = action.payload.data.premision;
          RFTtoStorage(action.payload.data.refreshToken);
        }
      )
      .addCase(updateTokensOperation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateTokensOperation.fulfilled,
        (state, action: PayloadAction<ServerResponse<UserTokens>>) => {
          RFTtoStorage(action.payload.data.refreshToken);
          state.data.token = action.payload.data.token;
        }
      )
      .addCase(updateTokensOperation.rejected, (state, action) => {
        state.loading = false;
        state.logegIn = false;
        state.data.email = "";
        state.data.name = "";
        state.data.token = "";
        state.data.premision = "";
        RFTtoStorage("");
      })
      .addCase(signupByRFT.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        signupByRFT.fulfilled,
        (state, action: PayloadAction<ServerResponse<SignupInfo>>) => {
          state.loading = false;
          state.logegIn = true;
          state.data.email = action.payload.data.email;
          state.data.name = action.payload.data.name;
          state.data.token = action.payload.data.token;
          state.data.premision = action.payload.data.premision;
          RFTtoStorage(action.payload.data.refreshToken);
        }
      )
      .addCase(signupByRFT.rejected, (state) => {
        state.loading = false;
        state.logegIn = false;
        state.data.email = "";
        state.data.name = "";
        state.data.token = "";
        state.data.premision = "";
        RFTtoStorage("");
      });
  },
});
