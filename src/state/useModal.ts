import { useState, useCallback } from "react";

export const useModal = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const toggleModal = useCallback(
    () => setModalOpen(!isModalOpen),
    [isModalOpen]
  );
  return {
    isModalOpen,
    toggleModal,
  };
};
