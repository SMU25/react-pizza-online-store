import { useState } from "react";

export const useModal = (isOpen = false) => {
  const [isOpenModal, setIsOpenModal] = useState(isOpen);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  return { isOpenModal, openModal, closeModal };
};
