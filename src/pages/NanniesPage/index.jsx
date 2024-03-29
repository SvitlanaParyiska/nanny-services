import Filter from 'components/Filter';
import { useDispatch, useSelector } from 'react-redux';
// import { selectFilter, selectItems } from '../../redux/selectors';
import { useEffect } from 'react';
import NanniesList from 'components/NanniesList';

import { getNanny } from '../../redux/nannyOperations';
import { selectItems } from '../../redux/selectors';

function NanniesPage() {
  const dispatch = useDispatch();
  const nannies = useSelector(selectItems);

  useEffect(() => {
    dispatch(getNanny());
  }, [dispatch]);

  return (
    <main className="nanny-page">
      <section className="container">
        <Filter />
        <NanniesList listToRender={nannies} />
      </section>
    </main>
  );
}

export default NanniesPage;
