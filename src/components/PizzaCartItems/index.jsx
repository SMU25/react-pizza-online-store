import React from "react";

import { PizzaItem } from "./PizzaItem";

const PizzaCartItems = ({ cartItems }) => {
  return (
    <div className="content__items">
      {Object.entries(cartItems).map(([id, items]) => (
        <PizzaItem key={id} items={items} />
      ))}
    </div>
  );
};

export default PizzaCartItems;
