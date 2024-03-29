import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;

  svg {
    background-color: #fff;
    position: absolute;
    top: 16px;
    right: 16px;
    width: 20px;
    height: 20px;
    fill: #fff;
    stroke: #000;
  }
`;

export const Input = styled.input`
  width: 232px;
  height: 52px;
  padding: 5px;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 10px;
  margin-bottom: 16px;
  color: #11101c;
  font-size: 16px;
  line-height: 1.25;

  &::placeholder {
    color: #11101c;
    font-size: 16px;
    font-weight: 400;
    line-height: 14px;
  }
`;

export const InputBig = styled.input`
  width: 100%;
  height: 52px;
  padding: 5px;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 10px;
  margin-bottom: 16px;
  color: #11101c;
  font-size: 16px;
  line-height: 1.25;

  &::placeholder {
    color: #11101c;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }
`;

export const InputAria = styled.input`
  width: 100%;
  height: 116px;
  padding: 5px;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 10px;
  color: #11101c;
  font-size: 16px;
  line-height: 1.25;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    color: #11101c;
  }
`;

export const ButtonStyled = styled.button`
  border: none;
  border-radius: 30px;
  padding: 16px 217px;
  background-color: #103931;
  color: #fbfbfb;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.01em;
  margin-top: 40px;

  &:hover {
    /* background-c: #a1b3a8; */
    /* color: ; */
  }
`;
