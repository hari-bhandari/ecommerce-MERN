import React from 'react';
import { useRouter } from 'next/router';
// @ts-ignore
import { openModal, closeModal } from '@redq/reuse-modal';
import Sidebar from './Sidebar';
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
import CurrencySwitcher from './menu/language-switcher/CurrencySwitcher';
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

    const handleSearchModal = () => {
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


    return (
        <MobileHeaderWrapper>

            <MobileHeaderInnerWrapper className={className} >
                <DrawerWrapper>
                    <Sidebar />
                </DrawerWrapper>
                <LogoWrapper>
                    <Logo imageUrl={LogoImage} alt="shop logo" />
                </LogoWrapper>
                <CurrencySwitcher />

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
