import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  minusCartItem,
  plusCartItem,
  removeCartItem,
} from "redux/actions/cart";
import { selectCartItems } from "redux/selectors/cart";
import { PizzaCartItem } from "./PizzaCartItem";

export const PizzaCartItems = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const onMinusCartItem = useCallback(
    (id) => dispatch(minusCartItem(id)),
    [dispatch]
  );

  const onPlusCartItem = useCallback(
    (id) => dispatch(plusCartItem(id)),
    [dispatch]
  );

  const onRemoveCartItem = useCallback(
    (id) => dispatch(removeCartItem(id)),
    [dispatch]
  );

  return (
    <div className="content__items content__items--cart">
      {Object.entries(cartItems).map(([id, item]) => (
        <PizzaCartItem
          key={id}
          id={id}
          onMinusCartItem={onMinusCartItem}
          onPlusCartItem={onPlusCartItem}
          onRemoveCartItem={onRemoveCartItem}
          {...item}
        />
      ))}
    </div>
  );
};
