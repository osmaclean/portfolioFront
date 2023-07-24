import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import "./styles/index.css";
import Home from "../src/views/Home/Home";
import { WORKS_MOCK } from "../src/api/works.mock";
import ThemeContextProvider from "./hooks/useTheme";
import "./api/i18n";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeContextProvider>
        <Home data={WORKS_MOCK} />
      </ThemeContextProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
