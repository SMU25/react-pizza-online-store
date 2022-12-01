import React from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { Button } from "components";
import { PATHNAMES } from "constants/routes";
import { T_PREFIX, GO_BACK_BUTTON_NAME } from "./constants";

const ALT_TEXT_IMG = "Empty cart";

const T_PREFIX_EMPTY_CART = "empty-cart";
const HEADING = "title";
const INFO_TEXT = "text";

export const EmptyCart = ({ img }) => {
  const { t } = useTranslation();

  return (
    <div className="cart cart--empty">
      <h2>{t(`${T_PREFIX_EMPTY_CART} - ${HEADING}`)}</h2>
      <div>
        <Trans i18nKey={`${T_PREFIX_EMPTY_CART} - ${INFO_TEXT}`} />
      </div>
      <img src={img} alt={ALT_TEXT_IMG} />
      <Link to={PATHNAMES.HOME}>
        <Button className="button--black">
          <span>{t(`${T_PREFIX} - ${GO_BACK_BUTTON_NAME}`)}</span>
        </Button>
      </Link>
    </div>
  );
};
