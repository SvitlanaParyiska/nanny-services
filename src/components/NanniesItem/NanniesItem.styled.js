import styled from 'styled-components';

export const ItemStyled = styled.li`
  position: relative;
  padding: 24px;

  border-radius: 24px;
  background-color: var(--bg-primary);

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 24px;
  }
`;

export const Thumb = styled.div`
  width: 100%;
`;

export const ImageBorder = styled.div`
  border: 2px solid rgba(240, 63, 59, 0.2);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  width: 120px;
  height: 120px;

  img {
    border-radius: 15px;
    overflow: hidden;
    width: 96px;
    height: 96px;
  }
`;

export const NameBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-right: 98px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  p {
    font-weight: 500;
    line-height: 1.5;
    color: #8a8a89;
  }

  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 1;
    color: #11101c;
  }
`;

export const LocationThumb = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  p {
    font-weight: 500;
    list-style: 1.5;
    color: #11101c;

    span {
      color: #38cd3e;
    }
  }

  div {
    display: flex;
    gap: 4px;
    align-items: center;
  }
`;
export const RatingStyled = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  border-left: 1px solid rgba(17, 16, 28, 0.2);
  border-right: 1px solid rgba(17, 16, 28, 0.2);
`;

export const IconFavAdd = styled.svg`
  position: absolute;
  top: 24px;
  right: 24px;
  height: 26px;
  width: 26px;
  stroke: var(--color-text-accent);
  fill: none;
  cursor: pointer;
`;

export const IconLoc = styled.svg`
  height: 16px;
  width: 16px;
  stroke: var(--color-text-accent);
  fill: none;
`;

export const IconRating = styled.svg`
  height: 16px;
  width: 16px;
  fill: #ffc531;
  stroke: #ffc531;
`;

export const AgeBox = styled.ul`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  > li {
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: 500;
    line-height: 1.5;
    color: #8a8a89;
    border-radius: 24px;
    padding: 8px 16px;
    background-color: #f3f3f3;

    span {
      color: #11101c;
    }
  }
`;

export const CharactersBox = styled.ul`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  > li {
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: 500;
    line-height: 1.5;
    color: #8a8a89;
    border-radius: 24px;
    padding: 8px 16px;
    background-color: #f3f3f3;

    span {
      color: #11101c;
    }
  }
`;

export const NannyAboutText = styled.p`
  margin-top: 24px;
  line-height: 1.25;
  color: rgba(17, 16, 28, 0.5);
`;

export const ButtonReadMore = styled.button`
  margin-top: 16px;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #11101c;
  border: none;
  background-color: transparent;
  padding: 0;
  transition: var(--transition);

  &:hover {
    color: var(--bg-secondary);
  }
`;

export const ReviewsList = styled.ul`
  margin-top: 48px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ButtonMake = styled.button`
  border: 1px solid transparent;
  border-radius: 30px;
  padding: 14px 28px;
  background-color: #103931;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: #fbfbfb;
    color: var(--bg-secondary);
    border: 1px solid #103931;
  }
`;
