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


  return (
    <SearchBox
      name="search"
      value={search}
      placeholder= 'Search your products from here'
      buttonText='Search'
      {...props}
    />
  );
};

export default Search;
