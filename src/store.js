import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./Features/categorySlice";
import widgetReducer from "./Features/widgetSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    widgets: widgetReducer,
  },
});
