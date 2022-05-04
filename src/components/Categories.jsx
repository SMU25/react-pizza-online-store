import React, { useState, memo } from "react";

export const Categories = memo(({ onSelectCategory, categoriesPizza }) => {
  const [isActiveCategory, setIsActiveCategory] = useState(null);

  const onSelectItem = (name) => {
    setIsActiveCategory(name);
    onSelectCategory(name);
  };

  return (
    <div className="categories">
      <ul>
        {categoriesPizza &&
          categoriesPizza.map((category) => (
            <li
              key={category.type}
              className={isActiveCategory === category.type ? "active" : ""}
              onClick={() => onSelectItem(category.type)}
            >
              {category.name}
            </li>
          ))}
      </ul>
    </div>
  );
});
