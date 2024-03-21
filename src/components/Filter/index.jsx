// import { useState } from 'react';
import Select from 'react-select';
import { optionsToFilter } from './filterOptions';
import { InputBox, Title } from './Filter.styled';
import { filterCustomStyle } from './FilterCustomStyles';

function Filter() {
  //   const [selectedFilter, setSelectedLanguage] = useState('');
  return (
    <InputBox>
      <div>
        <Title>Filters</Title>
        <Select
          options={optionsToFilter}
          aria-label="Filter nanny"
          styles={filterCustomStyle}
          defaultValue={optionsToFilter[0]}
          //   onChange={e => {
          //     setSelectedLanguage(e.value);
          //   }}
        />
      </div>
    </InputBox>
  );
}

export default Filter;
