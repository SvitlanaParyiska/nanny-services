import Select from 'react-select';
import { optionsToFilter } from './filterOptions';
import { InputBox, Title } from './Filter.styled';
import { filterCustomStyle } from './FilterCustomStyles';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/nannySlice';

function Filter() {
  const dispatch = useDispatch();

  const newFilter = value => {
  dispatch(setFilter(value));
  };

  return (
    <InputBox>
      <div>
        <Title>Filters</Title>
        <Select
          options={optionsToFilter}
          aria-label="Filter nanny"
          styles={filterCustomStyle}
          defaultValue={optionsToFilter[0]}
          onChange={e => {
            newFilter(e.value);
          }}
        />
      </div>
    </InputBox>
  );
}

export default Filter;
