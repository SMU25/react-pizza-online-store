import React, { useRef } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "redux/actions/modal";
import { selectModalState } from "redux/selectors/modal";
import { useClickOutside } from "hooks/useClickOutside";
import { Button } from "components";
import { ReactComponent as Close } from "assets/icons/xmark.svg";

export const ModalWindow = () => {
  const dispatch = useDispatch();

  const { isOpen, title, text, children } = useSelector(selectModalState);

  const modalRef = useRef();

  const onClose = () => {
    if (isOpen) dispatch(hideModal());
  };

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
        {title && <h3 className="truncate">{title}</h3>}
        {text && <p>{text}</p>}
        {children}
      </div>
    </div>
  );
};
