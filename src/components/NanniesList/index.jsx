import { nanoid } from 'nanoid';
import { ListStyled } from './NanniesList.styled';
import NanniesItem from 'components/NanniesItem';
import { useSelector } from 'react-redux';
import { selectItems } from '../../redux/selectors';

function NanniesList() {
  const nannies = useSelector(selectItems);

  return (
    <ListStyled>
      {nannies?.length > 0 &&
        nannies.map(nanny => <NanniesItem item={nanny} key={nanoid()} />)}
    </ListStyled>
  );
}

export default NanniesList;
