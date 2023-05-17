import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import IAppState from "@/models/App-Modal";

const DEFAULT_STATE: IAppState = {
  error: {},
  firstArtworks: [],
};

const INITIAL_STATE: IAppState = {
  ...DEFAULT_STATE,
};

const appSlice = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {
    resetAppSlice: () => {
      //     // clearAccessToken();
      return DEFAULT_STATE;
    },
    setFirstArtworks: (state: IAppState, action) => {
      return {
        ...state,
        ///

        firstArtworks: [...state.firstArtworks, action.payload],
      };
    },
  },

  extraReducers: (builder) => {},
});

/// book reservation
export const selectFirstArtworks = (state: RootState) =>
  state.app.firstArtworks;

export const { setFirstArtworks } = appSlice.actions;
export default appSlice;
