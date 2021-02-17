import React from 'react';
import Router, { useRouter } from 'next/router';
// @ts-ignore
import { openModal } from '@redq/reuse-modal';
import { RightMenu } from './menu/right-menu/right-menu';
import { LeftMenu } from './menu/left-menu/left-menu';
import HeaderWrapper from './header.style';
import LogoImage from '../assets/images/logo.svg';
import UserImage from '../assets/images/user.jpg';
import Search from './search/search';

type Props = {
  className?: string;
};
import {IntlProvider} from "react-intl";
import dynamic from "next/dynamic";

const Header: React.FC<Props> = ({ className }) => {

  const { pathname, query } = useRouter();
  const handleLogout = () => {

  };

  const handleJoin = () => {

    ;
  };
  const showSearch = true
  return (
      <IntlProvider locale={"en"}>
    <HeaderWrapper className={className} id="layout-header">
      <LeftMenu logo={LogoImage} />
       <Search minimal={true} className="headerSearch" />
      <RightMenu
        isAuthenticated={true}
        onJoin={handleJoin}
        onLogout={handleLogout}
        avatar={UserImage}
      />
    </HeaderWrapper>
      </IntlProvider>
  );
};

export default Header;
