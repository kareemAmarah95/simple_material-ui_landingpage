import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { green, indigo } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);