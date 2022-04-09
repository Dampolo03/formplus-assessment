import { createSlice } from "@reduxjs/toolkit";

interface SearchWordsState {
  value: string;
}

const initialState: SearchWordsState = {
  value: "",
};

const searchWordsSlice = createSlice({
  name: "searchWords",
  initialState,
  reducers: {
    setSearchWords: (state, action) => {
      const words = action.payload;
      state.value = words.words;
    },
  },
});

export const { setSearchWords } = searchWordsSlice.actions;

export default searchWordsSlice.reducer;
