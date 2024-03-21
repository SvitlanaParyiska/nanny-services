import styled from 'styled-components';

export const ButtonStyle = styled.button`
  background-color: ${props => (props.color ? props.color : 'transparent')};
  color: var(--color-text-secondary);
  font-weight: 500;
  font-size: 16px;
  text-align:center;
  line-height: 1.25;
  letter-spacing: -0.01em;
  border-radius: 30px;
  padding: ${props => props.padding};
  transition: background-color 250ms var(--transition);
  border: ${props =>
    props.color
      ? `1px solid ${props.color}`
      : '1px solid rgba(251, 251, 251, 0.4)'};

  &:hover,
  &:focus {
    /* background: var(--accent); */
  }

  @media screen and (max-width: 768px) {
    padding: 10px 50px;
  }
`;
