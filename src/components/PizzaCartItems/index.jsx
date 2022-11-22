import React from "react";
import { PizzaCartItem } from "./PizzaCartItem";

export const PizzaCartItems = ({ cartItems }) => (
  <div className="content__items">
    {Object.entries(cartItems).map(([id, items]) => (
      <PizzaCartItem key={id} id={id} items={items} />
    ))}
  </div>
);
