import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar navbar-light navbar-expand-md fixed-top bg-light" >
            <div className="container">
                <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav flex-grow-1 justify-content-between">
                        <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-shopping-basket apple-logo"></i></a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Iphone</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Samsung</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Huawei</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">LG</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">TV</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
                        <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-shopping-bag"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;