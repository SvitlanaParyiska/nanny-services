import { useSelector } from 'react-redux';
import { NavBox, NavLinkStyled, NavList } from './Navigation.styled';
import { selectIsLoggedIn } from '../../redux/selectors';
import sprite from '../../images/sprite.svg';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavBox>
      <NavList>
        <li>
          <NavLinkStyled to="/" img={`${sprite}#icon-after`}>
            Home{' '}
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
