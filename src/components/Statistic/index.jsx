import {
  StatisticBox,
  FlexBox,
  IconBox,
  StatsStyled,
  IconCheck,
} from './Statistic.styled';
import sprite from '../../images/sprite.svg';

function Statistic() {
  return (
    <StatisticBox>
      <FlexBox>
        <IconBox>
          <IconCheck>
            <use href={`${sprite}#icon-fe_check`} />
          </IconCheck>
        </IconBox>
        <div>
          <p>Experienced nannies</p>
          <StatsStyled>15,000</StatsStyled>
        </div>
      </FlexBox>
    </StatisticBox>
  );
}

export default Statistic;
