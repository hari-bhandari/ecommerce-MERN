import React from 'react';

const Footer = () => {

    return (
        <div className="footer-copyright text-center py-3 text-white" style={{backgroundColor:'#000000'}}>© 2020-{new Date().getFullYear()} Copyright:
            Made with ❤,React & Node by <a aria-label="website" href="https://haribhandari.me" className="text-lighter"> Hari Bhandari</a>
        </div>

    );
};


export default Footer;