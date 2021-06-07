import React, {useState} from 'react';
import {
  StyledForm,
  StyledInput,
  StyledSearchButton,
} from './search-box.style';
import { SearchIcon } from 'assets/icons/SearchIcon';
import CategorySearchSwitcher from "@/header/menu/left-menu/CategorySearchSwitcher";
import SuggestionPopup from "@/header/search/suggestionPopup";
import {CURRENCY_MENU} from "@/header/site-navigation";
import {MenuItem} from "@/header/menu/currency-switcher/CurrencySwitcherStyles";
import * as flagIcons from "@/assets/icons/flags";
interface Props {
  value: string;
  name: string;
  minimal?: boolean;
  className?: string;
  showButtonText?: boolean;
  shadow?: string;
  [key: string]: unknown;
}

import useFetch from "@/hooks/useFetch";
import {API_BASE_URL} from "@/utils/config";
import {CategoryIcon} from "@/header/menu/left-menu/LeftMenu";
// @ts-ignore
const ItemsMenu = ({ onClick,text,category }) => {
  const [data, isLoading, error, reFetch]=useFetch(`${API_BASE_URL}/api/v1/products/autocomplete/?text=${text}&category=${category}`)
  return (
      <>
        {data?.map((item) => (
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
  const [search,setSearch]=useState<string|null>(null)
  const [category,setCategory]=useState<ActiveSearchFilter|null>(null)
  const {
    value,
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
  };
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
                }} text={search} category={"smart phones"}/>} handler={
                <StyledInput
                    type='search'
                    onChange={handleOnChange}
                    value={search}
                    name={name}
                    autoComplete={'off'}/>
              }
              />

              <SearchIcon style={{marginLeft: 16, marginRight: 16}}/>

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
