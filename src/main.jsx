import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./UserStore/store"; // Adjust the path to your store file
import App from "./App";

// Render the App component wrapped with the Provider
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
