import { Field } from 'formik';
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

  input {
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
  }
`;

export const FieldStyled = styled(Field)`
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
  border: 1px solid transparent;
  width: 100%;
  border-radius: 30px;
  padding: 16px 16px;
  text-align: center;
  background-color: #103931;
  color: #fbfbfb;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.01em;
  margin-top: 40px;
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: #fbfbfb;
    color: #103931;
    border: 1px solid #103931;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.142;
  margin-top: 4px;
`;
