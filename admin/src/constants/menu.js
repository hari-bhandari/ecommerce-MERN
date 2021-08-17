import {Box, DollarSign, Home, LogOut, Settings, UserPlus} from 'react-feather';

export let MENUITEMS = [
    {
        path: '/dashboard', title: 'Dashboard', icon: Home, type: 'link',id:'dashboard',badgeType: 'primary', active: false
    },
    {
        title: 'Products', icon: Box, type: 'sub', active: false,id:'products', children: [
                    { path: '/products/category', title: 'Category', type: 'link' },
                    { path: '/products/sub-category', title: 'Sub Category', type: 'link' },
                    { path: '/products/product-list', title: 'Product List', type: 'link' },
                    { path: '/products/add-product', title: 'Add Product', type: 'link' },
        ]
    },
    {
        title: 'Sales', icon: DollarSign, type: 'sub',id:'sales', active: false, children: [
            { path: '/sales/orders', title: 'Orders', type: 'link' }
        ]
    },
    {
        title: 'Users', icon: UserPlus, type: 'sub',id:'users', active: false, children: [
            { path: '/users/list-user', title: 'User List', type: 'link' },
            { path: '/users/create-user', title: 'Create User', type: 'link' },
        ]
    },
    {
        path: '/settings/profile', title: 'Profile settings', icon: Settings, type: 'link',id:'settings',badgeType: 'primary', active: false
    },
    {
        path: '/logout', title: 'Logout', icon: LogOut, type: 'link',id:'settings',badgeType: 'primary', active: false
    }
]
