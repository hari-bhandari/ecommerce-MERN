import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="custom-nav-container d-flex align-items-center justify-content-between px-2 py-3 shadow-sm navbar-dark bg-light fixed-top" style={{position:"fixed"}}>
            <a href="#" className="text-clipped navbar-brand">
                <i className="fas fa-cart-plus">
                    <span className="m-auto">SHOP</span>
                </i>
            </a>
            <div className="main-nav-outer d-flex">
                <i className="fas fa-times text-clipped menu-close-icon d-flex d-lg-none"></i>

                <nav className="main-nav navbar navbar-light navbar-expand-lg text-center m-auto ">
                    <ul className="navbar-nav d-flex font-weight-bold">
                        <li className="nav-item"><a className="nav-link" href="#">Iphone</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Samsung</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Huawei</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">LG</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">TV</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
                    </ul>
                </nav>
            </div>
            <div className="nav-icons-container d-flex justify-content-between">
                <div className="nav-icons">
                    <a href="#"><i className="fal fa-search text-clipped"></i></a>
                </div>

                <div className="nav-icons">
                    <a href="cart.html"><i className="fal fa-shopping-bag text-clipped bag-item-count"></i><span
                        className="badge">2</span></a>
                </div>
                <div className="nav-icons">
                    <div className="dropdown">
                        <a data-toggle="dropdown" href="" className="dropdown-toggle">
                            <i className="fal fa-user text-clipped"></i>
                        </a>

                    </div>
                </div>

                <div className="nav-icons d-lg-none">
                    <i className="fas fa-bars open-menu-icon text-clipped"></i>
                </div>
            </div>
        </div>
    );
};

export default Navbar;