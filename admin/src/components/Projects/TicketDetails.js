import React from 'react';
import { Link } from 'react-router-dom';

const TicketDetails = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Ticket Details</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><a href="/">Project</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Details</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <Link to="/" className="btn btn-sm btn-primary mr-1" title="">Create Campaign</Link>
                            <Link to="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket"></i> Buy Now</Link>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12">
                        <div className="card c_grid c_yellow">
                            <div className="body text-center">
                                <div className="circle">
                                    <img className="rounded-circle" src="../assets/images/sm/avatar1.jpg" alt="avatar" />
                                </div>
                                <h6 className="mt-3 mb-0">Michelle Green</h6>
                                <span>jason-porter@info.com</span>
                                <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                    <li><Link className="p-3"  to="/"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link className="p-3"  to="/"><i className="fa fa-slack"></i></Link></li>
                                    <li><Link className="p-3"  to="/"><i className="fa fa-linkedin"></i></Link></li>
                                </ul>
                                <button className="btn btn-default btn-sm mr-1">Follow</button>
                                <button className="btn btn-default btn-sm">Message</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>Ticket Details</h2>
                            </div>
                            <div className="body">
                                <span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>Ticket Info</h2>
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <small className="text-muted">Title: </small>
                                    <p className="mb-0">Oculux Admin Template</p>
                                </li>
                                <li className="list-group-item">
                                    <small className="text-muted">Department: </small>
                                    <p className="mb-0">Pre-Sales</p>
                                </li>
                                <li className="list-group-item">
                                    <small className="text-muted">Product: </small>
                                    <p className="mb-0">Oculux Side Menu Open OnClick</p>
                                </li>
                                <li className="list-group-item">
                                    <small className="text-muted">Date: </small>
                                    <p className="mb-0">07 Feb 2019</p>
                                </li>
                                <li className="list-group-item">
                                    <div>In Progress</div>
                                    <div className="progress progress-xxs progress-transparent custom-color-green mb-0 mt-3">
                                        <div className="progress-bar" data-transitiongoal="67" aria-valuenow="67" style={{ width: "0%" }}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="card">
                            <div className="body">
                                <div className="summernote">
                                    Hi there,
                                <br />
                                    <p>The toolbar can be customized and it also supports various callbacks such as <code>oninit</code>, <code>onfocus</code>, <code>onpaste</code> and many more.</p>
                                    <br />
                                    <p>Thank you!</p>
                                    <h6>Summer Note</h6>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>Ticket Replies</h2>
                                <ul className="header-dropdown dropdown">
                                    <li><a href className="full-screen"><i className="icon-frame"></i></a></li>
                                    <li className="dropdown">
                                        <span className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></span>
                                        <ul className="dropdown-menu">
                                            <li><a href>Action</a></li>
                                            <li><a href>Another Action</a></li>
                                            <li><a href>Something else</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="body">
                                <ul className="timeline">
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>Feb 15, 2015</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Parramatta WordPress Meetup</h3>
                                            <p className="text-muted mt-0 mb-0">@ 6:00 pm - 9:00 pm Bay Area, San Francisco</p>
                                            <small>(4,325 tickets sold) <span className="text-danger">Sold Out</span></small>
                                            <p>Welcome to the Parramatta chapter of the WP <a href="/">Sydney</a> Meetup[...]</p>
                                            <ul className="list-unstyled team-info sm margin-0">
                                                <li><img src="../assets/images/xs/avatar7.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar9.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
                                                <li className="ml-2"><span>5k +</span></li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>Feb 23, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Women’s Javascript Study Group</h3>
                                            <p className="text-muted mt-0 mb-0">@ 7:00 pm - 10:00 pm Singapore</p>
                                            <small>(2,325 tickets sold) <span className="text-danger">Sold Out</span></small>
                                            <p>Overview We're a group of women who want to learn JavaScript[...]</p>
                                            <ul className="list-unstyled team-info sm margin-0">
                                                <li><img src="../assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
                                                <li className="ml-2"><span>2k +</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>April 02, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Santa Cruz WordPress Monthly Meetup</h3>
                                            <p className="text-muted mt-0 mb-0">@ 7:00 pm - 10:00 pm Singapore</p>
                                            <small>(20,512 tickets sold) <span className="text-danger">Sold Out</span></small>
                                            <p>We will provide an opportunity for learning, collaboration[...]</p>
                                            <ul className="list-unstyled team-info sm margin-0">
                                                <li><img src="../assets/images/xs/avatar10.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
                                                <li><img src="../assets/images/xs/avatar5.jpg" alt="Avatar" /></li>
                                                <li className="ml-2"><span>10k +</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}
export default TicketDetails
