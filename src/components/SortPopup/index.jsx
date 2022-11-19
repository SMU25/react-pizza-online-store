import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  memo,
} from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { ReactComponent as Arrow } from "assets/icons/arrow-top.svg";
import { SortItem } from "./SortItem";
import { T_PREFIX } from "./constants";

const SORT_BY_TEXT = "sort-by";

export const SortPopup = memo(
  ({ sortBy, onSelectSortBy, sortItemsPizza = [] }) => {
    const { t } = useTranslation();

    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const toggleIsOpenPopup = useCallback(
      () => setIsOpenPopup((prev) => !prev),
      []
    );

    const setSortBy = useCallback(
      (type) => {
        onSelectSortBy(type);
        setIsOpenPopup(false);
      },
      [onSelectSortBy]
    );

    const sortRef = useRef(null);

    const handleOutsideClick = (e) => {
      if (!e.path.includes(sortRef.current)) setIsOpenPopup(false);
    };
    //CHANGE

    useEffect(() => {
      document.body.addEventListener("click", handleOutsideClick);
    }, []);
    //CHANGE

    const activeItem = useMemo(
      () => sortItemsPizza.find(({ type }) => type === sortBy),
      [sortBy, sortItemsPizza]
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
