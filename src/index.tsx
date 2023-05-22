import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Detail from "./pages/Detail/Detail";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./state/store";
import Header from "./components/Header";
import RootElement from "./pages/RootElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
   
    children: [
      {
        index: true,
        path: "",
        element: <Main />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "detail/:userId",
        element: <Detail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
