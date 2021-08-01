import React, {Component, Fragment, useState} from 'react'
import { AlignLeft} from 'react-feather';

//images
import logo from '../../../assets/images/dashboard/logo.svg'

const Header = () => {
    const[sidebar,setSidebar]=useState(true)


    const openCloseSidebar = () => {
        setSidebar(!sidebar)
        if (sidebar) {
            document.querySelector(".page-main-header").classList.add('open');
            document.querySelector(".page-sidebar").classList.add('open');
        } else {
            document.querySelector(".page-main-header").classList.remove('open');
            document.querySelector(".page-sidebar").classList.remove('open');
        }
    }
    return (
        <Fragment>
            {/* open */}
            <div className="page-main-header ">
                <div className="main-header-right row">
                    <div className="main-header-left d-lg-none" >
                        <div className="logo-wrapper">
                            <a href="/">
                                <img className="blur-up lazyloaded" src={logo} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="mobile-sidebar">
                        <div className="media-body text-right switch-sm">
                            <label className="switch"><a onClick={openCloseSidebar}><AlignLeft /></a></label>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default Header;
