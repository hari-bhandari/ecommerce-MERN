import React from 'react';

const PageComingSoon = () => {
    return (
        <>
            <div className="coming-soon particles_js">
                <div className="auth_div vivify fadeInTop">
                    <div className="card">
                        <div className="body">
                            <div className="m-0auto text-center">
                                <p className="lead">Our website is under construction</p>
                                <div className="wsize2 row">
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <span className="s1-txt1">Days</span>
                                        <div className="how-countdown">
                                            <span className="l1-txt1 p-b-9 days">35</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <span className="s1-txt1">Hours</span>
                                        <div className="how-countdown">
                                            <span className="l1-txt1 p-b-9 hours">17</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <span className="s1-txt1">Minutes</span>
                                        <div className="how-countdown">
                                            <span className="l1-txt1 p-b-9 minutes">50</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <span className="s1-txt1">Seconds</span>
                                        <div className="how-countdown">
                                            <span className="l1-txt1 p-b-9 seconds">39</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <form id="email" className="mb-2 mt-2 col-12">
                                        <div className="input-group mb-0">
                                            <input type="text" className="form-control" placeholder="Your Email" />
                                            <div className="input-group-append">
                                                <a href className="search_toggle btn btn-success">Get Notified</a>
                                            </div>
                                        </div>
                                        <span className="s1-txt4 pt-4">I promise to <span className="bor2">never</span> spam</span>
                                    </form>
                                </div>
                            </div>
                            <div className="pattern">
                                <span className="red"></span>
                                <span className="indigo"></span>
                                <span className="blue"></span>
                                <span className="green"></span>
                                <span className="orange"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="particles-js"></div>
            </div>
        </>
    );

}
export default PageComingSoon
