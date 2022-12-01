import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "redux/actions/cart";
import { selectTotalPrice, selectTotalCount } from "redux/selectors/cart";
import { useModal } from "hooks/useModal";
import { Button, PizzaCartItems, ModalWindow } from "components";
import { PATHNAMES } from "constants/routes";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import { ReactComponent as Trash } from "assets/icons/trash.svg";
import { ReactComponent as ArrowLeft } from "assets/icons/grey-arrow-left.svg";
import emptyCart from "assets/img/empty-cart.png";
import { EmptyCart } from "./EmptyCart";
import { T_PREFIX, GO_BACK_BUTTON_NAME } from "./constants";

const HEADING = "title";
const TOTAL_COUNT_CART = "total-count";
const TOTAL_PRICE_CART = "total-price";
const CLEAR_CART_BUTTON_NAME = "clear-cart";
const CLEAR_MODAL_WINDOW_HEADING = "clear-modal-title";
const CLEAR_MODAL_WINDOW_TEXT = "clear-modal-text";
const ORDER_MODAL_WINDOW_HEADING = "order-modal-title";
const ORDER_MODAL_WINDOW_TEXT = "order-modal-text";
const CONFIRM_BUTTON_NAME = "confirm";
const DECLINE_BUTTON_NAME = "decline";
const BUY_BUTTON_NAME = "buy";

export const Cart = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const {
    closeModal: closeClearModal,
    openModal: openClearModal,
    isOpenModal: isOpenClearModal,
  } = useModal();

  const {
    closeModal: closeOrderModal,
    openModal: openOrderModal,
    isOpenModal: isOpenOrderModal,
  } = useModal();

  const onClearCart = useCallback(() => {
    dispatch(clearCart());
    closeClearModal();
  }, [dispatch, closeClearModal]);

  const onClickOrder = useCallback(() => {
    openOrderModal();
  }, [openOrderModal]);

  const totalPrice = useSelector(selectTotalPrice);
  const totalCount = useSelector(selectTotalCount);

  // cartDetails is used in cartState dependencies, but it doesn't need useMemo because it's a simple array
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cartDetails = [
    {
      i118Key: `${T_PREFIX} - ${TOTAL_COUNT_CART}`,
      i18nParams: { totalCount },
    },
    {
      i118Key: `${T_PREFIX} - ${TOTAL_PRICE_CART}`,
      i18nParams: { totalPrice },
    },
  ];

  const modalWindowButtons = [
    {
      name: t(`${T_PREFIX} - ${CONFIRM_BUTTON_NAME}`),
      onClick: onClearCart,
    },
    {
      name: t(`${T_PREFIX} - ${DECLINE_BUTTON_NAME}`),
      onClick: closeClearModal,
      outline: true,
      className: "decline-button",
    },
  ];

  const cartState = useMemo(() => {
    if (!totalCount) {
      return <EmptyCart img={emptyCart} />;
    } else {
      return (
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              <CartIcon />
              {t(`${T_PREFIX} - ${HEADING}`)}
            </h2>
            <Button
              className="cart__clear"
              onClick={openClearModal}
              disabledDefaultStyle
            >
              <Trash />
              <span> {t(`${T_PREFIX} - ${CLEAR_CART_BUTTON_NAME}`)}</span>
            </Button>
          </div>
          <PizzaCartItems />
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              {cartDetails.map(({ i118Key, i18nParams }) => (
                <p key={i118Key}>
                  <Trans i18nKey={i118Key}>{{ ...i18nParams }}</Trans>
                </p>
              ))}
            </div>
            <div className="cart__bottom-buttons">
              <Link to={PATHNAMES.HOME}>
                <Button className="button--add go-back-btn" outline>
                  <ArrowLeft />
                  <span>{t(`${T_PREFIX} - ${GO_BACK_BUTTON_NAME}`)}</span>
                </Button>
              </Link>
              <Button className="button buy-btn" onClick={onClickOrder}>
                <span>{t(`${T_PREFIX} - ${BUY_BUTTON_NAME}`)}</span>
              </Button>
            </div>
          </div>
        </div>
      );
    }
  }, [totalCount, t, openClearModal, cartDetails, onClickOrder]);

  return (
    <div className="container container--cart">
      <ModalWindow
        isOpen={isOpenClearModal}
        onClose={closeClearModal}
        title={t(`${T_PREFIX} - ${CLEAR_MODAL_WINDOW_HEADING}`)}
        text={t(`${T_PREFIX} - ${CLEAR_MODAL_WINDOW_TEXT}`)}
      >
        {modalWindowButtons.map(({ name, ...button }) => (
          <Button key={name} {...button}>
            {name}
          </Button>
        ))}
      </ModalWindow>
      <ModalWindow
        isOpen={isOpenOrderModal}
        onClose={closeOrderModal}
        title={t(`${T_PREFIX} - ${ORDER_MODAL_WINDOW_HEADING}`)}
        text={t(`${T_PREFIX} - ${ORDER_MODAL_WINDOW_TEXT}`)}
      />
      {cartState}
    </div>
  );
};
