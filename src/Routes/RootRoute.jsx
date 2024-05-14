import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Category/Category";
import Contact from "../Pages/Contact/Contact";

export default function RootRoute() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <div>error</div>,
    },
    {
      path: "/:category",
      element: <Category />,
      errorElement: <div>error</div>,
    },
    {
      path: "/contact",
      element: <Contact />,
      errorElement: <div>error</div>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
