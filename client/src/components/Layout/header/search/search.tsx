import React from 'react';
import { SearchBox } from '../../search-box/search-box';
interface Props {
  minimal?: boolean;
  showButtonText?: boolean;
  onSubmit?: () => void;
  [key: string]: unknown;
}

const Search: React.FC<Props> = (props) => {
  return (
    <SearchBox
      name="search"
      placeholder= 'Search your products from here'
      buttonText='Search'
      {...props}
    />
  );
};

export default Search;
