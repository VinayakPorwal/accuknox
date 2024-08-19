import {
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
} from "./categorySlice";

// Thunk to fetch a list of tickets
export const allCategories = () => async (dispatch) => {
  dispatch(addCategoryStart());
  try {
    const response = "some-function here"; // some function here to list all categories
    dispatch(addCategorySuccess(response.data));
  } catch (error) {
    dispatch(addCategoryFailure(error.message));
  }
};

// Thunk to add a new ticket
export const addCategory = (categoryData) => async (dispatch) => {
  dispatch(addCategoryStart());
  try {
    const response = categoryData; // some function to add in local storage
    dispatch(addCategorySuccess(response.data));
  } catch (error) {
    dispatch(addCategoryFailure(error.message));
  }
};

// Thunk to fetch a list of tickets for ADMIN
export const removeCategory = (id) => async (dispatch) => {
  dispatch(removeCategoryStart());
  try {
    const response = id; // some function to remove from local storage
    dispatch(removeCategorySuccess(response.data));
  } catch (error) {
    dispatch(removeCategoryFailure(error.message));
  }
};

export const addWidgetToCategory =
  (categoryId, widgetId) => async (dispatch) => {
    dispatch(addWidgetToCatStart());
    try {
      dispatch(addWidgetToCatSuccess([categoryId, widgetId]));
    } catch (error) {
      dispatch(addWidgetToCatFailure(error.message));
    }
  };

export const removeWidgetFromCategory =
  (categoryId, widgetId) => async (dispatch) => {
    dispatch(removeWidgetFromCatStart());
    try {
      // Remove widget from local storage or server
      dispatch(removeWidgetFromCatSuccess([categoryId, widgetId]));
    } catch (error) {
      dispatch(removeWidgetFromCatFailure(error.message));
    }
  };
