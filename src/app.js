import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app-router";

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </React.Fragment>
  );
}