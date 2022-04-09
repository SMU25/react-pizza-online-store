import React, { useState } from "react";

const categoriesPizza = [
  "Все",
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

export const Categories = () => {
  const [isActiveCategory, setIsActiveCategory] = useState(
    categoriesPizza?.[0]
  );

  return (
    <div className="categories">
      <ul>
        {categoriesPizza &&
          categoriesPizza.map((pizza) => (
            <li
              key={pizza}
              className={isActiveCategory === pizza ? "active" : ""}
              onClick={() => setIsActiveCategory(pizza)}
            >
              {pizza}
            </li>
          ))}
      </ul>
    </div>
  );
};
