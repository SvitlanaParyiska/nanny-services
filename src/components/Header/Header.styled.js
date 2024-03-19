import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  /* position: ${props => (props.current ? 'relative' : 'absolute')};
  left: 0;
  top: 0;
  right: 0; */
  /* padding: 12px 0; */
  border-bottom: ${props =>
    props.current ? '1px solid #EFEDE833' : 'transparent'};

  /* @media screen and (min-width: 768px) {
    padding: 19px 0;
  } */
`;
