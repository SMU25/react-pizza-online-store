import React, { memo } from "react";
import cn from "classnames";
import { CategoryItem } from "./CategoryItem";

export const Categories = memo(
  ({ activeCategory, onSelectCategory, categoriesPizza }) => (
    <div className="categories scrollbar-thumb-custom">
      <ul>
        {categoriesPizza.map(({ id, name }) => (
          <CategoryItem
            key={id}
            className={cn({ active: activeCategory === name })}
            name={name}
            setFilterBy={onSelectCategory}
          />
        ))}
      </ul>
    </div>
  )
);
