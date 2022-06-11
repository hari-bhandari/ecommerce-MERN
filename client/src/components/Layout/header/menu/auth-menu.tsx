import React, {useContext} from 'react';
import {Button} from '../../../Others/button/button';
import Popover from '../../popover/popover';
import {AuthorizedMenu} from './authorized-menu';
import Avatar from "@/components/Avatar";
import authContext from "@/context/auth/authContext";

interface Props {
  isAuthenticated: boolean;
  onJoin: () => void;
  onLogout: () => void;
}

const AuthMenu = ({onJoin, onLogout}: Props) => {
  const auth = useContext(authContext);
  const {isAuthenticated, user} = auth;

  return !isAuthenticated ? (
      <Button variant="primary" onClick={onJoin}>
        Signup </Button>
  ) : (
      <Popover
          direction="right"
          className="user-pages-dropdown"
          handler={user?.avatar && isAuthenticated ? <img src={user?.avatar} alt="user"/> :
              <Avatar width={'38px'} height={'38px'}>{user?.firstName.slice(0, 1)}{user?.lastName.slice(0, 1)}</Avatar>}
          content={<AuthorizedMenu onLogout={onLogout}/>}
      />
  );
};
export default AuthMenu;
