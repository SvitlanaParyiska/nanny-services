import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBox = styled.nav``;
export const NavList = styled.ul`
  display: flex;
  gap: 40px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.01em;
`;
