import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 64px;
  max-width: 600px;
  height: 100%;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #11101c;
`;

export const Text = styled.p`
  margin-top: 20px;
  line-height: 1.25;
  color: rgba(17, 16, 28, 0.5);
`;

export const NannyInfoBox = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  gap: 14px;

  img {
    border-radius: 15px;
    width: 44px;
    height: 44px;
    overflow: hidden;
  }

  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33333;
    color: #8a8a89;
  }

  h4 {
    margin-top: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #11101c;
  }
`;
