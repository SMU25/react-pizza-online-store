import React, { useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { getPizzaItems } from "redux/actions/pizzaItems";
import { setCategory, setSortBy } from "redux/actions/filters";
import { Categories, SortPopup, PizzaItems } from "components";
import { CATEGORIES_PIZZA } from "constants/categories";
import { SORT_ITEMS_PIZZA } from "constants/sortItems";

const T_PREFIX = "home";
const ACTIVE_CATEGORY_ACTION_KEY = "category";

//CHANGE add default export

export const Home = () => {
  const { t } = useTranslation();

  const [queryParams, setQueryParams] = useSearchParams();

  const dispatch = useDispatch();

  const { items: pizzaItems, isLoading } = useSelector(
    ({ pizzaItems }) => pizzaItems
  );
  //CHANGE винести в селектори

  const { category, sortBy } = useSelector(({ filters }) => filters);
  //CHANGE винести в селектори

  const activeCategory =
    queryParams.get(ACTIVE_CATEGORY_ACTION_KEY) || category;

  useEffect(() => {
    dispatch(getPizzaItems(activeCategory, sortBy));
  }, [activeCategory, sortBy, dispatch]);

  const onSelectCategory = useCallback(
    (name) => {
      setQueryParams(`${ACTIVE_CATEGORY_ACTION_KEY}=${name}`);
      dispatch(setCategory(name));
    },
    [dispatch, setQueryParams]
  );

  const onSelectSortBy = useCallback(
    (sortItem) => dispatch(setSortBy(sortItem)),
    [dispatch]
  );

  useEffect(() => {
    if (!queryParams.get(ACTIVE_CATEGORY_ACTION_KEY))
      setQueryParams(`${ACTIVE_CATEGORY_ACTION_KEY}=${activeCategory}`);
  }, [activeCategory, queryParams, setQueryParams]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          onSelectCategory={onSelectCategory}
          categoriesPizza={CATEGORIES_PIZZA}
        />
        <SortPopup
          sortBy={sortBy}
          onSelectSortBy={onSelectSortBy}
          sortItemsPizza={SORT_ITEMS_PIZZA}
        />
      </div>
      <h2 className="content__title">{t(`${T_PREFIX} - ${activeCategory}`)}</h2>
      <PizzaItems pizzaItems={pizzaItems} isLoading={isLoading} />
    </div>
  );
};
