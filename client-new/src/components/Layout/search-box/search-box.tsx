import React, {useState} from 'react';
import {
  StyledForm,
  StyledInput,
  StyledSearchButton,
} from './search-box.style';
import {useRouter} from "next/router";
import { SearchIcon } from '@/assets/icons/SearchIcon';
import CategorySearchSwitcher from "@/components/Layout/header/menu/left-menu/CategorySearchSwitcher";
import SuggestionPopup from "@/components/Layout/header/search/suggestionPopup";
import {MenuItem} from "@/components/Layout/header/menu/currency-switcher/CurrencySwitcherStyles";
interface Props {
  name: string;
  minimal?: boolean;
  className?: string;
  showButtonText?: boolean;
  shadow?: string;
  [key: string]: unknown;
}

import useFetch from "@/hooks/useFetch";
import {API_BASE_URL, transformCloudinaryImage} from "@/utils/config";
import {CategoryIcon} from "@/components/Layout/header/menu/left-menu/LeftMenu";
// @ts-ignore
const ItemsMenu = ({ onClick,text,category }) => {
  const textQuery=text===''?`text=${text}`:''
  const categoryQuery=category?`category=${category}`:''
  const [data, isLoading, error, reFetch]=useFetch(`${API_BASE_URL}/api/v1/products/autocomplete/?${textQuery}&${categoryQuery}`)

  return (
      <>
        {data?.data?.map((item) => (
            <MenuItem onClick={onClick} key={item._id} value={item.id}>
          <span>
            <CategoryIcon link={item.thumbImage} height={"25px"} width={"25px"}/>
          </span>
              {item.name}
            </MenuItem>
        ))}
      </>
  );
};
export interface ActiveSearchFilter{
  id:string,
  name: string,
  image?:string,
}
export const SearchBox: React.FC<Props> = (props) => {
  const router=useRouter()

  const [search,setSearch]=useState<string>('')
  const [category,setCategory]=useState<ActiveSearchFilter|null>(null)
  const {
    name,
    minimal,
    buttonText,
    className,
    showButtonText = true,
    shadow,
  } = props
  const handleOnChange = (e: { target: { value: any; }; }) => {
    const { value } = e.target;
    setSearch(value)
  };
  const onSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const { pathname, query } = router;
    const { type, ...rest } = query;
      if (type) {
        router.push(
            {
              pathname,
              query: {query:search },
            },
            {
              pathname: `/`,
              query: {query:search },
            }
        );
      }
      else {
        router.push({
          pathname,
          query: {query:search },
        });
      }}
  return (
      <StyledForm
          onSubmit={()=>{}}
          className={className}
          boxShadow={shadow}
          minimal={minimal}
      >
        {minimal ? (
            <>
              <CategorySearchSwitcher setCategory={setCategory} category={category}/>
              <SuggestionPopup content={
                <ItemsMenu onClick={() => {
                }} text={search} category={category?.name}/>} handler={
                <StyledInput
                    type='search'
                    onChange={handleOnChange}
                    value={search}
                    name={name}
                    autoComplete={'off'}/>
              }
              />

              <SearchIcon style={{marginLeft: 16, marginRight: 16}} onClick={onSearch} />

            </>
        ) : (
            <>
              <StyledInput
                  type='search'
                  onChange={handleOnChange}
                  value={search}
                  name={name}
              />
              <StyledSearchButton>
                <SearchIcon style={{marginRight: 10}}/>
                {showButtonText && buttonText}
              </StyledSearchButton>
            </>
        )}
      </StyledForm>
  );
};
