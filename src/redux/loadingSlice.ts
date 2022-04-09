import { createSlice } from "@reduxjs/toolkit";

interface LoadingState {
  value: boolean;
}

const initialState: LoadingState = {
  value: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoadingTrue: (state) => {
      state.value = true;
    },
    setLoadingFalse: (state) => {
      state.value = false;
    },
  },
});

export const { setLoadingTrue, setLoadingFalse } = loadingSlice.actions;

export default loadingSlice.reducer;
