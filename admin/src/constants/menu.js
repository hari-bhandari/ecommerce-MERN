import {
    Home,
    Box,
    DollarSign,
    Tag,
    Clipboard,
    Camera,
    AlignLeft,
    UserPlus,
    Users,
    Chrome,
    BarChart,Settings,Archive, LogIn
} from 'react-feather';

export let MENUITEMS = [
    {
        path: '/dashboard', title: 'Dashboard', icon: Home, type: 'link',id:'dashboard',badgeType: 'primary', active: false
    },
    {
        title: 'Products', icon: Box, type: 'sub', active: false,id:'products', children: [
                    { path: '/products/physical/category', title: 'Category', type: 'link' },
                    { path: '/products/physical/sub-category', title: 'Sub Category', type: 'link' },
                    { path: '/products/physical/product-list', title: 'Product List', type: 'link' },
                    { path: '/products/physical/add-product', title: 'Add Product', type: 'link' },
        ]
    },
    {
        title: 'Sales', icon: DollarSign, type: 'sub',id:'sales', active: false, children: [
            { path: '/sales/orders', title: 'Orders', type: 'link' },
            { path: '/sales/transactions', title: 'Transactions', type: 'link' },
        ]
    },
    {
        title: 'Users', icon: UserPlus, type: 'sub',id:'users', active: false, children: [
            { path: '/users/list-user', title: 'User List', type: 'link' },
            { path: '/users/create-user', title: 'Create User', type: 'link' },
        ]
    },

    {
        title: 'Settings', icon: Settings, type: 'sub',id:'settings', children: [
            { path: '/settings/profile', title: 'Profile', type: 'link' },
        ]
    }
]
