import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const errorMessage = "Something went wrong...";

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

export const fetchData = createAsyncThunk(
  "fetchData",
  async (thunkAPI: any) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}`);
      const obtainedData = await response.json();
      const newData = [...obtainedData];
      const slicedData = [...newData.slice(0, 2000)];
      return slicedData;
    } catch {
      return thunkAPI.rejectWithValue("");
    }
  }
);

const allSlices = createSlice({
  name: "allSlices",
  initialState,
  reducers: {
    setError: (state) => {
      state.error = errorMessage;
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
  extraReducers: (getData) => {
    getData.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    getData.addCase(fetchData.fulfilled, (state, { payload }: any) => {
      state.obtainedData = [...payload];
      state.unchangedData = [...payload];
      state.template = "All";
      state.loading = false;
    });
    getData.addCase(fetchData.rejected, (state) => {
      state.error = errorMessage;
      state.loading = false;
    });
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