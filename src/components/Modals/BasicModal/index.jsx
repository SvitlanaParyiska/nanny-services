import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ButtonClose, Icon, ModalWrapper } from './BasicModal.styled';
import sprite from '../../../images/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

function BasicModal({ children, handleModalToggle }) {
  useEffect(() => {
    const body = document.body;
    body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = 'visible';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        handleModalToggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleModalToggle]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      handleModalToggle();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWrapper>
        <ButtonClose type="button" onClick={handleModalToggle}>
          <Icon>
            <use href={`${sprite}#icon-close`}></use>
          </Icon>
        </ButtonClose>
        {children}
      </ModalWrapper>
    </Backdrop>,
    modalRoot
  );
}

export default BasicModal;
