import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";
import errorSlice from "./errorSlice";
import obtainedDataSlice from "./obtainedDataSlice";
import unchangedDataSlice from "./unchangedDataSlice";
import templateSlice from "./templateSlice";
import searchWordsSlice from "./searchWordsSlice";
import resultsSlice from "./resultsSlice";

// const actionSanitizer = (action: any) =>
//   action.type === "FILE_DOWNLOAD_SUCCESS" && action.data
//     ? { ...action, data: "<<LONG_BLOB>>" }
//     : action;

const store = configureStore({
  reducer: {
    loading: loadingSlice,
    error: errorSlice,
    obtainedData: obtainedDataSlice,
    unchangedData: unchangedDataSlice,
    template: templateSlice,
    searchWords: searchWordsSlice,
    results: resultsSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
  ],
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
