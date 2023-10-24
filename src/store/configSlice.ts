import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AssetClass, Portfolio } from "./rtkquery/libertifyApi";
import { RootState } from ".";

export interface SDKConfig {
  optimizeConfig?: {
    asset_class: AssetClass;
    currency: string;
    portfolio: Portfolio;
  };
  styles?: {
    textColor: "#fff";
    backgroundColor: "#fff";
  };
  initialized: boolean;
}

const initialState: SDKConfig = {
  initialized: false,
};

export const SDKConfigSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setConfig: (_, action: PayloadAction<SDKConfig>) => {
      action.payload.initialized = true;
      return action.payload;
    },
  },
});

export const { setConfig } = SDKConfigSlice.actions;

export const sdkConfigReducer = SDKConfigSlice.reducer;

export const selectSDKConfig = (state: RootState) => state.sdkConfig;
