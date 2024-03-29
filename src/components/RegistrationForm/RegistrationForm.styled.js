import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin-bottom: 40px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 18px;
  max-width: 438px;
  position: relative;
  width: 100%;

  label {
    font-size: 16px;
    color: var(--color-text-accent);
    font-weight: 400;
    line-height: 1.25;
  }

  input {
    width: 100%;
    padding: 16px 18px;
    font-size: 16px;
    color: var(--color-text-accent);
    font-weight: 400;
    line-height: 1.25;
    border: 1px solid rgba(17, 16, 28, 0.1);
    border-radius: 12px;
    outline: none;
    transition: all var(--transition);

    &:focus {
      border-color: var(--color-text-accent);
    }

    &:hover {
      border-color: var(--bg-secondary);
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: inline-block;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.142;
  margin-top: 4px;
`;

export const IconPasswordWrapper = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  bottom: 17px;
  right: 14px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const SvgPasswordIcon = styled.svg`
  width: 20px;
  height: 20px;
`;
