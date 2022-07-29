import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import noteReducer from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notification_reducer";

const store = configureStore({
  reducer: {
    anecdotes: noteReducer,
    notifications: notificationReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
