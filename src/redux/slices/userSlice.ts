import { createSlice } from "@reduxjs/toolkit";
import {
  signupUseOperation,
  updateTokensOperation,
} from "../operations/userOperations";
import { PayloadAction } from "@reduxjs/toolkit";
import { ServerResponse, SignupInfo, UserTokens } from "../../sevice/api";
import { RFTtoStorage } from "../../sevice/localStorageProcess";

interface UserState {
  error: string | null;
  loading: boolean;
  data: {
    name: string;
    email: string;
    token: string;
  };
}

const initialState: UserState = {
  error: null,
  loading: false,
  data: {
    name: "",
    email: "",
    token: "",
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
          state.data.email = action.payload.data.email;
          state.data.name = action.payload.data.name;
          state.data.token = action.payload.data.token;
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
        state = initialState;
      });
  },
});
