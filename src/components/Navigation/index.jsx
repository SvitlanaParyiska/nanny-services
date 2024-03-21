import { useSelector } from 'react-redux';
import { NavBox, NavLinkStyled, NavList } from './Navigation.styled';
import { selectIsLoggedIn } from '../../redux/selectors';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavBox>
      <NavList>
        <li>
          <NavLinkStyled to="/">Home </NavLinkStyled>
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
