import styled from 'styled-components';

export const StatisticBox = styled.div`
  padding: 32px;
  background-color: var(--bg-primary);
  border-radius: 20px;
  width: 284px;
  margin-left: auto;
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 16px;
`;
export const IconBox = styled.div`
  background-color: var(--bg-secondary);
  padding: 12px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatsStyled = styled.p`
  margin-top: 6px;
  font-weight: 700;
  font-size: 24px;
  color: var(--color-text-accent);
`;

export const IconCheck = styled.svg`
  width: 30px;
  height: 30px;
  fill: #fbfbfb;
  stroke: #fbfbfb;
  transition: stroke var(--transition);
  display: block;
`;
