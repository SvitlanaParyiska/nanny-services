import styled from 'styled-components';
import bg from 'images/Rectangle.jpg';
import bgRetina from 'images/Rectangle@2x.jpg';
import { Link } from 'react-router-dom';

export const SectionStyled = styled.section`
  background-color: var(--bg-primary);
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 32px;
`;

export const SectionBox = styled.div`
  background-color: var(--bg-secondary);
  height: calc(100vh - 64px);
  padding: 90px 20px 96px 20px;
  border-radius: 30px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  background-image: url(${bg});

  @media screen and (min-width: 768px) {
    padding: 90px 50px 50px 96px;
    background-repeat: no-repeat;
    background-position: right;
    background-size: calc((100% - 64px) / 2) calc(100vh - 64px);
    background-image: url(${bg});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgRetina});
    }
  }
`;

export const HeroTitle = styled.h1`
  margin-top: 163px;
  max-width: 517px;
  font-weight: 500;
  font-size: 30px;
  letter-spacing: -0.03em;
  color: var(--color-text-secondary);

  @media screen and (min-width: 768px) {
    font-size: 70px;
  }
`;

export const SecondTitle = styled.h2`
  margin-top: 28px;
  margin-bottom: 64px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.07;
  letter-spacing: -0.02em;
  color: var(--color-text-secondary);

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const NavLinkStyled = styled(Link)`
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  padding: 18px 50px;
  width: 230px;
  transition: var(--transition);
  color: var(--color-text-secondary);

  span {
    color: inherit;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin-right: 18px;
  }

  &:hover,
  &:focus {
    svg {
      transform-origin: center left;
      transform: rotate(52deg);
    }
  }

  svg {
    display: inline-block;
    width: 18px;
    height: 18px;
  }
`;
