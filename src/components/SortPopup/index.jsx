import React, { useState, useCallback, useRef, useMemo, memo } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { useClickOutside } from "hooks/useClickOutside";
import { ReactComponent as Arrow } from "assets/icons/arrow-top.svg";
import { SortItem } from "./SortItem";
import { T_PREFIX } from "./constants";

const SORT_BY_TEXT = "sort-by";

export const SortPopup = memo(
  ({ sortBy, onSelectSortBy, sortItemsPizza = [] }) => {
    const { t } = useTranslation();

    const sortRef = useRef(null);

    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const onClosePopup = () => setIsOpenPopup(false);
    const toggleIsOpenPopup = () => setIsOpenPopup((prev) => !prev);

    useClickOutside(sortRef, onClosePopup);

    const activeItem = useMemo(
      () => sortItemsPizza.find(({ type }) => type === sortBy.type),
      [sortBy, sortItemsPizza]
    );

    const setSortBy = useCallback(
      (sortItem) => {
        if (sortItem.type !== activeItem.type) onSelectSortBy(sortItem);
        setIsOpenPopup(false);
      },
      [activeItem, onSelectSortBy]
    );

    return (
      <div ref={sortRef} className="sort">
        <div className="sort__label">
          <Arrow className={cn({ rotated: isOpenPopup })} />
          <b>{t(`${T_PREFIX} - ${SORT_BY_TEXT}`)}</b>
          <span onClick={toggleIsOpenPopup}>
            {t(`${T_PREFIX} - ${activeItem.name}`)}
          </span>
        </div>
        {isOpenPopup && (
          <div className="sort__popup">
            <ul>
              {sortItemsPizza.map(({ id, ...sortItem }) => (
                <SortItem
                  key={id}
                  className={cn({ active: id === activeItem.id })}
                  setSortBy={setSortBy}
                  {...sortItem}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
);
