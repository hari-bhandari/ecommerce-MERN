import React from 'react';
// @ts-ignore
import {closeModal, openModal} from '@haribhandari/react-popup-modal';
import MobileSidebar from './MobileSidebar';
import {
    DrawerWrapper,
    LogoWrapper,
    MobileHeaderInnerWrapper,
    MobileHeaderWrapper,
    SearchModalClose,
    SearchModalWrapper,
    SearchWrapper,
} from './header.style';
import Search from './search/search';

import {SearchIcon} from '../../../assets/icons/SearchIcon';
import {LongArrowLeft} from '../../../assets/icons/LongArrowLeft';
import Logo from '../logo/logo';
import CurrencySwitcher from './menu/currency-switcher/CurrencySwitcher';

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
                    <MobileSidebar />
                </DrawerWrapper>
                <LogoWrapper>
                    <Logo/>
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
