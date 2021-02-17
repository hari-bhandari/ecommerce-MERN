import React, { useContext } from 'react';
// @ts-ignore
import { openModal } from "@redq/reuse-modal";
import Router from 'next/router';
import { FormattedMessage } from 'react-intl';
// @ts-ignore
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from '../components/drawer/drawer';
import { Button } from '../components/button/button';
import NavLink from '../components/nav-link/nav-link';
import { CloseIcon } from '../assets/icons/CloseIcon';
import {
  HamburgerIcon,
  DrawerContentWrapper,
  DrawerClose,
  DrawerProfile,
  LogoutView,
  LoginView,
  UserAvatar,
  UserDetails,
  DrawerMenu,
  DrawerMenuItem,
  UserOptionMenu,
} from './header.style';
import UserImage from '../../../../pick/packages/shop/src/assets/images/user.jpg';
import {
  MOBILE_DRAWER_MENU,
  PROFILE_PAGE,
} from '../../../../pick/packages/shop/src/site-settings/site-navigation';


const MobileDrawer: React.FunctionComponent = () => {

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {

  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      Router.push('/');
    }
  };

  const signInOutForm = () => {



  };

  return (
    <Drawer
      width="316px"
      drawerHandler={
        <HamburgerIcon>
          <span />
          <span />
          <span />
        </HamburgerIcon>
      }
      open={false}
      toggleHandler={toggleHandler}
      closeButton={
        <DrawerClose>
          <CloseIcon />
        </DrawerClose>
      }
    >
      <Scrollbars autoHide>
        <DrawerContentWrapper>
          <DrawerProfile>
            {true ? (
              <LoginView>
                <UserAvatar>
                  <img src={UserImage} alt="user_avatar" />
                </UserAvatar>
                <UserDetails>
                  <h3>David Kinderson</h3>
                  <span>+990 374 987</span>
                </UserDetails>
              </LoginView>
            ) : (
              <LogoutView>
                <Button variant="primary" onClick={signInOutForm}>
                  <FormattedMessage
                    id="mobileSignInButtonText"
                    defaultMessage="join"
                  />
                </Button>
              </LogoutView>
            )}
          </DrawerProfile>

          <DrawerMenu>
            {MOBILE_DRAWER_MENU.map((item) => (
              <DrawerMenuItem key={item.id}>
                <NavLink
                  onClick={toggleHandler}
                  href={item.href}
                  label={item.defaultMessage}
                  intlId={item.id}
                  className="drawer_menu_item"
                />
              </DrawerMenuItem>
            ))}
          </DrawerMenu>

          {true && (
            <UserOptionMenu>
              <DrawerMenuItem>
                <NavLink
                  href={PROFILE_PAGE}
                  label="Your Account Settings"
                  className="drawer_menu_item"
                  intlId="navlinkAccountSettings"
                />
              </DrawerMenuItem>
              <DrawerMenuItem>
                <div onClick={handleLogout} className="drawer_menu_item">
                  <span className="logoutBtn">
                    <FormattedMessage
                      id="navlinkLogout"
                      defaultMessage="Logout"
                    />
                  </span>
                </div>
              </DrawerMenuItem>
            </UserOptionMenu>
          )}
        </DrawerContentWrapper>
      </Scrollbars>
    </Drawer>
  );
};

export default MobileDrawer;
