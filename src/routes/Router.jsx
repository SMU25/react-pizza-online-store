import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Cart, NotFound } from "pages";
import { PATHNAMES } from "constants/routes";

const ROUTES = [
  {
    element: <NotFound />,
    path: PATHNAMES.NOT_FOUND,
  },
  {
    element: <Home />,
    path: PATHNAMES.HOME,
  },
  {
    element: <Cart />,
    path: PATHNAMES.CART,
    exact: true,
  },
];

const AppRoutes = () => (
  <Routes>
    {ROUTES.map((route) => (
      <Route key={route.path} {...route} />
    ))}
  </Routes>
);

export default AppRoutes;
