import React from 'react'
import Sidebar from './common/sidebar_components/sidebar';
import Footer from './common/footer';
import Header from './common/header_components/header';

const App = ({children}) => {
    return (
        <div>
            <div className="page-wrapper" >
                <Header />
                <div className="page-body-wrapper">
                    <Sidebar />
                    <div className="page-body">
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;