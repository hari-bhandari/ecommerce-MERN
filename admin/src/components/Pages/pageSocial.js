import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavLink, NavItem } from "reactstrap";
import classnames from 'classnames';
import Tooltip from '../common/toolTip';
import Carousel from 'react-bootstrap/Carousel'

const PageSocial = () => {
    const [activeTab, setActiveTab] = useState(1)
    return (

        <div className="container-fluid social">
            <div className="block-header">
                <div className="row clearfix">
                    <div className="col-md-6 col-sm-12">
                        <h2>Social</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Oculux</Link>></li>
                                <li className="breadcrumb-item active" aria-current="page">Social</li>
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
                        <div className="profile-header d-flex justify-content-between justify-content-center">
                            <div className="d-flex">
                                <div className="mr-3">
                                    <img src="../assets/images/user.png" className="rounded" alt="Avatar" />
                                </div>
                                <div className="details">
                                    <h5 className="mb-0">Louis Pierce</h5>
                                    <span className="text-light">Ui UX Designer</span>
                                    <p className="mb-0"><span>Posts: <strong>321</strong></span> <span>Followers: <strong>4,230</strong></span> <span>Following: <strong>560</strong></span></p>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-primary btn-sm mr-1">Follow</button>
                                <button className="btn btn-success btn-sm">Message</button>
                            </div>
                        </div>
                        <Nav className="nav-tabs3 mt-2">
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === 1 })}
                                    onClick={() => setActiveTab(1)}
                                >
                                    Feeds
                   					</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === 2 })}
                                    onClick={() => setActiveTab(2)}
                                >
                                    Activity
    			               		</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === 3 })}
                                    onClick={() => setActiveTab(3)}
                                >
                                    Friends
    			               		</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </div>
                <TabContent className="col-md-12" activeTab={activeTab}>
                    {/* <div className="tab-content col-md-12"> */}
                    <TabPane tabId={1} className={classnames(['vivify fadeIn delay-100 show'])}>
                        <div className="row clearfix">
                            <div className="col-lg-8 col-md-12">
                                <div className="card">
                                    <div className="body">
                                        <div className="d-flex mb-3">
                                            <div className="icon bg-transparent">
                                                <img src="../assets/images/user-small.png" className="rounded mr-3 w40" alt="Avatar" />
                                            </div>
                                            <div>
                                                <h6 className="mb-0">Louis Pierce</h6>
                                                <span>UI director</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <textarea rows="4" className="form-control no-resize" placeholder="Please type what you want..."></textarea>
                                        </div>
                                        <div className="align-right">
                                            <button className="btn btn-link"><i className="icon-paper-clip text-muted"></i></button>
                                            <button className="btn btn-link"><i className="icon-camera text-muted"></i></button>
                                            <button className="btn btn-link"><i className="icon-pointer text-muted"></i></button>
                                            <button className="btn btn-primary">Post</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="body">
                                        <div className="d-flex mb-3">
                                            <div className="icon bg-transparent">
                                                <img src="../assets/images/user-small.png" className="rounded mr-3 w40" alt="Avatar" />
                                            </div>
                                            <div>
                                                <h6 className="mb-0">Louis Pierce</h6>
                                                <small>Sept 01, 2018</small>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <img className="img-fluid rounded" src="../assets/images/image-gallery/2.jpg" alt="galleryImg" />
                                            <h5 className="mt-3">All photographs are accurate</h5>
                                            <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</span>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <Link to="/" className="mr-3"><i className="icon-like"></i> 10K Likes </Link>
                                        <Link to="/" className="mr-3"><i className="icon-bubbles"></i> 92 Comments </Link>
                                        <Link to="/" ><i className="icon-share"></i> Share</Link>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="body">
                                        <div className="d-flex mb-3">
                                            <div className="icon bg-transparent">
                                                <img src="../assets/images/user-small.png" className="rounded mr-3 w40" alt="Avatar" />
                                            </div>
                                            <div>
                                                <h6 className="mb-0">Louis Pierce</h6>
                                                <small>Aug 27, 2018</small>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="row row-xs">
                                                <div className="col-6 mb-2">
                                                    <img className="img-fluid rounded" src="../assets/images/image-gallery/3.jpg" alt="galleryImg" />
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <img className="img-fluid rounded" src="../assets/images/image-gallery/4.jpg" alt="galleryImg" />
                                                </div>
                                                <div className="col-4">
                                                    <img className="img-fluid rounded" src="../assets/images/image-gallery/5.jpg" alt="galleryImg" />
                                                </div>
                                                <div className="col-4">
                                                    <img className="img-fluid rounded" src="../assets/images/image-gallery/6.jpg" alt="galleryImg" />
                                                </div>
                                                <div className="col-4">
                                                    <img className="img-fluid rounded" src="../assets/images/image-gallery/7.jpg" alt="galleryImg" />
                                                </div>
                                            </div>
                                            <h5 className="mt-3">All photographs are accurate</h5>
                                            <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</span>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <Link to="/" className="mr-3"><i className="icon-like"></i> 10K Likes </Link>
                                        <Link to="/" className="mr-3"><i className="icon-bubbles"></i> 92 Comments </Link>
                                        <Link to="/" ><i className="icon-share"></i> Share</Link>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="body">
                                        <div className="d-flex mb-3">
                                            <div className="icon bg-transparent">
                                                <img src="../assets/images/user-small.png" className="rounded mr-3 w40" alt="Avatar" />
                                            </div>
                                            <div>
                                                <h6 className="mb-0">Louis Pierce</h6>
                                                <small>Sept 01, 2018</small>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <img className="img-fluid rounded" src="../assets/images/image-gallery/6.jpg" alt="galleryImg" />
                                            <h5 className="mt-3">All photographs are accurate</h5>
                                            <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</span>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <Link to="/" className="mr-3"><i className="icon-like"></i> 10K Likes </Link>
                                        <Link to="/" className="mr-3"><i className="icon-bubbles"></i> 92 Comments </Link>
                                        <Link to="/" ><i className="icon-share"></i> Share</Link>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="body">
                                        <div className="d-flex mb-3">
                                            <div className="icon bg-transparent">
                                                <img src="../assets/images/user-small.png" className="rounded mr-3 w40" alt="Avatar" />
                                            </div>
                                            <div>
                                                <h6 className="mb-0">Louis Pierce</h6>
                                                <small>Aug 27, 2018</small>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="row row-xs">
                                                <div className="col-4">
                                                    <img className="img-fluid rounded" src="../assets/images/image-gallery/10.jpg" alt="galleryImg" />
                                                </div>
                                                <div className="col-4">
                                                    <img className="img-fluid rounded" src="../assets/images/image-gallery/11.jpg" alt="galleryImg" />
                                                </div>
                                                <div className="col-4">
                                                    <img className="img-fluid rounded" src="../assets/images/image-gallery/12.jpg" alt="galleryImg" />
                                                </div>
                                            </div>
                                            <h5 className="mt-3">All photographs are accurate</h5>
                                            <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</span>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <Link to="/" className="mr-3"><i className="icon-like"></i> 10K Likes </Link>
                                        <Link to="/" className="mr-3"><i className="icon-bubbles"></i> 92 Comments </Link>
                                        <Link to="/" ><i className="icon-share"></i> Share</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <div className="body">
                                        <div className="card-value float-right text-warning"><i className="wi wi-day-cloudy"></i></div>
                                        <h3 className="mb-1">18°C</h3>
                                        <div>New York, USA</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="header">
                                        <h2>My Portfolio Status</h2>
                                    </div>
                                    <div className="body">
                                        <ul className="list-unstyled">
                                            <li className="m-b-15">
                                                <div>Behance</div>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}> <span className="sr-only">40% Complete (success)</span> </div>
                                                </div>
                                            </li>
                                            <li className="m-b-15">
                                                <div>Photoshop</div>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}> <span className="sr-only">20% Complete</span> </div>
                                                </div>
                                            </li>
                                            <li className="m-b-15">
                                                <div>Dribbble</div>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}> <span className="sr-only">60% Complete (warning)</span> </div>
                                                </div>
                                            </li>
                                            <li className="m-b-15">
                                                <div>Pinterest</div>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}> <span className="sr-only">80% Complete (danger)</span> </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row clearfix w_social3">
                                    <div className="col-lg-6 col-6">
                                        <div className="card facebook-widget">
                                            <div id="slider2" className="carousel slide" data-ride="carousel" data-interval="2000">
                                                <Carousel
                                                    fade={false}
                                                    indicators={false}
                                                    interval={3000}
                                                    keyboard={false}
                                                >
                                                    <Carousel.Item >
                                                        <div className="icon"><i className="fa fa-facebook"></i></div>
                                                        <div className="content">
                                                            <div className="text">Like</div>
                                                            <div className="number">10K</div>
                                                        </div>
                                                    </Carousel.Item  >
                                                    <Carousel.Item  >
                                                        <div className="icon"><i className="fa fa-facebook"></i></div>
                                                        <div className="content">
                                                            <div className="text">Comment</div>
                                                            <div className="number">217</div>
                                                        </div>
                                                    </Carousel.Item  >
                                                    <Carousel.Item  >
                                                        <div className="icon"><i className="fa fa-facebook"></i></div>
                                                        <div className="content">
                                                            <div className="text">Share</div>
                                                            <div className="number">78</div>
                                                        </div>
                                                    </Carousel.Item  >
                                                </Carousel>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-6">
                                        <div className="card instagram-widget">
                                            <div className="icon"><i className="fa fa-instagram"></i></div>
                                            <div className="content">
                                                <div className="text">Followers</div>
                                                <div className="number">231</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-6">
                                        <div className="card google-widget">
                                            <div id="slider2" className="carousel slide vert" data-ride="carousel" data-interval="2000">
                                                <Carousel
                                                    fade={false}
                                                    indicators={false}
                                                    interval={3000}
                                                    keyboard={false}
                                                >
                                                    <Carousel.Item >
                                                        <div className="icon"><i className="fa fa-facebook"></i></div>
                                                        <div className="content">
                                                            <div className="text">Like</div>
                                                            <div className="number">10K</div>
                                                        </div>
                                                    </Carousel.Item  >
                                                    <Carousel.Item  >
                                                        <div className="icon"><i className="fa fa-facebook"></i></div>
                                                        <div className="content">
                                                            <div className="text">Comment</div>
                                                            <div className="number">217</div>
                                                        </div>
                                                    </Carousel.Item  >
                                                    <Carousel.Item  >
                                                        <div className="icon"><i className="fa fa-facebook"></i></div>
                                                        <div className="content">
                                                            <div className="text">Share</div>
                                                            <div className="number">78</div>
                                                        </div>
                                                    </Carousel.Item  >
                                                </Carousel>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-6">
                                        <div className="card twitter-widget">
                                            <div id="slider2" className="carousel slide" data-ride="carousel" data-interval="2000">
                                                <Carousel
                                                    fade={false}
                                                    indicators={false}
                                                    interval={3000}
                                                    keyboard={false}
                                                >
                                                    <Carousel.Item >
                                                        <div className="icon"><i className="fa fa-twitter"></i></div>
                                                        <div className="content">
                                                            <div className="text">Followers</div>
                                                            <div className="number">10K</div>
                                                        </div>
                                                    </Carousel.Item  >
                                                    <Carousel.Item  >
                                                        <div className="icon"><i className="fa fa-facebook"></i></div>
                                                        <div className="content">
                                                            <div className="text">Share</div>
                                                            <div className="number">78</div>
                                                        </div>
                                                    </Carousel.Item  >
                                                </Carousel>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="header">
                                        <h2>Followers</h2>
                                    </div>
                                    <div className="body">
                                        <ul className="right_chat w_followers list-unstyled mb-0">
                                            <li className="online">
                                                <Link to="/">
                                                    <div className="media">
                                                        <div className="avtar-pic w35 bg-red"><span>FC</span></div>
                                                        <div className="media-body">
                                                            <span className="name">@MelissaMcCoy</span>
                                                            <span className="message">Designer, Blogger</span>
                                                            <span className="badge badge-outline status"></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="online">
                                                <Link to="/">
                                                    <div className="media">
                                                        <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt="Avatar" />
                                                        <div className="media-body">
                                                            <span className="name">@Joge Lucky</span>
                                                            <span className="message">Java Developer</span>
                                                            <span className="badge badge-outline status"></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="offline">
                                                <Link to="/">
                                                    <div className="media">
                                                        <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
                                                        <div className="media-body">
                                                            <span className="name">@JuanMartinez</span>
                                                            <span className="message">CEO, puffintheme</span>
                                                            <span className="badge badge-outline status"></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="offline">
                                                <Link to="/">
                                                    <div className="media">
                                                        <div className="avtar-pic w35 bg-indigo"><span>FC</span></div>
                                                        <div className="media-body">
                                                            <span className="name">@Folisise Chosielie</span>
                                                            <span className="message">Art director, Movie Cut</span>
                                                            <span className="badge badge-outline status"></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="online">
                                                <Link to="/">
                                                    <div className="media">
                                                        <img className="media-object " src="../assets/images/xs/avatar3.jpg" alt="Avatar" />
                                                        <div className="media-body">
                                                            <span className="name">@LouisHenry</span>
                                                            <span className="message">Writter, Mag Editor</span>
                                                            <span className="badge badge-outline status"></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="offline">
                                                <Link to="/">
                                                    <div className="media">
                                                        <img className="media-object " src="../assets/images/xs/avatar10.jpg" alt="Avatar" />
                                                        <div className="media-body">
                                                            <span className="name">@Folisise Chosielie</span>
                                                            <span className="message">Art director, Movie Cut</span>
                                                            <span className="badge badge-outline status"></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tabId={2} className={classnames(['vivify fadeIn delay-100'])}>
                        <div className="card">
                            <div className="body">
                                <ul className="timeline">
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>March 12, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Event Title</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                            eu pede mollis pretium. Pellentesque ut neque.</p>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>March 23, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Event Title</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                            eu pede mollis pretium. Pellentesque ut neque. </p>
                                        </div>
                                    </li>
                                    <li className="timeline-item period">
                                        <div className="timeline-info"></div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h2 className="timeline-title">April 2018</h2>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>April 02, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Event Title</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                            eu pede mollis pretium. Pellentesque ut neque. </p>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>April 28, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content pb-0">
                                            <h3 className="timeline-title">Event Title</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                            eu pede mollis pretium. Pellentesque ut neque. </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tabId={3} className={classnames(['vivify fadeIn delay-100'])}>
                        <div className="table-responsive">
                            <table className="table table-hover table-custom spacing5">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th></th>
                                        <th>eMail</th>
                                        <th>Address</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="w60">
                                            <Tooltip text="Avatar Name" id="avatar1" />
                                            <img src="../assets/images/xs/avatar1.jpg" data-for="avatar1" data-tip title="Avatar Name" alt="Avatar" className="w35 rounded" />
                                        </td>
                                        <td>
                                            <Link to="/" title="">Jason Porter</Link>
                                            <p className="mb-0">+ 264-625-5858</p>
                                        </td>
                                        <td>
                                            <span>jason-porter@example.com</span>
                                        </td>
                                        <td>
                                            <span>123 6th St. Melbourne, FL 32904</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-1">Follow</button>
                                            <button className="btn btn-success btn-sm">Message</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w60">
                                            <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 rounded" />
                                        </td>
                                        <td>
                                            <Link to="/" title="">Denise Elliott</Link>
                                            <p className="mb-0">+ 264-625-4523</p>
                                        </td>
                                        <td>
                                            <span>denise-elliott@example.com</span>
                                        </td>
                                        <td>
                                            <span>514 S. Magnolia St. Orlando, FL 32806</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-1">Follow</button>
                                            <button className="btn btn-success btn-sm">Message</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w60">
                                            <img src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 rounded" />
                                        </td>
                                        <td>
                                            <Link to="/" title="">Rose Coke</Link>
                                            <p className="mb-0">+ 264-625-2583</p>
                                        </td>
                                        <td>
                                            <span>rose-coke@example.com</span>
                                        </td>
                                        <td>
                                            <span>44 Shirley Ave. West Chicago, IL 60185</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-1">Follow</button>
                                            <button className="btn btn-success btn-sm">Message</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w60">
                                            <img src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 rounded" />
                                        </td>
                                        <td>
                                            <Link to="/" title="">Grace Knight</Link>
                                            <p className="mb-0">+ 264-625-2583</p>
                                        </td>
                                        <td>
                                            <span>grace-knight@example.com</span>
                                        </td>
                                        <td>
                                            <span>70 Bowman St. South Windsor, CT 06074</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-1">Follow</button>
                                            <button className="btn btn-success btn-sm">Message</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w60">
                                            <img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 rounded" />
                                        </td>
                                        <td>
                                            <Link to="/" title="">Elizabeth Martin</Link>
                                            <p className="mb-0">+ 264-625-2341</p>
                                        </td>
                                        <td>
                                            <span>Elizabeth-Martin@example.com</span>
                                        </td>
                                        <td>
                                            <span>123 6th St. Melbourne, FL 32904</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-1">Follow</button>
                                            <button className="btn btn-success btn-sm">Message</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w60">
                                            <img src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 rounded" />
                                        </td>
                                        <td>
                                            <Link to="/" title="">Sean Black</Link>
                                            <p className="mb-0">+ 264-625-7262</p>
                                        </td>
                                        <td>
                                            <span>denise-Alvarado@example.com</span>
                                        </td>
                                        <td>
                                            <span>514 S. Magnolia St. Orlando, FL 32806</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-1">Follow</button>
                                            <button className="btn btn-success btn-sm">Message</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w60">
                                            <img src="../assets/images/xs/avatar7.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 rounded" />
                                        </td>
                                        <td>
                                            <Link to="/" title="">David Wallace</Link>
                                            <p className="mb-0">+ 264-625-9283</p>
                                        </td>
                                        <td>
                                            <span>Carol-coke@example.com</span>
                                        </td>
                                        <td>
                                            <span>44 Shirley Ave. West Chicago, IL 60185</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-1">Follow</button>
                                            <button className="btn btn-success btn-sm">Message</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w60">
                                            <img src="../assets/images/xs/avatar8.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 rounded" />
                                        </td>
                                        <td>
                                            <Link to="/" title="">Theresa Wright</Link>
                                            <p className="mb-0">+ 264-625-2233</p>
                                        </td>
                                        <td>
                                            <span>Michelle-Schultz@example.com</span>
                                        </td>
                                        <td>
                                            <span>70 Bowman St. South Windsor, CT 06074</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-1">Follow</button>
                                            <button className="btn btn-success btn-sm">Message</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    );

}
export default PageSocial
