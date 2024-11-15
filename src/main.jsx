import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
