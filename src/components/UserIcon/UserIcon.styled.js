import styled from 'styled-components';

export const UserIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-right: 16px;

  > div {
    background-color: #fff;
    padding: 8px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > p {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;
    letter-spacing: -0.01em;
    color: var(--color-text-secondary);
  }
`;

export const IconUserStyled = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--bg-secondary);
  transition: stroke var(--transition);
  display: block;
`;
