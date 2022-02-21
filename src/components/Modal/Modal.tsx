import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { ReactComponent as Close } from "../../assets/close.svg";
import { createPortal } from "react-dom";
import MoveFocusInside from "react-focus-lock";
import {
  Wrapper,
  StyledModal,
  CloseButton,
  Content,
  Backdrop,
} from "./Modal.style";

export interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  modalContent: JSX.Element;
  headerText: string;
  modalSize: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isOpen,
  handleClose,
  modalContent,
  headerText,
  modalSize,
}) => {
  const [fadeType, setFadeType] = useState<string>("in");

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isOpen) {
      handleClose();
    }
  };

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [isOpen]);

  const handleClick = useCallback(() => {
    setFadeType("out");
    handleClose();
  }, [handleClose]);

  const modal = (
    <React.Fragment>
      <Backdrop onClick={handleClick} />
      <MoveFocusInside>
        <Wrapper
          aria-modal
          aria-labelledby={headerText}
          tabIndex={-1}
          role="dialog"
          className={`fade-${fadeType}`}
        >
          <StyledModal>
            <CloseButton onClick={handleClick}>
              <Close />
            </CloseButton>
            <Content className={`size-${modalSize}`}>{modalContent}</Content>
          </StyledModal>
        </Wrapper>
      </MoveFocusInside>
    </React.Fragment>
  );

  return isOpen ? createPortal(modal, document.body) : null;
};

export interface ModalPropss {
  isOpen: boolean;
  handleClose: () => void;
  modalContent: JSX.Element;
}
