import { nanoid } from 'nanoid';
import { Button, ListStyled } from './NanniesList.styled';
import NanniesItem from 'components/NanniesItem';
import { useState } from 'react';

function NanniesList({ listToRender }) {
  const [limit, setLimit] = useState(3);

  // const selectFilter = useSelector(selectFilter());

  const handleLoadMore = () => {
    setLimit(prevCount => prevCount + 3);
  };

  return (
    <>
      <ListStyled>
        {listToRender?.slice(0, limit).map(nanny => (
          <NanniesItem item={nanny} key={nanoid()} />
        ))}
      </ListStyled>
      {listToRender?.length > limit && (
        <Button type="button" onClick={handleLoadMore}>
          Load more
        </Button>
      )}
    </>
  );
}

export default NanniesList;
