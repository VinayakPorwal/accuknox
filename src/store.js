import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import widgetReducer from "./features/widgetSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    widgets: widgetReducer,
  },
});
