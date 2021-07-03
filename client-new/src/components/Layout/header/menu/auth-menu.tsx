import React from 'react';
import { Button } from '../../../Others/button/button';
import Popover from '../../popover/popover';
import { AuthorizedMenu } from './authorized-menu';

interface Props {
  isAuthenticated: boolean;
  onJoin: () => void;
  onLogout: () => void;
  avatar: string;
}

const AuthMenu = ({ isAuthenticated, onJoin, onLogout, avatar }: Props) => {
  return !isAuthenticated ? (
    <Button variant="primary" onClick={onJoin}>
      Signup    </Button>
  ) : (
    <Popover
      direction="right"
      className="user-pages-dropdown"
      handler={<img src={avatar} alt="user" />}
      content={<AuthorizedMenu onLogout={onLogout} />}
    />
  );
};
export default AuthMenu;
