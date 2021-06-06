import React from 'react';
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
  onEnter: (e: React.SyntheticEvent) => void;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  name: string;
  minimal?: boolean;
  className?: string;
  showButtonText?: boolean;
  shadow?: string;
  [key: string]: unknown;
}
const FlagIcon:React.FC<{name:string}> = ({ name }) => {
  // @ts-ignore
  const TagName = flagIcons[name];
  return !!TagName ? <TagName /> : <p>Invalid icon {name}</p>;
};
import useFetch from "@/hooks/useFetch";
import {API_BASE_URL} from "@/utils/config";
import {CategoryIcon} from "@/header/menu/left-menu/LeftMenu";
// @ts-ignore
const LanguageMenu = ({ onClick,query,category }) => {
  const categoryQuery=category?category:''
  const [data, isLoading, error, reFetch]=useFetch(`${API_BASE_URL}/api/v1/products/autocomplete/query=${query}`)
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
export const SearchBox: React.FC<Props> = (props) => {
  const {
    onEnter,
    onChange,
    value,
    name,
    minimal,
    buttonText,
    className,
    showButtonText = true,
    shadow,
  }=props
  return (
    <StyledForm
      onSubmit={onEnter}
      className={className}
      boxShadow={shadow}
      minimal={minimal}
    >
      {minimal ? (
        <>
        <CategorySearchSwitcher/>
          <SuggestionPopup content={<LanguageMenu onClick={()=>{}} />} handler={<StyledInput
              type='search'
              onChange={onChange}
              value={value}
              name={name}
              autoComplete={'off'}
          />}/>

          <SearchIcon style={{ marginLeft: 16, marginRight: 16 }} />

        </>
      ) : (
        <>
          <StyledInput
            type='search'
            onChange={onChange}
            value={value}
            name={name}
          />
          <StyledSearchButton>
            <SearchIcon style={{ marginRight: 10 }} />
            {showButtonText && buttonText}
          </StyledSearchButton>
        </>
      )}
    </StyledForm>
  );
};
