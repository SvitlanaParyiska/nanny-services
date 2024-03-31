import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  overflow-y: auto;
  display: flex;
  max-height: 100%;
  justify-content: center;
  border-radius: 24px;
  background-color: var(--bg-primary);
  margin-left: 10px;
  margin-right: 10px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  z-index: 10;
  width: 32px;
  height: 32px;
  padding: 0;
`;

export const Icon = styled.svg`
  width: 100%;
  height: 100%;
  scale: 1;
  stroke: var(--color-text-accent);

  transition: scale 200ms var(--transition);

  &:hover,
  &:focus {
    scale: 1.2;
  }
`;
