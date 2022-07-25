import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import anecdoteService from "./services/anecdotes";
import noteReducer from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notification_reducer";

const store = configureStore({
  reducer: {
    anecdotes: noteReducer,
    notifications: notificationReducer,
  },
});

console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
