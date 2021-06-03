import React from 'react';
import {
  StyledForm,
  StyledInput,
  StyledSearchButton,
} from './search-box.style';
import { SearchIcon } from 'assets/icons/SearchIcon';
import CategorySearchSwitcher from "@/header/menu/left-menu/CategorySearchSwitcher";
import SuggestionPopup from "@/header/search/suggestionPopup";
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
          <SuggestionPopup content={<div>Haru</div>} handler={<StyledInput
              type='search'
              onChange={onChange}
              value={value}
              name={name}
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
