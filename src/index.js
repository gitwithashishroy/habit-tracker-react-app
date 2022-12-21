import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
const routerBaseName = process.env.PUBLIC_URL;

console.log("store ", store);
// console.log(" Before STATE", store.getState());

// store.dispatch({
//   type: "ADD_HABITS",
//   habits: [{ name: "Superman" }],
// });

// console.log("After STATE", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode basename={routerBaseName}>
    <BrowserRouter >
    <Provider store={store} >
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
