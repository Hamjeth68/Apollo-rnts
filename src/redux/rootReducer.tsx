import { combineReducers } from "@reduxjs/toolkit";
import appSlice from "./slices/UserSlice";

const rootReducer = combineReducers({
  app: appSlice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
