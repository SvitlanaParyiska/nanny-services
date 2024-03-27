import styled from 'styled-components';

export const ItemStyled = styled.li`
  > div {
    display: flex;
    gap: 12px;
  }

  > p {
    margin-top: 16px;
    line-height: 1.25;
  }
`;

export const IconReviwer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 44px;
  height: 44px;
  background-color: rgba(16, 57, 49, 0.2);

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 1;
    color: #103931;
  }
`;

export const RatingBox = styled.div`
  h4 {
    font-weight: 500;
    line-height: 1.25;
    color: #11101c;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    color: #11101c;
  }
`;

export const RatingIconBox = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 1px;
`;
export const IconRating = styled.svg`
  height: 16px;
  width: 16px;
  fill: #ffc531;
  stroke: #ffc531;
`;
