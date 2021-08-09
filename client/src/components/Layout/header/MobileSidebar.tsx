import React, {useContext, useState} from 'react';
// @ts-ignore
import Router, {useRouter} from 'next/router';
import Drawer from '../drawer/drawer';
import {Button} from '../../Others/button/button';
import NavLink from '../nav-link/nav-link';
import {CloseIcon} from '../../../assets/icons/CloseIcon';
import {
  DrawerClose,
  DrawerContentWrapper,
  DrawerMenu,
  DrawerMenuItem,
  DrawerProfile,
  HamburgerIcon,
  LoginView,
  LogoutView,
  UserAvatar,
  UserDetails,
  UserOptionMenu,
} from './header.style';
import UserImage from '../../../assets/images/user.png';
import {MOBILE_DRAWER_MENU, PROFILE_PAGE,} from './site-navigation';
import {Scrollbar} from "@/components/Scrollbar";
import authContext from "@/context/auth/authContext";

const MobileSidebar: React.FunctionComponent = () => {
  const router = useRouter()
  //getting user
  const auth = useContext(authContext);
  const {isAuthenticated, user, logout} = auth;
  //toggle state
  const [toggle, setToggle] = useState<boolean>(false)
  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
      setToggle(!toggle)
    }, [toggle]);

  const handleLogout = () => {
   logout()
  };

  const signInOutForm = () => {
      router.push('/login').then(()=>{setToggle(false)})
  };

  return (
      <Drawer
          width="316px"
          drawerHandler={
            <HamburgerIcon>
              <span />
              <span />
              <span />
              <span />
            </HamburgerIcon>
          }
          open={toggle}
          toggleHandler={toggleHandler}
          closeButton={
            <DrawerClose>
              <CloseIcon />
            </DrawerClose>
          }
      >
        <Scrollbar style={{height:"100vh"}}>
          <DrawerContentWrapper>
            <DrawerProfile>
              {isAuthenticated&&user ? (
                  <LoginView>
                    <UserAvatar>
                      <img src={UserImage} alt="user_avatar" />
                    </UserAvatar>
                    <UserDetails>
                      <h3>{user.firstName + ' '+ user.lastName}</h3>
                      <span>{user.email}</span>
                    </UserDetails>
                  </LoginView>
              ) : (
                  <LogoutView>
                    <Button variant="primary" onClick={signInOutForm}>
                      Login/Register
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
                        className="drawer_menu_item"
                    />
                  </DrawerMenuItem>
              ))}
            </DrawerMenu>

            {isAuthenticated && (
                <UserOptionMenu>
                  <DrawerMenuItem>
                    <NavLink
                        href={PROFILE_PAGE}
                        label="Your Account Settings"
                        className="drawer_menu_item"
                    />
                  </DrawerMenuItem>
                  <DrawerMenuItem>
                    <div onClick={handleLogout} className="drawer_menu_item">
                  <span className="logoutBtn">
                    Logout
                  </span>
                    </div>
                  </DrawerMenuItem>
                </UserOptionMenu>
            )}
          </DrawerContentWrapper>
        </Scrollbar>
      </Drawer>

  );
};

export default MobileSidebar;
