import React, {Component, Fragment, useEffect, useState} from 'react'
import User_panel from './user-panel';
import { Link } from 'react-router-dom';
import { MENUITEMS } from '../../../constants/menu';

// image import
import logo from '../../../assets/images/dashboard/logo.svg'

const Sidebar = () => {
    const [selectedPath,setSelectedPath]=useState("1")
    const [mainmenu,setMainmenu]=useState([])
    const onItemSelection = (arg, e) => {
        setSelectedPath(arg.path);
    };
    const setNavActive=(item)=> {
        const upgradedArray=MENUITEMS.map(menuItem=>{
            if(menuItem.id===item.id){
                return {...menuItem,active:!item.active }
            }
            return {...menuItem}
        })
        console.log(upgradedArray)
        setMainmenu(upgradedArray)



    }

    useEffect(()=>{
        setMainmenu(MENUITEMS)
        const currentUrl = window.location.pathname;

        mainmenu.filter(items => {
            if (!items.children) {
                if (items.path === currentUrl)
                    setNavActive(items)
                return false
            }
            items.children.filter(subItems => {
                if (subItems.path === currentUrl)
                    setNavActive(subItems)
                if (!subItems.children) return false
                subItems.children.filter(subSubItems => {
                    if (subSubItems.path === currentUrl)
                        setNavActive(subSubItems)
                })
            })
        })
    },[])
    const mainMenu=
        (
            mainmenu.map((menuItem, i) =>
                <li className={`${menuItem.active ? 'active' : ''}`} key={i}>
                    {(menuItem.sidebartitle) ?
                        <div className="sidebar-title">{menuItem.sidebartitle}</div>
                        : ''}
                    {(menuItem.type === 'sub') ?
                        <a className="sidebar-header " href="javascript:void(0)" onClick={() => setNavActive(menuItem)}>
                            <menuItem.icon />
                            <span>{menuItem.title}</span>
                            <i className={!menuItem.active?"fa fa-angle-right pull-right":'fas fa-angle-down turn270'}></i>
                        </a>
                        : ''}
                    {(menuItem.type === 'link') ?
                        <Link
                            to={`${process.env.PUBLIC_URL}${menuItem.path}`}
                            className={`sidebar-header ${menuItem.active ? 'active' : ''}`}

                            onClick={() =>setNavActive(menuItem)}
                        >
                            <menuItem.icon /><span>{menuItem.title}</span>
                            {menuItem.children ?
                                <i className="fa fa-angle-right pull-right"></i> : ''}
                        </Link>
                        : ''}
                    {menuItem.children ?
                        <ul
                            className={`sidebar-submenu ${menuItem.active ? 'menu-open' : ''}`}
                            style={menuItem.active ? { opacity: 1, transition: 'opacity 500ms ease-in' } : {}}
                        >
                            {menuItem.children.map((childrenItem, index) =>
                                <li key={index} className={childrenItem.children ? childrenItem.active ? 'active' : '' : ''}>
                                    {(childrenItem.type === 'sub') ?
                                        <a href="javascript:void(0)" onClick={() => setNavActive(childrenItem)} >
                                            <i className="fa fa-circle"></i>{childrenItem.title} <i className="fa fa-angle-right pull-right"></i></a>
                                        : ''}

                                    {(childrenItem.type === 'link') ?
                                        <Link
                                            to={`${process.env.PUBLIC_URL}${childrenItem.path}`}
                                            className={childrenItem.active ? 'active' : ''}
                                            onClick={() => setNavActive(childrenItem)}
                                        >
                                            <i className="fa fa-circle"></i>{childrenItem.title} </Link>
                                        : ''}
                                    {childrenItem.children ?
                                        <ul className={`sidebar-submenu ${childrenItem.active ? 'menu-open' : 'active'}`}>
                                            {childrenItem.children.map((childrenSubItem, key) =>
                                                <li className={childrenSubItem.active ? 'active' : ''} key={key}>
                                                    {(childrenSubItem.type === 'link') ?
                                                        <Link
                                                            to={`${process.env.PUBLIC_URL}${childrenSubItem.path}`}
                                                            className={childrenSubItem.active ? 'active' : ''}
                                                            onClick={() => setNavActive(childrenSubItem)}
                                                        >
                                                            <i className="fa fa-circle"></i>{childrenSubItem.title}</Link>
                                                        : ''}
                                                </li>
                                            )}
                                        </ul>
                                        : ''}
                                </li>
                            )}
                        </ul>
                        : ''}
                </li>
            )
        )
    return (
        <Fragment>
            <div className="page-sidebar">
                <div className="main-header-left d-none d-lg-block">
                    <div className="logo-wrapper">
                        <Link to={`${process.env.PUBLIC_URL}/dashboard`}>
                            <img className="blur-up lazyloaded" src={logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="sidebar custom-scrollbar">
                    <User_panel />
                    <ul className="sidebar-menu">
                        {mainMenu}
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default Sidebar;