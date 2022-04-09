import { createSlice } from "@reduxjs/toolkit";

interface UnchangedDataState {
  value: Array<any>;
}

const initialState: UnchangedDataState = {
  value: [],
};

const unchangedDataSlice = createSlice({
  name: "unchangedData",
  initialState,
  reducers: {
    setUnchangedData: (state, action) => {
      const newData = action.payload;
      state.value = newData.newData;
    },
  },
});

export const { setUnchangedData } = unchangedDataSlice.actions;

export default unchangedDataSlice.reducer;
