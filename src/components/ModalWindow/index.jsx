import React from "react";
import cn from "classnames";
import { ReactComponent as Close } from "assets/icons/xmark.svg";
import { Button } from "components";

export const ModalWindow = ({ children, isOpen, title, text, onClose }) => (
  <div className={cn({ overlay: isOpen })}>
    <div className={cn("modal-window", { "modal-window--is-open": isOpen })}>
      <Button className="close-button" onClick={onClose} disabledDefaultStyle>
        <Close />
      </Button>
      <h3 className="truncate">{title}</h3>
      <p className="truncate">{text}</p>
      <div className="modal-window__children-container">{children}</div>
    </div>
  </div>
);
