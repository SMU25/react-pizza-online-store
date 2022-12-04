import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "redux/actions/cart";
import { selectTotalPrice, selectTotalCount } from "redux/selectors/cart";
import { showModal, hideModal } from "redux/actions/modal";
import { Button, PizzaCartItems } from "components";
import { Confirmation } from "components/ModalWindow/templates/Confirmation";
import { Alert } from "components/ModalWindow/templates/Alert";
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
const OKAY_BUTTON_NAME = "okay";
const BUY_BUTTON_NAME = "buy";

const Cart = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => dispatch(hideModal()), [dispatch]);

  const onClearCart = useCallback(() => {
    dispatch(clearCart());
    onCloseModal();
  }, [dispatch, onCloseModal]);

  const totalPrice = useSelector(selectTotalPrice);
  const totalCount = useSelector(selectTotalCount);

  const cartDetails = useMemo(
    () => [
      {
        i118Key: `${T_PREFIX} - ${TOTAL_COUNT_CART}`,
        i18nParams: { totalCount },
      },
      {
        i118Key: `${T_PREFIX} - ${TOTAL_PRICE_CART}`,
        i18nParams: { totalPrice },
      },
    ],
    [totalCount, totalPrice]
  );

  const showClearCartModal = useCallback(
    () =>
      dispatch(
        showModal({
          title: t(`${T_PREFIX} - ${CLEAR_MODAL_WINDOW_HEADING}`),
          text: t(`${T_PREFIX} - ${CLEAR_MODAL_WINDOW_TEXT}`),
          children: (
            <Confirmation
              confirmButtonName={t(`${T_PREFIX} - ${CONFIRM_BUTTON_NAME}`)}
              cancelButtonName={t(`${T_PREFIX} - ${DECLINE_BUTTON_NAME}`)}
              onConfirm={onClearCart}
              onClose={onCloseModal}
            />
          ),
        })
      ),
    [dispatch, onClearCart, onCloseModal, t]
  );

  const showOrderModal = useCallback(
    () =>
      dispatch(
        showModal({
          title: t(`${T_PREFIX} - ${ORDER_MODAL_WINDOW_HEADING}`),
          text: t(`${T_PREFIX} - ${ORDER_MODAL_WINDOW_TEXT}`),
          children: (
            <Alert
              approvalButtonName={t(`${T_PREFIX} - ${OKAY_BUTTON_NAME}`)}
              onClose={onCloseModal}
            />
          ),
        })
      ),
    [dispatch, onCloseModal, t]
  );

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
              onClick={showClearCartModal}
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
              <Button className="button buy-btn" onClick={showOrderModal}>
                <span>{t(`${T_PREFIX} - ${BUY_BUTTON_NAME}`)}</span>
              </Button>
            </div>
          </div>
        </div>
      );
    }
  }, [totalCount, cartDetails, showClearCartModal, showOrderModal, t]);

  return <div className="container container--cart">{cartState}</div>;
};

export default Cart;
