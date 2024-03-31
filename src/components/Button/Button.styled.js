import styled from 'styled-components';

export const ButtonStyle = styled.button`
  background-color: ${props => (props.color ? props.color : 'transparent')};
  color: var(--color-text-secondary);
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  line-height: 1.25;
  letter-spacing: -0.01em;
  border-radius: 30px;
  padding: ${props => props.$padding};
  border: ${props =>
    props.color
      ? `1px solid ${props.color}`
      : '1px solid rgba(251, 251, 251, 0.4)'};
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: #fbfbfb;
    color: #103931;
    border: 1px solid #103931;
  }
`;
