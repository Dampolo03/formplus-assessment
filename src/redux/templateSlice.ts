import { createSlice } from "@reduxjs/toolkit";

interface TemplateState {
  value: string;
}

const initialState: TemplateState = {
  value: "",
};

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplate: (state, action) => {
      const template = action.payload;
      state.value = template.template;
    },
  },
});

export const { setTemplate } = templateSlice.actions;

export default templateSlice.reducer;
