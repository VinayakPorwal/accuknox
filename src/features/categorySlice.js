import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";
const initialState = {
  data: data.categories, // categories with widgets
  loading: false,
  error: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    // Category-related reducers here...
    addCategoryStart: (state) => {
      state.loading = true;
    },
    addCategorySuccess: (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
      state.error = null;
    },
    addCategoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeCategoryStart: (state) => {
      state.loading = true;
    },
    removeCategorySuccess: (state, action) => {
      state.loading = false;
      state.data = state.data.filter(
        (category) => category.id !== action.payload
      );
      state.error = null;
    },
    removeCategoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Widget-related reducers
    addWidgetToCatSuccess: (state, action) => {
      state.loading = false;
      const [categoryId, widgetId] = action.payload;
      const category = state.data.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgetIds.push(widgetId);
      }
    },
    addWidgetToCatFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addWidgetToCatStart: (state) => {
      state.loading = true;
    },
    removeWidgetFromCatStart: (state) => {
      state.loading = true;
    },
    removeWidgetFromCatFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeWidgetFromCatSuccess: (state, action) => {
      const [categoryId, widgetId] = action.payload;
      // Use find to get the single category object
      const category = state.data.find((cat) => cat.id === categoryId);
      if (category) {
        // Filter out the widgetId directly from widgetIds
        category.widgetIds = category.widgetIds.filter((id) => id !== widgetId);
      }
      state.loading = false;
    },
  },
});

export const {
  addCategoryStart,
  addCategorySuccess,
  addCategoryFailure,
  removeCategoryStart,
  removeCategorySuccess,
  removeCategoryFailure,
  addWidgetToCatStart,
  addWidgetToCatSuccess,
  addWidgetToCatFailure,
  removeWidgetFromCatStart,
  removeWidgetFromCatSuccess,
  removeWidgetFromCatFailure,
} = categorySlice.actions;

export default categorySlice.reducer;
