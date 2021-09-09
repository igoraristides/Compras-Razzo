import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Router } from "react-router-dom";
import Routes from "./routes/index";
import GlobalStyle from "./styles/global";
import { createBrowserHistory } from "history";
import { theme, muiStyles } from "./styles/theme";
import { ThemeProvider } from "styled-components";

const history = createBrowserHistory();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
        <ToastContainer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
