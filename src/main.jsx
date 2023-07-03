import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import "./styles/index.css";
import Home from "../src/views/Home/Home";
import { WORKS_MOCK } from "../src/api/works.mock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={WORKS_MOCK} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
