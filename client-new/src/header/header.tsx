import React from 'react';
import Router, { useRouter } from 'next/router';
// @ts-ignore
import { openModal } from '@redq/reuse-modal';
import { RightMenu } from './menu/right-menu/right-menu';
import { LeftMenu } from './menu/left-menu/left-menu';
import HeaderWrapper from './header.style';
import LogoImage from '../assets/images/logo.svg';
import UserImage from '../assets/images/user.jpg';
type Props = {
  className?: string;
};

const Header: React.FC<Props> = ({ className }) => {

  const { pathname, query } = useRouter();
  const handleLogout = () => {

  };

  const handleJoin = () => {

    ;
  };
  const showSearch = true
  return (
    <HeaderWrapper className={className} id="layout-header">
      {/*<LeftMenu logo={LogoImage} />*/}
      {/*{showSearch && <Search minimal={true} className="headerSearch" />}*/}
      <RightMenu
        isAuthenticated={true}
        onJoin={handleJoin}
        onLogout={handleLogout}
        avatar={UserImage}
      />
    </HeaderWrapper>
  );
};

export default Header;
