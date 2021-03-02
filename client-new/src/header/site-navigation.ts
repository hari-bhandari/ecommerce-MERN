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
  PROFILE_MENU_ITEM,
  {
    id: 'nav.checkout',
    defaultMessage: 'Checkout',
    href: CHECKOUT_PAGE,
  },
  {
    id: 'nav.checkout_two',
    href: CHECKOUT_PAGE_TWO,
    defaultMessage: 'Checkout Alternative',
  },
  ORDER_MENU_ITEM,
  {
    id: 'nav.order_received',
    href: ORDER_RECEIVED_PAGE,
    defaultMessage: 'Order invoice',
  },
  {
    id: 'nav.terms_and_services',
    defaultMessage: 'Terms and Services',
    href: TERMS_AND_SERVICES_PAGE,
  },
  {
    id: 'nav.privacy_policy',
    defaultMessage: 'Privacy Policy',
    href: PRIVACY_POLICY_PAGE,
  },
];
// category menu items for header navigation
export const CATEGORY_MENU_ITEMS = [
  {
    id: 'nav.grocery',
    href: GROCERY_PAGE,
    defaultMessage: 'Grocery',
    icon: 'FruitsVegetable',
    dynamic: true,
  },
  {
    id: 'nav.makeup',
    defaultMessage: 'Makeup',
    href: MAKEUP_PAGE,
    icon: 'FacialCare',
    dynamic: true,
  },
  {
    id: 'nav.bags',
    defaultMessage: 'Bags',
    href: BAGS_PAGE,
    icon: 'Handbag',
    dynamic: true,
  },
  {
    id: 'nav.clothing',
    defaultMessage: 'Clothing',
    href: CLOTHING_PAGE,
    icon: 'DressIcon',
    dynamic: true,
  },
  {
    id: 'nav.furniture',
    defaultMessage: 'Furniture',
    href: FURNITURE_PAGE,
    icon: 'FurnitureIcon',
    dynamic: true,
  },
  {
    id: 'nav.book',
    defaultMessage: 'Book',
    href: BOOK_PAGE,
    icon: 'BookIcon',
    dynamic: true,
  },
  {
    id: 'nav.medicine',
    defaultMessage: 'Medicine',
    href: MEDICINE_PAGE,
    icon: 'MedicineIcon',
    dynamic: true,
  },
  {
    id: 'nav.foods',
    defaultMessage: 'Foods',
    href: RESTAURANT_PAGE,
    icon: 'Restaurant',
  },
];
export const SIDEBAR_DATA=[

  {
    "id": 48,
    "title": "Snacks",
    "slug": "snacks",
    "icon": "Snacks",
    "children": [
      {
        "id": 49,
        "title": "Biscuits",
        "slug": "biscuits",
        "__typename": "Category"
      },
      {
        "id": 50,
        "title": "Chocolates",
        "slug": "chocolates",
        "__typename": "Category"
      },
      {
        "id": 51,
        "title": "Crisps",
        "slug": "crisps",
        "__typename": "Category"
      },
      {
        "id": 52,
        "title": "Noodles",
        "slug": "noodles",
        "__typename": "Category"
      },
      {
        "id": 53,
        "title": "Nuts",
        "slug": "nuts",
        "__typename": "Category"
      },
      {
        "id": 54,
        "title": "Pasta",
        "slug": "pasta",
        "__typename": "Category"
      },
      {
        "id": 55,
        "title": "Sauce",
        "slug": "sauce",
        "__typename": "Category"
      },
      {
        "id": 56,
        "title": "Soup",
        "slug": "soup",
        "__typename": "Category"
      }
    ],
  },
  {
    "id": 57,
    "title": "Pet Care",
    "slug": "petcare",
    "icon": "PetCare",
    "children": [
      {
        "id": 58,
        "title": "Cat Food",
        "slug": "catfood",
        "__typename": "Category"
      },
      {
        "id": 59,
        "title": "Dog Food",
        "slug": "dogfood",
        "__typename": "Category"
      },
      {
        "id": 60,
        "title": "KItten Food",
        "slug": "kittenfood",
        "__typename": "Category"
      },
      {
        "id": 61,
        "title": "Pet Accessories",
        "slug": "petaccessories",
        "__typename": "Category"
      }
    ],
    "__typename": "Category"
  },
  {
    "id": 62,
    "title": "Home & Cleaning",
    "slug": "home-cleaning",
    "icon": "HomeCleaning",
    "children": [
      {
        "id": 63,
        "title": "Air Freshener",
        "slug": "air_freshner",
        "__typename": "Category"
      },
      {
        "id": 64,
        "title": "Cleaning Products",
        "slug": "cleaning_products",
        "__typename": "Category"
      },
      {
        "id": 65,
        "title": "Dishwasher",
        "slug": "dishwasher",
        "__typename": "Category"
      },
      {
        "id": 66,
        "title": "Kitchen Accessories",
        "slug": "kitchen_accessories",
        "__typename": "Category"
      },
      {
        "id": 67,
        "title": "Laundry",
        "slug": "laundry",
        "__typename": "Category"
      },
      {
        "id": 68,
        "title": "Pest Control",
        "slug": "Pest_control",
        "__typename": "Category"
      }
    ],
    "__typename": "Category"
  },
  {
    "id": 76,
    "title": "Cooking",
    "slug": "cooking",
    "icon": "Cooking",
    "children": [
      {
        "id": 77,
        "title": "Oil",
        "slug": "oil",
        "__typename": "Category"
      },
      {
        "id": 78,
        "title": "Rice",
        "slug": "rice",
        "__typename": "Category"
      },
      {
        "id": 79,
        "title": "Salt & Sugar",
        "slug": "Salt_sugar",
        "__typename": "Category"
      },
      {
        "id": 80,
        "title": "Spices",
        "slug": "milk_cream",
        "__typename": "Category"
      }]

  },
  {
    "id": 90,
    "title": "Beverage",
    "slug": "beverage",
    "icon": "Beverage",
    "children": [
      {
        "id": 91,
        "title": "Coffee",
        "slug": "coffee",
        "__typename": "Category"
      },
      {
        "id": 92,
        "title": "Energy Drinks",
        "slug": "energy_drinks",
        "__typename": "Category"
      },
      {
        "id": 93,
        "title": "Juice",
        "slug": "juice",
        "__typename": "Category"
      },
      {
        "id": 94,
        "title": "Fizzy Drinks",
        "slug": "fizzy_drinks",
        "__typename": "Category"
      },
      {
        "id": 95,
        "title": "Syrup & powder",
        "slug": "syrup_powder",
        "__typename": "Category"
      },
      {
        "id": 96,
        "title": "Tea",
        "slug": "tea",
        "__typename": "Category"
      },
      {
        "id": 97,
        "title": "Water",
        "slug": "water",
        "__typename": "Category"
      }
    ],
    "__typename": "Category"
  },
  {
    "id": 98,
    "title": "Beauty & Health",
    "slug": "health_beauty",
    "icon": "BeautyHealth",
    "children": [
      {
        "id": 99,
        "title": "Bath",
        "slug": "bath",
        "__typename": "Category"
      },
      {
        "id": 100,
        "title": "Cream",
        "slug": "cream",
        "__typename": "Category"
      },
      {
        "id": 101,
        "title": "Deodorant",
        "slug": "deodorant",
        "__typename": "Category"
      },
      {
        "id": 102,
        "title": "Face Care",
        "slug": "face_care",
        "__typename": "Category"
      },
      {
        "id": 105,
        "title": "Oral Care",
        "slug": "Oral_care",
        "__typename": "Category"
      },
      {
        "id": 106,
        "title": "Shaving Needs",
        "slug": "shaving_needs",
        "__typename": "Category"
      }
    ],
  }
]
export const MOBILE_DRAWER_MENU = [
  HOME_MENU_ITEM,
  ...AUTHORIZED_MENU_ITEMS,
  HELP_MENU_ITEM,
  OFFER_MENU_ITEM,
];

export const PROFILE_SIDEBAR_TOP_MENU = [ORDER_MENU_ITEM, HELP_MENU_ITEM];
export const PROFILE_SIDEBAR_BOTTOM_MENU = [PROFILE_MENU_ITEM];

export const CURRENCY_MENU = [
  {
    id: 'gbp',
    defaultMessage: '£ Pounds',
    icon: 'UKFlag',
  },
  {
    id: 'usd',
    defaultMessage: '$ Dollars',
    icon: 'USFlag',
  },
  {
    id: 'jpy',
    defaultMessage: '¥ Yen',
    icon: 'JPFlag',
  },
  {
    id: 'eur',
    defaultMessage: '€ Euro',
    icon: 'EURFlag',
  }
];
