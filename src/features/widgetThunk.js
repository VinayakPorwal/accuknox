import {
  addWidgetStart,
  addWidgetSuccess,
  addWidgetFailure,
  removeWidgetStart,
  removeWidgetSuccess,
  removeWidgetFailure,
} from "./widgetSlice";

export const addWidget = (widget) => async (dispatch) => {
  dispatch(addWidgetStart());
  try {
    // Add widget to local storage or server
    dispatch(addWidgetSuccess(widget));
  } catch (error) {
    dispatch(addWidgetFailure(error.message));
  }
};

export const removeWidget = (widgetId) => async (dispatch) => {
  dispatch(removeWidgetStart());
  try {
    // Remove widget from local storage or server
    dispatch(removeWidgetSuccess(widgetId));
  } catch (error) {
    dispatch(removeWidgetFailure(error.message));
  }
};
