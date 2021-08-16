import React, {useState} from 'react';
// @ts-ignore
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
import {Modal} from 'react-responsive-modal';

import Search from './search/search';

import {SearchIcon} from '../../../assets/icons/SearchIcon';
import {LongArrowLeft} from '../../../assets/icons/LongArrowLeft';
import Logo from '../logo/logo';
import CurrencySwitcher from './menu/currency-switcher/CurrencySwitcher';

type MobileHeaderProps = {
    className?: string;
    closeSearch?: any;
};

const SearchModal: React.FC<{ closeModal: () => void }> = ({closeModal}) => {

    return (
        <SearchModalWrapper>
            <SearchModalClose type="submit" onClick={closeModal}>
                <LongArrowLeft/>
            </SearchModalClose>
            <Search
                className="header-modal-search"
                showButtonText={false}
                onSubmit={closeModal}
            />
        </SearchModalWrapper>
    );
};

const MobileHeader: React.FC<MobileHeaderProps> = ({ className }) => {
    const [open, setOpen] = useState(false)
    const handleSearchModal = () => {
        setOpen(!open)
    };


    return (
        <MobileHeaderWrapper>
            <div className={'search-modal-mobile'}>
                <Modal focusTrapped={false} open={open} onClose={handleSearchModal} showCloseIcon={false}
                       closeOnOverlayClick={true}
                       styles={{modal: {width: "100%"}}}>
                    <SearchModal closeModal={handleSearchModal}/>
                </Modal>
            </div>
            <MobileHeaderInnerWrapper className={className}>
                <DrawerWrapper>
                    <MobileSidebar/>
                </DrawerWrapper>
                <LogoWrapper>
                    <Logo/>
                </LogoWrapper>
                <CurrencySwitcher/>

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
