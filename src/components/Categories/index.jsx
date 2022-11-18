import React, { useState, memo } from "react";
import cn from "classnames";
import { CategoryItem } from "./CategoryItem";

export const Categories = memo(({ onSelectCategory, categoriesPizza }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  //CHANGE delete state

  const setFilterBy = (name) => {
    setActiveCategory(name);
    onSelectCategory(name);
    //CHANGE
  };

  return (
    <div className="categories">
      <ul>
        {categoriesPizza.map(({ id, name }) => (
          <CategoryItem
            key={id}
            className={cn({ active: activeCategory === name })}
            name={name}
            setFilterBy={setFilterBy}
          />
        ))}
      </ul>
    </div>
  );
});
