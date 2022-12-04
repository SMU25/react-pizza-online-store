import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "components";

const T_PREFIX = "modal-alert";
const DEFAULT_APPROVAL_BUTTON_NAME = "ok";

export const Alert = ({ children, approvalButtonName, onClose }) => {
  const { t } = useTranslation();

  const approval =
    approvalButtonName || t(`${T_PREFIX} - ${DEFAULT_APPROVAL_BUTTON_NAME}`);

  return (
    <div className="alert">
      {children}
      <Button className="decline-button" onClick={onClose} outline>
        {approval}
      </Button>
    </div>
  );
};
