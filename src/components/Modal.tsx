import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { Context } from '../context/Context';

interface Props {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
}

export const Modal = ({ setIsOpenModal, isOpenModal }: Props) => {
  const modalRef = useRef<HTMLHeadingElement>(null);

  const closeModal = (e: React.MouseEvent) => {
    if (modalRef.current === e.target) {
      setIsOpenModal(false);
    }
  };

  const closeModalWithEscapeKey = useCallback(
    (e: any) => {
      if (e.key === 'Escape' && isOpenModal) {
        setIsOpenModal(false);
      }
    },
    [setIsOpenModal, isOpenModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModalWithEscapeKey);
    return () =>
      document.removeEventListener('keydown', closeModalWithEscapeKey);
  }, [closeModalWithEscapeKey]);

  const { notification } = useContext(Context);
  const handleClick = () => {
    notification(true);
    setIsOpenModal(false);
  };
  return (
    <>
      <div className="modal" ref={modalRef} onClick={(e) => closeModal(e)}>
        <div className="modal__container">
          <span
            className="modal__x-close"
            onClick={() => setIsOpenModal(false)}>
            x
          </span>
          <div className="modal__title">
            ¿Estas de acuerdo con la información ingresada?
          </div>
          <div className="modal__btns">
            <button
              className="modal__btn-cancel"
              onClick={() => setIsOpenModal(false)}>
              Cancelar
            </button>
            <button className="modal__btn-success" onClick={handleClick}>
              Continuar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
