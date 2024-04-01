import {
  HeroTitle,
  SectionBox,
  SectionStyled,
  SecondTitle,
  NavLinkStyled,
} from './HomePage.styled';
import Statistic from 'components/Statistic';
import MediaQuery from 'react-responsive';
import { ReactComponent as IconArrow } from '../../images/arrow.svg';

function HomePage() {
  return (
    <main>
      <SectionStyled>
        <SectionBox>
          <HeroTitle>Make Life Easier for the Family:</HeroTitle>
          <SecondTitle>Find Babysitters Online for All Occasions</SecondTitle>
          <NavLinkStyled to="/nannies">
            <span>Nanny.Services</span>
            <IconArrow />
          </NavLinkStyled>
          <MediaQuery minWidth={768}>
            <Statistic />
          </MediaQuery>
        </SectionBox>
      </SectionStyled>
    </main>
  );
}

export default HomePage;
