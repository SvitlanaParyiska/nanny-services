import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  background-color: ${props =>
    props.current ? 'transparent' : 'var(--bg-secondary)'};
  color: var(--color-text-secondary);
  position: fixed;
  z-index: 30;
  width: 100%;
  top: ${props => (props.current ? '32px' : '0')};
  border-bottom: ${props =>
    props.current ? '1px solid rgba(251, 251, 251, 0.4)' : 'transparent'};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.current ? '' : 'space-between')};
`;

export const LogoStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  > img {
    width: 50px;
  }
  > p {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;
  }
`;
