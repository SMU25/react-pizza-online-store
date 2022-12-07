import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartState } from "redux/selectors/cart";
import { Home, Cart, NotFound } from "pages";
import { setLocalStorageItem } from "utils/setLocalStorageItem";
import { PATHNAMES } from "constants/routes";
import { PIZZA_CART_STATE_KEY } from "constants/localStorage";

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

const AppRoutes = () => {
  const cartState = useSelector(selectCartState);

  useEffect(() => {
    setLocalStorageItem(PIZZA_CART_STATE_KEY, cartState);
  }, [cartState]);

  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
