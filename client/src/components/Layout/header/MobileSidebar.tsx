import React, { useState} from 'react';
// @ts-ignore
import Router from 'next/router';
import Drawer from '../drawer/drawer';
import { Button } from '../../Others/button/button';
import NavLink from '../nav-link/nav-link';
import { CloseIcon } from '../../../assets/icons/CloseIcon';
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
  UserOptionMenu, DrawerBody,
} from './header.style';
import UserImage from '../../../assets/images/user.jpg';
import {
  MOBILE_DRAWER_MENU,
  PROFILE_PAGE,
} from './site-navigation';
import {useDispatch,useSelector} from "react-redux";
import {logout} from "@/redux/actions/globalActions";
import {Scrollbar} from "@/components/Scrollbar";

const MobileSidebar: React.FunctionComponent = () => {
  const dispatch=useDispatch()
  //getting user
  const {isAuthenticated,user} = useSelector((state:any) => state.globalReducer);

    //toggle state
  const[toggle,setToggle]=useState<boolean>(false)
  //hardcoded authentication
  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
      setToggle(!toggle)
    }, [toggle]);

  const handleLogout = () => {
    dispatch(logout())
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
              {isAuthenticated ? (
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
