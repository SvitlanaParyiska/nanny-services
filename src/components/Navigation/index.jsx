import { useSelector } from 'react-redux';
import { NavBox, NavLinkStyled, NavList } from './Navigation.styled';
import { selectIsLoggedIn } from '../../redux/selectors';
import { useLocation } from 'react-router-dom';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const currentUrl = useLocation();

  return (
    <NavBox $current={currentUrl.pathname === '/' ? 'main' : ''}>
      <NavList>
        <li>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/nannies">Nannies</NavLinkStyled>
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
