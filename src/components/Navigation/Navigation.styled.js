import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBox = styled.nav`
  margin-right: ${props => (props.$current ? '92px' : '')};
  margin-left: ${props => (props.$current ? 'auto' : '')};
`;
export const NavList = styled.ul`
  display: flex;
  gap: 40px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.01em;
  position: relative;

  &::after {
    content: '';
    display: none;
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: #fff;
    border-radius: 50%;
    bottom: -15px;
    left: calc(50% - 5px);
  }

  &:hover {
    &::after {
      display: block;
    }
  }
`;
