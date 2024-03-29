import { nanoid } from 'nanoid';
import { Button, ListStyled } from './NanniesList.styled';
import NanniesItem from 'components/NanniesItem';
import { useSelector } from 'react-redux';
import { selectItems } from '../../redux/selectors';
import { useState } from 'react';

function NanniesList() {
  const [limit, setLimit] = useState(3);
  const nannies = useSelector(selectItems);
  // const selectFilter = useSelector(selectFilter());

  const handleLoadMore = () => {
    setLimit(prevCount => prevCount + 3);
  };

  return (
    <>
      <ListStyled>
        {nannies?.slice(0, limit).map(nanny => (
          <NanniesItem item={nanny} key={nanoid()} />
        ))}
      </ListStyled>
      {nannies?.length > limit && (
        <Button type="button" onClick={handleLoadMore}>
          Load more
        </Button>
      )}
    </>
  );
}

export default NanniesList;
