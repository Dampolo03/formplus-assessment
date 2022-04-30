import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./allSlices";

// const actionSanitizer = (action: any) =>
//   action.type === "FILE_DOWNLOAD_SUCCESS" && action.data
//     ? { ...action, data: "<<LONG_BLOB>>" }
//     : action;

const store = configureStore({
  reducer: {
    all: reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
