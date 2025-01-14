import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Reset } from "styled-reset";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./contexts/store";
import { GlobalStyle } from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Reset />
      <GlobalStyle />
      <App />
    </Provider>
  </BrowserRouter>
);
