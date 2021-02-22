import React, {useState} from 'react';
import { SearchBox } from '../../components/search-box/search-box';
import { useRouter } from 'next/router';

interface Props {
  minimal?: boolean;
  showButtonText?: boolean;
  onSubmit?: () => void;
  [key: string]: unknown;
}

const Search: React.FC<Props> = (props) => {
  const[search,setSearch]=useState<string>('')
  const router = useRouter();

  const handleOnChange = (e: { target: { value: any; }; }) => {
    const { value } = e.target;
    setSearch(value)
  };
  const { pathname, query } = router;
  const onSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const { type, ...rest } = query;
  };
  return (
    <SearchBox
      onEnter={onSearch}
      onChange={handleOnChange}
      name="search"
      value={search}
      placeholder= 'Search your products from here'
      categoryType={query.type || 'restaurant'}
      buttonText='Search'
      {...props}
    />
  );
};

export default Search;
