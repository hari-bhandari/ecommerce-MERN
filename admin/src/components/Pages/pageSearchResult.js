import React from 'react';
import { Link } from 'react-router-dom';

const PageSearchResult = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Search Result</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><a href="/">Pages</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Search</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <a href="/" className="btn btn-sm btn-primary btn-round" title="">Add New</a>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="body">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Search here..." />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Search</button>
                                    </div>
                                </div>
                                <strong> About <span className="text-orange">12,284</span> result ( 0.17 seconds)</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-xl-8 col-lg-7 col-md-12">
                        <div className="card">
                            <div className="body">
                                <div>
                                    <a className="text-info" href="/">Oculux - Bootstrap 4x Admin Template with HR Module</a>
                                    <br />
                                    <div>
                                        <a className="text-success" href="https://themeforest.net/user/puffintheme/portfolio">https://themeforest.net/user/puffintheme/portfolio</a>
                                        <span className="divider-dot mx-2"></span>
                                        <div className="rating rating-xs rating-static rating-yellow" data-has-rate="false">
                                            <label className="fa fa-star active"></label>
                                            <label className="fa fa-star active"></label>
                                            <label className="fa fa-star active"></label>
                                            <label className="fa fa-star active"></label>
                                            <label className="fa fa-star active"></label>
                                        </div>
                                        <small>5 Star</small>
                                        <span className="divider-dot mx-2"></span>
                                        <small>12,500 vote</small>
                                    </div>
                                    <p className="mt-2">It’s responsive HTML template, which is based on the Bootstrap 4X framework. It utilizes all of the Bootstrap components in design and re-styles many commonly used plugins to create a consistent design that can be used as a user interface for backend applications.</p>
                                    <div className="row">
                                        <div className="col-md-6 mt-2">
                                            <a className="text-info" href="/">Download</a>
                                            <p className="mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <a className="text-info" href="/">Pricing</a>
                                            <p className="mt-1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...</p>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <a className="text-info" href="/">Comments</a>
                                            <p className="mt-1">Collaboratively disseminate B2C networks after stand-alone synergy. Continually promote...</p>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <a className="text-info" href="/">Reviews</a>
                                            <p className="mt-1">There are many variations of passages of Lorem Ipsum available, but the majority have suffered...</p>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <a className="text-info" href="/">Support</a>
                                            <p className="mt-1">Contrary to popular belief, Lorem Ipsum is not simply random text...</p>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <a className="text-info" href="/">Updates</a>
                                            <p className="mt-1">The standard chunk of Lorem Ipsum used since the 1500s is reproduced...</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <a className="text-info" href="/">TheJobs - Job borad template</a>
                                    <br />
                                    <a className="text-success" href="/">https://themeforest.net/user/puffintheme</a>
                                    <p className="mt-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour...</p>
                                    <hr />
                                </div>
                                <div>
                                    <a className="text-info" href="/">TheDocs - Online documentation template</a>
                                    <br />
                                    <a className="text-success" href="/">https://themeforest.net/user/puffintheme</a>
                                    <p className="mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum...</p>
                                    <hr />
                                </div>
                                <div>
                                    <a className="text-info" href="/">TheShots - Responsive image listing template</a>
                                    <br />
                                    <a className="text-success" href="/">https://themeforest.net/user/puffintheme</a>
                                    <p className="mt-2">here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected...</p>
                                    <hr />
                                </div>
                                <div>
                                    <a className="text-info" href="/">TheGuide - Online documentation template</a>
                                    <br />
                                    <a className="text-success" href="/">https://themeforest.net/user/puffintheme</a>
                                    <p className="mt-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature...</p>
                                    <hr />
                                </div>
                                <div>
                                    <h6>Related searches</h6>
                                    <div className="row">
                                        <div className="col-6 col-lg-4 mb-2">
                                            <a className="text-info" href="/">Enhanced form <strong>components</strong></a>
                                        </div>

                                        <div className="col-6 col-lg-4 mb-2">
                                            <a className="text-info" href="/">Dashboard <strong>templates</strong></a>
                                        </div>

                                        <div className="col-6 col-lg-4 mb-2">
                                            <a className="text-info" href="/">Web application <strong>template</strong></a>
                                        </div>

                                        <div className="col-6 col-lg-4 mb-2">
                                            <a className="text-info" href="/"><strong>Admin</strong> dashboards</a>
                                        </div>

                                        <div className="col-6 col-lg-4 mb-2">
                                            <a className="text-info" href="/">Premium <strong>admin template</strong></a>
                                        </div>

                                        <div className="col-6 col-lg-4 mb-2">
                                            <a className="text-info" href="/">UI kit collection</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href>Previous</a></li>
                                <li className="page-item active"><a className="page-link" href>1</a></li>
                                <li className="page-item"><a className="page-link" href>2</a></li>
                                <li className="page-item"><a className="page-link" href>3</a></li>
                                <li className="page-item"><a className="page-link" href>Next</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-12">
                        <div className="card">
                            <div className="body">
                                <a href="/"><img className="img-fluid img-thumbnail" src="../assets/images/preview.png" alt="..." /></a>
                                <h5 className="mt-4">Oculux Admin dabshoard</h5>
                                <p>It’s responsive HTML template, which is based on the Bootstrap 4X framework. It utilizes all of the Bootstrap components in design and re-styles many commonly used plugins to create a consistent design that can be used as a user interface for backend applications.</p>
                                <div className="mt-3">
                                    <div><strong className="d-inline-block w-70px">Author:</strong> PuffinTheme</div>
                                    <div><strong className="d-inline-block w-70px">Support:</strong> All modern browsers</div>
                                    <div><strong className="d-inline-block w-70px">Created on:</strong> 9 January 19</div>
                                    <div><strong className="d-inline-block w-70px">Updated on:</strong> 13 March 19</div>
                                </div>
                                <p className="mt-5">Photos</p>
                                <div className="row">
                                    <a className="col-4" href="/"><img className="img-fluid p-2" src="../assets/images/preview.png" alt="..." /></a>
                                    <a className="col-4" href="/"><img className="img-fluid p-2" src="../assets/images/preview01.png" alt="..." /></a>
                                    <a className="col-4" href="/"><img className="img-fluid p-2" src="../assets/images/preview02.png" alt="..." /></a>
                                    <a className="col-4" href="/"><img className="img-fluid p-2" src="../assets/images/preview03.png" alt="..." /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default PageSearchResult
