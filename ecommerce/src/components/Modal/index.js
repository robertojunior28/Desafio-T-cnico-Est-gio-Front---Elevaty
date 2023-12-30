import React, { useRef, useEffect } from "react";
import { ModalOverlay, ModalContent, CloseButton } from "./styles";

const Modal = (props) => {
  const modalOverlayRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalOverlayRef.current && !modalOverlayRef.current.contains(event.target)) {
        props.onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [props]);

  return (
    <ModalOverlay ref={modalOverlayRef}>
      <ModalContent>
        <CloseButton onClick={props.onClose}>&times;</CloseButton>
        {props.children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;