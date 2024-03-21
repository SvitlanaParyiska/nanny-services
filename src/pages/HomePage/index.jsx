import {
  HeroTitle,
  SectionBox,
  SectionStyled,
  SecondTitle,
  NavLinkStyled,
} from './HomePage.styled';
import Statistic from 'components/Statistic';

function HomePage() {
  return (
    <main>
      <SectionStyled>
        <SectionBox>
          <HeroTitle>Make Life Easier for the Family:</HeroTitle>
          <SecondTitle>Find Babysitters Online for All Occasions</SecondTitle>
          <NavLinkStyled to="/nannies">Get started</NavLinkStyled>
          <Statistic />
        </SectionBox>
      </SectionStyled>
    </main>
  );
}

export default HomePage;
