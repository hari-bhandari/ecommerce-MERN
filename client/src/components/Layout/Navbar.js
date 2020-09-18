import React, {useState} from 'react';
import './Navbar.css'
import {Link} from "react-router-dom";
const Navbar = () => {
    const[navOpen,setNavOpen]=useState(false)
    const hamOnClick=()=>{
        setNavOpen(!navOpen)
    }
    return (
        <div className="custom-nav-container d-flex align-items-center justify-content-between px-2 py-3 shadow-sm navbar-dark bg-light fixed-top" style={{position:"fixed"}}>
            <Link to="/" className="text-clipped navbar-brand">
                <i className="fas fa-cart-plus">
                    <span className="m-auto">SHOP</span>
                </i>
            </Link>
            <div className={`main-nav-outer d-flex ${navOpen?'open-menu':''}`}>
                <i className="fas fa-times text-clipped menu-close-icon d-flex d-lg-none" onClick={hamOnClick}></i>

                <nav className="main-nav navbar navbar-light navbar-expand-lg text-center m-auto ">
                    <ul className="navbar-nav d-flex font-weight-bold">

                        <li className="nav-item"><Link className="nav-link" to="/apple">Apple</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Samsung">Samsung</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Huawei">Huawei</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/watches">Smart Watches</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/tv">Smart Tv</Link></li>
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
                        <Link data-toggle="dropdown" to="/login" className="dropdown-toggle">
                            <i className="fal fa-user text-clipped"></i>
                        </Link>

                    </div>
                </div>

                <div className="nav-icons d-lg-none">
                    <i className="fas fa-bars open-menu-icon text-clipped" onClick={hamOnClick}></i>
                </div>
            </div>
        </div>
    );
};

export default Navbar;