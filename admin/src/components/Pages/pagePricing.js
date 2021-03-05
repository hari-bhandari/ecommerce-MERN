import React from 'react';
import { Link } from 'react-router-dom';

const PagePricing = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Pricing List</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><a href="/">Pages</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Pricing</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <a href="/" className="btn btn-sm btn-primary btn-round" title="">Add New</a>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 cool-md-4 col-sm-12">
                        <div className="card">
                            <ul className="pricing body">
                                <li className="plan-img"><img className="img-fluid rounded-circle" src="../assets/images/plan-1.svg" alt="" /></li>
                                <li className="price">
                                    <h3><span>$</span> 99 <small>/ mo</small></h3>
                                    <span>Freelance</span>
                                </li>
                                <li>1 GB of space</li>
                                <li>Support at $25/hour</li>
                                <li>Limited cloud access</li>
                                <li className="plan-btn"><button className="btn btn-round btn-outline-secondary">Choose plan</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 cool-md-4 col-sm-12">
                        <div className="card">
                            <ul className="pricing body active">
                                <li className="plan-img"><img className="img-fluid rounded-circle" src="../assets/images/plan-2.svg" alt="" /></li>
                                <li className="price">
                                    <h3><span>$</span> 199 <small>/ mo</small></h3>
                                    <span>Business</span>
                                </li>
                                <li>5 GB of space</li>
                                <li>Support at $10/hour</li>
                                <li>Full cloud access</li>
                                <li className="plan-btn"><button className="btn btn-round btn-primary">Choose plan</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 cool-md-4 col-sm-12">
                        <div className="card">
                            <ul className="pricing body">
                                <li className="plan-img"><img className="img-fluid rounded-circle" src="../assets/images/plan-3.svg" alt="" /></li>
                                <li className="price">
                                    <h3><span>$</span> 299 <small>/ mo</small></h3>
                                    <span>Enterprise</span>
                                </li>
                                <li>15 GB of space</li>
                                <li>Support at $5/hour</li>
                                <li>Full cloud access</li>
                                <li className="plan-btn"><button className="btn btn-round btn-outline-secondary">Choose plan</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default PagePricing
