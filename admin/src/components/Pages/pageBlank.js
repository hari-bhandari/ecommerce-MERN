import React from 'react';
import { Link } from 'react-router-dom';

const PageBlank = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Stater Page</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">Pages</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Stater Page</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <Link to="/" className="btn btn-sm btn-primary btn-round" title="">Add New</Link>
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12">
                        <div className="card planned_task">
                            <div className="header">
                                <h2>Stater Page</h2>
                                <ul className="header-dropdown dropdown">
                                    <li><Link to="/" className="full-screen"><i className="icon-frame"></i></Link></li>
                                    <li className="dropdown">
                                        <Link to="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></Link>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/">Action</Link></li>
                                            <li><Link to="/">Another Action</Link></li>
                                            <li><Link to="/">Something else</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="body">
                                <h4>Stater Page</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

}
export default PageBlank
