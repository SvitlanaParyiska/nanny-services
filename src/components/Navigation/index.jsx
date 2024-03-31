import { useSelector } from 'react-redux';
import { NavBox, NavLinkStyled, NavList } from './Navigation.styled';
import { selectIsLoggedIn } from '../../redux/selectors';
import sprite from '../../images/sprite.svg';
import { useLocation } from 'react-router-dom';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const currentUrl = useLocation();

  return (
    <NavBox $current={currentUrl.pathname === '/' ? 'main' : ''}>
      <NavList>
        <li>
          <NavLinkStyled to="/" img={`${sprite}#icon-after`}>
            Home
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/nannies" img={`${sprite}#icon-after`}>
            Nannies
          </NavLinkStyled>
        </li>
        {isLoggedIn && (
          <li>
            <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
          </li>
        )}
      </NavList>
    </NavBox>
  );
}

export default Navigation;
