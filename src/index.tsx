import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import selectionSlice from "./reduxToolKit/selectionSlice";
import spinnerSlice from "./reduxToolKit/spinnerSlice";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = configureStore({
  reducer: {
    selectionSlice,
    spinnerSlice,
  },
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
export type RootState = ReturnType<typeof store.getState>;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
