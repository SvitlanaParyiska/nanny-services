import {
  HeroTitle,
  SectionBox,
  SectionStyled,
  SecondTitle,
  NavLinkStyled,
} from './HomePage.styled';
import Statistic from 'components/Statistic';
import sprite from '../../images/sprite.svg';

function HomePage() {
  return (
    <main>
      <SectionStyled>
        <SectionBox>
          <HeroTitle>Make Life Easier for the Family:</HeroTitle>
          <SecondTitle>Find Babysitters Online for All Occasions</SecondTitle>
          <NavLinkStyled to="/nannies">
            <p>Nanny.Services</p>
            <svg aria-label="icon-arrow-right">
              <use
                href={`${sprite}#icon-arrow-right2`}
                alt="icon-arrow-right"
              />
            </svg>
          </NavLinkStyled>
          <Statistic />
        </SectionBox>
      </SectionStyled>
    </main>
  );
}

export default HomePage;
