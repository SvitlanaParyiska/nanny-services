import sprite from '../../images/sprite.svg';
import { useEffect, useState } from 'react';
import {
  BackdropBurgerMenu,
  BurgerMenuModalStyled,
  BurgerMenuNavLinkStyled,
  ButtonClose,
  ContainerBurgerMenu,
  IconClose,
  NavListStyled,
} from './BurgerMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { logOut } from '../../redux/authOperations';
import BasicModal from 'components/Modals/BasicModal';
import ModalLogIn from 'components/Modals/ModalLogIn';
import ModalRegistr from 'components/Modals/ModalRegistr';

function BurgerMenu({ onClick }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [modalRegistration, setModalRegistration] = useState(false);
  const [modalLogIn, setModalLogIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick]);

  const handleCloseClick = () => {
    onClick();
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClick();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleModalRegistration = () => {
    setModalRegistration(state => !state);
  };

  const handleModalLogIn = () => {
    setModalLogIn(state => !state);
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <BackdropBurgerMenu onClick={handleBackdropClick}>
      <ContainerBurgerMenu>
        <ButtonClose
          type="button"
          aria-label="Close menu"
          onClick={handleCloseClick}
        >
          <IconClose width="8" height="8">
            <use href={`${sprite}#icon-close`}></use>
          </IconClose>
        </ButtonClose>
        <div>
          <NavListStyled>
            <li>
              <BurgerMenuNavLinkStyled to="/" aria-label="Link to shop page">
                Home
              </BurgerMenuNavLinkStyled>
            </li>
            <li>
              <BurgerMenuNavLinkStyled
                to="/nannies"
                aria-label="Link to nannies page"
              >
                Nannies
              </BurgerMenuNavLinkStyled>
            </li>
            {isLoggedIn && (
              <li>
                <BurgerMenuNavLinkStyled
                  to="/favorites"
                  aria-label="Link to favorites page"
                >
                  Favorites
                </BurgerMenuNavLinkStyled>
              </li>
            )}
            {isLoggedIn ? (
              <>
                <li>
                  <BurgerMenuModalStyled onClick={handleLogOut}>
                    Log out
                  </BurgerMenuModalStyled>
                </li>
              </>
            ) : (
              <>
                <li>
                  <BurgerMenuModalStyled onClick={handleModalLogIn}>
                    Log In
                  </BurgerMenuModalStyled>
                </li>
                <li>
                  <BurgerMenuModalStyled onClick={handleModalRegistration}>
                    Registration
                  </BurgerMenuModalStyled>
                </li>
              </>
            )}
          </NavListStyled>
        </div>
      </ContainerBurgerMenu>
      {modalRegistration && (
        <BasicModal handleModalToggle={handleModalRegistration}>
          <ModalRegistr handleModalToggle={handleModalRegistration} />
        </BasicModal>
      )}
      {modalLogIn && (
        <BasicModal handleModalToggle={handleModalLogIn}>
          <ModalLogIn handleModalToggle={handleModalLogIn} />
        </BasicModal>
      )}
    </BackdropBurgerMenu>
  );
}

export default BurgerMenu;
