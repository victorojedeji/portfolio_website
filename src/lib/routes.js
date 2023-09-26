import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import RegisterPage from "../pages/register";
import ContactPage from "../pages/contact";
import Layout from "../pages/layout";
import ErrorPage from "../pages/error";

// export const REGISTER = "/register";
// export const CONTACT = "/contact";
export const HOME = "/";
export const LAYOUT = "/";
export const ERROR = "*";

export const router = createBrowserRouter([
  {
    path: LAYOUT,
    element: <Layout />,
    children: [
      {
        path: HOME,
        element: <HomePage />,
      },
      // {
      //   path: CONTACT,
      //   element: <ContactPage />,
      // },
      // {
      //   path: REGISTER,
      //   element: <RegisterPage />,
      // },
      {
        path: ERROR,
        element: <ErrorPage />,
      }
    ],
  },
]);
