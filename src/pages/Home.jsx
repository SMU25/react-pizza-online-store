import React, { useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { getPizzaItemsAsync } from "redux/actions/pizzaItems";
import { setCategory, setSortBy } from "redux/actions/filters";
import { selectPizzaItemsState } from "redux/selectors/pizzaItems";
import { selectFiltersState } from "redux/selectors/filters";
import { Categories, SortPopup, PizzaItems } from "components";
import { CATEGORIES_PIZZA } from "constants/categories";
import { SORT_ITEMS_PIZZA } from "constants/sortItems";

const T_PREFIX = "home";
const ACTIVE_CATEGORY_ACTION_KEY = "category";

const Home = () => {
  const { t } = useTranslation();

  const [queryParams, setQueryParams] = useSearchParams();
  const activeCategoryQueryParam = queryParams.get(ACTIVE_CATEGORY_ACTION_KEY);

  const updateCategoryQueryParam = useCallback(
    (category) => setQueryParams(`${ACTIVE_CATEGORY_ACTION_KEY}=${category}`),
    [setQueryParams]
  );

  const dispatch = useDispatch();

  const { items: pizzaItems, isLoading } = useSelector(selectPizzaItemsState);

  const { category, sortBy } = useSelector(selectFiltersState);

  const activeCategory = activeCategoryQueryParam || category;

  useEffect(() => {
    dispatch(getPizzaItemsAsync(activeCategory, sortBy));
  }, [activeCategory, sortBy, dispatch]);

  const onSelectCategory = useCallback(
    (name) => {
      updateCategoryQueryParam(name);
      dispatch(setCategory(name));
    },
    [dispatch, updateCategoryQueryParam]
  );

  const onSelectSortBy = useCallback(
    (sortItem) => dispatch(setSortBy(sortItem)),
    [dispatch]
  );

  useEffect(() => {
    if (!activeCategoryQueryParam) updateCategoryQueryParam(activeCategory);
  }, [activeCategory, activeCategoryQueryParam, updateCategoryQueryParam]);

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

export default Home;
