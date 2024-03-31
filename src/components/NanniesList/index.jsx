import { nanoid } from 'nanoid';
import { Button, ListStyled } from './NanniesList.styled';
import NanniesItem from 'components/NanniesItem';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { listByFilter } from 'helpers/filters';

function NanniesList({ listToRender }) {
  const [limit, setLimit] = useState(3);
  const [filterList, setFilterList] = useState(listToRender);

  const filter = useSelector(selectFilter);

  useEffect(() => {
    setFilterList(listByFilter(filter, listToRender));
  }, [listToRender, filter]);

  const handleLoadMore = () => {
    setLimit(prevCount => prevCount + 3);
  };

  return (
    <>
      <ListStyled>
        {filterList?.slice(0, limit).map(nanny => (
          <NanniesItem item={nanny} key={nanoid()} />
        ))}
      </ListStyled>
      {filterList?.length > limit && (
        <Button type="button" onClick={handleLoadMore}>
          Load more
        </Button>
      )}
    </>
  );
}

export default NanniesList;
