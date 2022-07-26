import { createSlice } from "@reduxjs/toolkit";

let initialState = "";

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addMessage(state, action) {
      let message = action.payload;
      return message;
    },
    removeMessage(state, action) {
      return "";
    },
  },
});

export const { addMessage, removeMessage } = notificationSlice.actions;

export const setNotification = (message, delay) => async (dispatch) => {
  dispatch(addMessage(message));
  setTimeout(() => {
    dispatch(removeMessage());
  }, delay * 1000);
};
export default notificationSlice.reducer;
