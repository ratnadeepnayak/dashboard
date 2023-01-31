import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./api/apiSlice";
import { DarkModeContextProvider } from "./context/darkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </ApiProvider>
  </React.StrictMode>
);
