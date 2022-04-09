import { createSlice } from "@reduxjs/toolkit";

interface ErrorState {
  value: string;
}

const initialState: ErrorState = {
  value: "",
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state) => {
      state.value = "Something went wrong...";
    },
  },
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;
