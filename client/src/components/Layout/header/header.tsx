import React, {useContext} from 'react';
import Router from 'next/router';
// @ts-ignore
import {openModal} from '@haribhandari/react-popup-modal';
import {RightMenu} from './menu/right-menu/RightMenu';
import {LeftMenu} from './menu/left-menu/LeftMenu';
import HeaderWrapper from './header.style';
import Search from './search/search';
import authContext from "@/context/auth/authContext";

type Props = {
    className?: string;
};

const Header: React.FC<Props> = ({ className }) => {
    const auth = useContext(authContext);
    const {isAuthenticated, logout, user} = auth;
    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            logout()
        }
    };

    const handleJoin = () => {
        Router.push('/login');
    };
  return (
    <HeaderWrapper className={className} id="layout-header">
        <LeftMenu/>
        <Search
            minimal={true}
            className="headerSearch"
        />
        <RightMenu
            isAuthenticated={isAuthenticated}
            onJoin={handleJoin}
            onLogout={handleLogout}
            avatar={user?.avatar ? user.avatar : '../../../assets/images/logo.svg'}
        />
    </HeaderWrapper>
  );
};

export default Header;
