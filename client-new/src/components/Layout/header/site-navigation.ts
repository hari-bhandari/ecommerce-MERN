export const HOME_PAGE = '/';
export const GROCERY_PAGE = '/grocery';
export const MAKEUP_PAGE = '/makeup';
export const CLOTHING_PAGE = '/clothing';
export const BAGS_PAGE = '/bags';
export const BOOK_PAGE = '/book';
export const FURNITURE_PAGE = '/furniture';
export const MEDICINE_PAGE = '/medicine';
export const RESTAURANT_PAGE = '/restaurant';
export const REQUEST_MEDICINE_PAGE = '/request-medicine';
export const CHECKOUT_PAGE = '/checkout';
export const CHECKOUT_PAGE_TWO = '/checkout-alternative';
export const PROFILE_PAGE = '/profile';
export const YOUR_ORDER_PAGE = '/order';
export const ORDER_RECEIVED_PAGE = '/order-received';
export const OFFER_PAGE = '/offer';
export const HELP_PAGE = '/help';
export const TERMS_AND_SERVICES_PAGE = '/terms';
export const PRIVACY_POLICY_PAGE = '/privacy';
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
export const OFFER_MENU_ITEM = {
  id: 'nav.offer',
  defaultMessage: 'Offer',
  href: OFFER_PAGE,
};
export const ORDER_MENU_ITEM = {
  id: 'nav.order',
  href: YOUR_ORDER_PAGE,
  defaultMessage: 'Order',
};
export const REQUEST_MEDICINE_MENU_ITEM = {
  id: 'nav.request_medicine',
  defaultMessage: 'Request Medicine',
  href: REQUEST_MEDICINE_PAGE,
};
export const PROFILE_MENU_ITEM = {
  id: 'nav.profile',
  defaultMessage: 'Profile',
  href: PROFILE_PAGE,
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
  OFFER_MENU_ITEM,
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
    id: 'eur',
    defaultMessage: '€ Euro',
    symbol:'€',
    icon: 'EURFlag',
  }
];
