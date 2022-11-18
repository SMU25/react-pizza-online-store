import React from "react";

export const CategoryItem = ({ children, className, setFilterBy }) => (
  <li className={className} onClick={setFilterBy}>
    {children}
  </li>
);
