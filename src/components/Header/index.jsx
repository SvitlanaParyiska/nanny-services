import Navigation from 'components/Navigation';
import { HeaderContainer, HeaderStyled, LogoStyled } from './Header.styled';
import AuthNavigation from 'components/AuthNavigation';
import { useLocation } from 'react-router-dom';

function Header() {
  const currentUrl = useLocation();
  return (
    <HeaderStyled current={currentUrl.pathname === '/' ? 'main' : ''}>
      <HeaderContainer className="header-container">
        <LogoStyled to="/">Nanny.Services</LogoStyled>
        <Navigation />
        <AuthNavigation />
      </HeaderContainer>
    </HeaderStyled>
  );
}

export default Header;
