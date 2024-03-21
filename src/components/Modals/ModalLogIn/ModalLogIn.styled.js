import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  width: 100%;

  @media screen and (min-width: 586px) {
    padding: 64px;
    width: 565px;
  }
`;

export const Title = styled.h2`
  color: var(--color-text-accent);
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  line-height: 1.25;
  margin-bottom: 20px;
`;
