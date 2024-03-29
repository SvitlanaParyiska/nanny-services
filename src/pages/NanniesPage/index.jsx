import Filter from 'components/Filter';
import { useDispatch } from 'react-redux';
// import { selectFilter, selectItems } from '../../redux/selectors';
import { useEffect } from 'react';
import NanniesList from 'components/NanniesList';

import { getNanny } from '../../redux/nannyOperations';

function NanniesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNanny());
  }, [dispatch]);

  return (
    <main className="nanny-page">
      <section className="container">
        <Filter />
        <NanniesList />
      </section>
    </main>
  );
}

export default NanniesPage;
