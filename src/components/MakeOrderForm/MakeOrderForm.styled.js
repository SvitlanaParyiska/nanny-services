import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  width: 270px;
  height: 30px;
  padding: 5px;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 10px;

  &::placeholder {
    color: var(--span-color--);
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0%;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 40px;

    border-radius: 12px;
    &::placeholder {
      font-size: 16px;
      line-height: 20px;
    }
  }

  @media (min-width: 1440px) {
    width: 100%;
    height: 52px;
    border-radius: 12px;
    &::placeholder {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const InputBig = styled.input`
  width: 270px;
  height: 30px;
  padding: 5px;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 10px;
  &::placeholder {
    color: var(--span-color--);
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0%;
  }

  @media (min-width: 768px) {
    height: 40px;
    width: 430px;
    padding: 16px;
    border-radius: 12px;

    &::placeholder {
      font-size: 14px;
      line-height: 20px;
    }
    @media (min-width: 768px) {
      ::placeholder {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
`;

export const InputAria = styled.input`
  width: 270px;
  height: 70px;
  padding: 5px;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 10px;
  margin-bottom: 10px;

  &::placeholder {
    color: var(--span-color--);
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0%;
    transform: translateY(-20px);
  }

  @media (min-width: 768px) {
    width: 430px;
    height: 100px;
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 24px;

    &::placeholder {
      height: 116px;
      font-size: 16px;
      line-height: 20px;
    }
  }

  @media (min-width: 768px) {
    &::placeholder {
      transform: translateY(-30px);
    }
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

  &:hover {
    /* background-c: #a1b3a8; */
    /* color: var(--main-color--); */
  }
`;
