import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";
const initialState = {
  data: data.widgets,
  loading: false,
  error: null,
};

export const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    addWidgetStart: (state) => {
      state.loading = true;
    },
    addWidgetSuccess: (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
      state.error = null;
    },
    addWidgetFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeWidgetStart: (state) => {
      state.loading = true;
    },
    removeWidgetSuccess: (state, action) => {
      state.loading = false;
      state.data = state.data.filter((widget) => widget.id !== action.payload);
      state.error = null;
    },
    removeWidgetFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addWidgetStart,
  addWidgetSuccess,
  addWidgetFailure,
  removeWidgetStart,
  removeWidgetSuccess,
  removeWidgetFailure,
} = widgetSlice.actions;

export default widgetSlice.reducer;
