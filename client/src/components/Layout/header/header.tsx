import React, {useContext} from 'react';
import Router from 'next/router';
// @ts-ignore
import {openModal} from '@haribhandari/react-popup-modal';
import {RightMenu} from './menu/right-menu/RightMenu';
import {LeftMenu} from './menu/left-menu/LeftMenu';
import HeaderWrapper from './header.style';
import LogoImage from '../../../assets/images/logo.svg';
import UserImage from '../../../assets/images/user.png';
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
      <LeftMenu logo={LogoImage} />
       <Search
           minimal={true}
           className="headerSearch"
       />
      <RightMenu
          isAuthenticated={isAuthenticated}
          onJoin={handleJoin}
          onLogout={handleLogout}
          avatar={user.avatar ? user.avatar : UserImage}
      />
    </HeaderWrapper>
  );
};

export default Header;
