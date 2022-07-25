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
export default notificationSlice.reducer;
