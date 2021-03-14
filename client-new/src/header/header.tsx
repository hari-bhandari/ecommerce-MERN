import React from 'react';
import Router, { useRouter } from 'next/router';
// @ts-ignore
import { openModal } from '@redq/reuse-modal';
import { RightMenu } from './menu/right-menu/RightMenu';
import { LeftMenu } from './menu/left-menu/LeftMenu';
import HeaderWrapper from './header.style';
import LogoImage from '../assets/images/logo.svg';
import UserImage from '../assets/images/user.jpg';
import Search from './search/search';

type Props = {
  className?: string;
};
import AuthenticationForm from "@/features/authentication-form";

const Header: React.FC<Props> = ({ className }) => {

  const { pathname, query } = useRouter();
    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('access_token');
            Router.push('/');
        }
    };

    const handleJoin = () => {
        openModal({
            show: true,
            overlayClassName: 'quick-view-overlay',
            closeOnClickOutside: true,
            component: AuthenticationForm,
            closeComponent: '',
            config: {
                enableResizing: false,
                disableDragging: true,
                className: 'quick-view-modal',
                width: 458,
                height: 'auto',
            },
        });
    };
  const showSearch = true
  return (
    <HeaderWrapper className={className} id="layout-header">
      <LeftMenu logo={LogoImage} />
       <Search minimal={true} className="headerSearch" />
      <RightMenu
        isAuthenticated={false}
        onJoin={handleJoin}
        onLogout={handleLogout}
        avatar={UserImage}
      />
    </HeaderWrapper>
  );
};

export default Header;
