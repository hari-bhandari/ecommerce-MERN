import React from 'react';
import { useRouter } from 'next/router';
// @ts-ignore
import { Modal, openModal, closeModal } from '@redq/reuse-modal';
import MobileDrawer from './mobile-drawer';
import {
  MobileHeaderWrapper,
  MobileHeaderInnerWrapper,
  DrawerWrapper,
  LogoWrapper,
  SearchWrapper,
  SearchModalWrapper,
  SearchModalClose,
} from './header.style';
import Search from './search/search';
import LogoImage from '../assets/images/logo.svg';

import { SearchIcon } from '../assets/icons/SearchIcon';
import { LongArrowLeft } from '../assets/icons/LongArrowLeft';
import Logo from '../logo/logo';
import LanguageSwitcher from './menu/language-switcher/language-switcher';
type MobileHeaderProps = {
  className?: string;
  closeSearch?: any;
};

const SearchModal: React.FC<{}> = () => {
  const onSubmit = () => {
    closeModal();
  };
  return (
    <SearchModalWrapper>
      <SearchModalClose type="submit" onClick={() => closeModal()}>
        <LongArrowLeft />
      </SearchModalClose>
      <Search
        className="header-modal-search"
        showButtonText={false}
        onSubmit={onSubmit}
      />
    </SearchModalWrapper>
  );
};

const MobileHeader: React.FC<MobileHeaderProps> = ({ className }) => {
  const { pathname, query } = useRouter();


  const handleSearchModal = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    openModal({
      show: true,
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'search-modal-mobile',
        width: '100%',
        height: '100%',
      },
      closeOnClickOutside: false,
      component: SearchModal,
      closeComponent: () => <div />,
    });
  };
  const type = pathname === '/restaurant' ? 'restaurant' : query.type;


  return (
    <MobileHeaderWrapper>
      <MobileHeaderInnerWrapper className={className} >
        <DrawerWrapper>
          <MobileDrawer />
        </DrawerWrapper>

        <LogoWrapper>
          <Logo imageUrl={LogoImage} alt="shop logo" />
        </LogoWrapper>

        <LanguageSwitcher />

          <SearchWrapper
            onClick={handleSearchModal}
            className="searchIconWrapper"
          >
            <SearchIcon />
          </SearchWrapper>
      </MobileHeaderInnerWrapper>
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
