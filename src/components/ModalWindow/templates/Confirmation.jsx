import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "components";

const T_PREFIX = "modal-confirmation";
const DEFAULT_CONFIRM_BUTTON_NAME = "yes";
const DEFAULT_CANCEL_BUTTON_NAME = "no";

export const Confirmation = ({
  children,
  confirmButtonName,
  cancelButtonName,
  onConfirm,
  onClose,
}) => {
  const { t } = useTranslation();

  const confirm =
    confirmButtonName || t(`${T_PREFIX} - ${DEFAULT_CONFIRM_BUTTON_NAME}`);

  const cancel =
    cancelButtonName || t(`${T_PREFIX} - ${DEFAULT_CANCEL_BUTTON_NAME}`);

  return (
    <div className="confirmation">
      {children}
      <div className="confirmation__buttons">
        <Button onClick={onConfirm}>{confirm}</Button>
        <Button className="decline-button" onClick={onClose} outline>
          {cancel}
        </Button>
      </div>
    </div>
  );
};
