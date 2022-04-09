import { createSlice } from "@reduxjs/toolkit";

interface ObtainedDataState {
  value: Array<any>;
}

const initialState: ObtainedDataState = {
  value: [],
};

const obtainedDataSlice = createSlice({
  name: "obtainedData",
  initialState,
  reducers: {
    setObtainedData: (state, action) => {
      const newData = action.payload;
      state.value = newData.newData;
    },
  },
});

export const { setObtainedData } = obtainedDataSlice.actions;

export default obtainedDataSlice.reducer;
