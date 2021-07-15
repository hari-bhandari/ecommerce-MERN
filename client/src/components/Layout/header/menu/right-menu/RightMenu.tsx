import React from 'react';
import dynamic from 'next/dynamic';
import NavLink from '../../../nav-link/nav-link';
import { OFFER_MENU_ITEM, HELP_MENU_ITEM } from '../../site-navigation';
import CurrencySwitcher from '../currency-switcher/CurrencySwitcher';
import { HelpIcon } from '../../../../../assets/icons/HelpIcon';
import { RightMenuBox } from './RightMenuStyle';
const AuthMenu = dynamic(() => import('../auth-menu'), { ssr: false });

type Props = {
  onLogout: () => void;
  onJoin: () => void;
  avatar: string;
  isAuthenticated: boolean;
};

export const RightMenu: React.FC<Props> = ({
  onLogout,
  avatar,
  isAuthenticated,
  onJoin,
}) => {
  return (
    <RightMenuBox>
      <NavLink
        className="menu-item"
        href={OFFER_MENU_ITEM.href}
        label={OFFER_MENU_ITEM.defaultMessage}
      />
      <NavLink
        className="menu-item"
        href={HELP_MENU_ITEM.href}
        label={HELP_MENU_ITEM.defaultMessage}
        iconClass="menu-icon"
        icon={<HelpIcon />}
      />
      <CurrencySwitcher />

      <AuthMenu
        avatar={avatar}
        onJoin={onJoin}
        onLogout={onLogout}
        isAuthenticated={isAuthenticated}
      />
    </RightMenuBox>
  );
};
