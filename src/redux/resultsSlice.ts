import { createSlice } from "@reduxjs/toolkit";

interface ResultsState {
  value: Array<any>;
}

const initialState: ResultsState = {
  value: [],
};

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    setResults: (state, action) => {
      const results = action.payload;
      state.value = results.results;
    },
  },
});

export const { setResults } = resultsSlice.actions;

export default resultsSlice.reducer;
