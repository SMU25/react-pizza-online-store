import React, { useState, memo } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { CategoryItem } from "./CategoryItem";

const T_PREFIX = "categories";

export const Categories = memo(({ onSelectCategory, categoriesPizza }) => {
  const { t } = useTranslation();

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
            setFilterBy={() => setFilterBy(name)}
            //CHANGE перенести це в компонент
          >
            {t(`${T_PREFIX} - ${name}`)}
          </CategoryItem>
        ))}
      </ul>
    </div>
  );
});
