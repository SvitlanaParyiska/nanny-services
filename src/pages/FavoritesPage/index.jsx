import Filter from 'components/Filter';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import NanniesList from 'components/NanniesList';

import { LinkStyled, TextStyled } from './FavoritesPage.styled';

function FavoritesPage() {
  const favArray = useSelector(selectFavorites);

  return (
    <main className="nanny-page">
      <section className="container">
        {favArray.length > 0 ? (
          <>
            <Filter />
            <NanniesList listToRender={favArray} />
          </>
        ) : (
          <>
            <TextStyled>Our list of favorites is empty... </TextStyled>
            <LinkStyled to="/nannies">Back to nannies</LinkStyled>
          </>
        )}
      </section>
    </main>
  );
}

export default FavoritesPage;
