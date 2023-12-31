import { configureStore } from "@reduxjs/toolkit";
import { libertifyApi } from "./rtkquery/libertifyApi";
import { sdkConfigReducer } from "./configSlice";
export const store = configureStore({
  reducer: {
    sdkConfig: sdkConfigReducer,
    [libertifyApi.reducerPath]: libertifyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(libertifyApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const dispatch = store.dispatch;
