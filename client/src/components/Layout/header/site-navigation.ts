export const HOME_PAGE = '/';
export const PROFILE_PAGE = '/profile';
export const CONTACT_PAGE = '/offer';
export const HELP_PAGE = '/help';
export const TERMS_AND_SERVICES_PAGE = '/terms';
// Mobile Drawer Menus

export const HOME_MENU_ITEM = {
  id: 'nav.home',
  defaultMessage: 'Home',
  href: HOME_PAGE,
};

export const HELP_MENU_ITEM = {
  id: 'nav.help',
  defaultMessage: 'Help',
  href: HELP_PAGE,
};
export const CONTACT_MENU_ITEM = {
  id: 'nav.contact',
  defaultMessage: 'Contact',
  href: CONTACT_PAGE,
};

export const AUTHORIZED_MENU_ITEMS = [

  {
    id: 'nav.order_received',
    href: '/orders',
    defaultMessage: 'Orders',
  },
  {
    id: 'nav.terms_and_services',
    defaultMessage: 'Terms and Services',
    href: TERMS_AND_SERVICES_PAGE,
  },
  {
    id: 'nav.profile',
    defaultMessage: 'My profile',
    href: 'profile',
  },
];
// category menu items for header navigation
export const MOBILE_DRAWER_MENU = [
  HOME_MENU_ITEM,
  ...AUTHORIZED_MENU_ITEMS,
  HELP_MENU_ITEM,
  CONTACT_MENU_ITEM,
];


export const CURRENCY_MENU = [
  {
    id: 'GBP',
    defaultMessage: '£ Pounds',
    symbol:'£',
    icon: 'UKFlag',
  },
  {
    id: 'USD',
    defaultMessage: '$ Dollars',
    symbol:'$',
    icon: 'USFlag',
  },
  {
    id: 'JPY',
    defaultMessage: '¥ Yen',
    symbol:'¥',
    icon: 'JPFlag',
  },
  {
    id: 'EUR',
    defaultMessage: '€ Euro',
    symbol:'€',
    icon: 'EURFlag',
  }
];
