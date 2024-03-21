export const filterCustomStyle = {
  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: '#fff',
    color: isSelected ? '#11101c' : 'rgba(17, 16, 28, 0.3)',
    paddingBottom: '12px',
    border: 'none',
  }),

  container: provided => ({
    ...provided,
    border: `none`,
    borderRadius: '14px',
    outline: 'none',
  }),

  valueContainer: provided => ({
    ...provided,
    padding: '0',
    border: 'none',
    margin: '0px',
  }),

  menu: defaultStyles => ({
    ...defaultStyles,
    paddingTop: '14px',
    borderRadius: '14px',
  }),

  dropdownIndicator: (provided, props) => ({
    ...provided,
    color: '#fbfbfb',
    transform: props.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  control: provided => ({
    ...provided,
    padding: '6px 6px 6px 18px',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '1.11',
    backgroundColor: '#103931',
    borderRadius: ' 14px',
    width: '226px',
    height: '48px',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
    '&, &:is(:hover, :focus)': {
      outline: 'none',
      border: 'none',
    },
  }),

  singleValue: provided => ({
    ...provided,
    color: '#fbfbfb',
    fontWeight: '500',
  }),

  menuList: base => ({
    ...base,
    margin: '0px',
    padding: '0px',
    borderRadius: '14px',
    border: 'none',
    paddingLeft: '6px',
    paddingTop: '8px',
    width: `calc(100% - 7px)`,
    '& > div:last-child': {
      paddingBottom: '12px',
    },
  }),
};
