import React from 'react';
import Router, { useRouter } from 'next/router';
// @ts-ignore
import { openModal } from '@redq/reuse-modal';
import { RightMenu } from './menu/right-menu/RightMenu';
import { LeftMenu } from './menu/left-menu/LeftMenu';
import HeaderWrapper from './header.style';
import LogoImage from '../../../assets/images/logo.svg';
import UserImage from '../../../assets/images/user.jpg';
import Search from './search/search';
import AuthenticationForm from "@/features/authentication-form";
import {useSelector} from "react-redux";

type Props = {
  className?: string;
};

const Header: React.FC<Props> = ({ className }) => {
    const {isAuthenticated} = useSelector((state:any) => state.globalReducer);

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('access_token');
            Router.push('/');
        }
    };

    const handleJoin = () => {
        Router.push('/login');
    };
  return (
    <HeaderWrapper className={className} id="layout-header">
      <LeftMenu logo={LogoImage} />
       <Search minimal={true} className="headerSearch" />
      <RightMenu
        isAuthenticated={isAuthenticated}
        onJoin={handleJoin}
        onLogout={handleLogout}
        avatar={UserImage}
      />
    </HeaderWrapper>
  );
};

export default Header;
