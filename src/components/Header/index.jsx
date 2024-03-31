import Navigation from 'components/Navigation';
import {
  BurgerIcon,
  HeaderContainer,
  HeaderStyled,
  LogoStyled,
} from './Header.styled';
import AuthNavigation from 'components/AuthNavigation';
import { useLocation } from 'react-router-dom';
import LogoSvg from '../../images/imagesLogo.png';
import MediaQuery from 'react-responsive';
import BurgerMenu from 'components/BurgerMenu';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const currentUrl = useLocation();
  return (
    <HeaderStyled current={currentUrl.pathname === '/' ? 'main' : ''}>
      <HeaderContainer className="header-container">
        <LogoStyled to="/">
          <img src={LogoSvg} alt="logo" />
          <p>Nanny.Services</p>
        </LogoStyled>
        <MediaQuery minWidth={1440}>
          <Navigation />
          <AuthNavigation />
        </MediaQuery>
        <MediaQuery maxWidth={1439}>
          <BurgerIcon aria-label="Menu" onClick={toggleMenu}>
            <use href={`${sprite}#icon-burger-menu`} />
          </BurgerIcon>
        </MediaQuery>
        <MediaQuery maxWidth={1439}>
          {isMenuOpen && <BurgerMenu onClick={toggleMenu} />}
        </MediaQuery>
      </HeaderContainer>
    </HeaderStyled>
  );
}

export default Header;
