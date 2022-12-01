import React, { useRef } from "react";
import cn from "classnames";
import { useClickOutside } from "hooks/useClickOutside";
import { Button } from "components";
import { ReactComponent as Close } from "assets/icons/xmark.svg";

export const ModalWindow = ({ children, isOpen, title, text, onClose }) => {
  const modalRef = useRef();

  useClickOutside(modalRef, onClose);

  return (
    <div className={cn({ overlay: isOpen })}>
      <div
        ref={modalRef}
        className={cn("modal-window", { "modal-window--is-open": isOpen })}
      >
        <Button className="close-button" onClick={onClose} disabledDefaultStyle>
          <Close />
        </Button>
        <h3 className="truncate">{title}</h3>
        <p className="truncate">{text}</p>
        <div className="modal-window__children-container">{children}</div>
      </div>
    </div>
  );
};
