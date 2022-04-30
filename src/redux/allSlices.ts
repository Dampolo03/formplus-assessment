import { createSlice } from "@reduxjs/toolkit";

interface State {
  error: string;
  searchWords: string;
  template: string;
  loading: boolean;
  obtainedData: Array<any>;
  results: Array<any>;
  unchangedData: Array<any>;
}

const initialState: State = {
  error: "",
  searchWords: "",
  template: "",
  loading: false,
  obtainedData: [],
  results: [],
  unchangedData: [],
};

const allSlices = createSlice({
  name: "allSlices",
  initialState,
  reducers: {
    setError: (state) => {
      state.error = "Something went wrong...";
    },
    setLoadingTrue: (state) => {
      state.loading = true;
    },
    setLoadingFalse: (state) => {
      state.loading = false;
    },
    setObtainedData: (state, action) => {
      const newData = action.payload;
      state.obtainedData = newData.newData;
    },
    setResults: (state, action) => {
      const results = action.payload;
      state.results = results.results;
    },
    setSearchWords: (state, action) => {
      const words = action.payload;
      state.searchWords = words.words;
    },
    setTemplate: (state, action) => {
      const template = action.payload;
      state.template = template.template;
    },
    setUnchangedData: (state, action) => {
      const newData = action.payload;
      state.unchangedData = newData.newData;
    },
  },
});

export const {
  setError,
  setLoadingTrue,
  setLoadingFalse,
  setObtainedData,
  setResults,
  setSearchWords,
  setTemplate,
  setUnchangedData,
} = allSlices.actions;

export const { reducer } = allSlices;
