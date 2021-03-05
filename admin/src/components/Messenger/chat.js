import React from 'react';
import { Link } from 'react-router-dom';

const Messenger = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Chat</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">App</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Messages</li>
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
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="body">
                                <div className="chatapp_list">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Search..." />
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="icon-magnifier"></i></span>
                                        </div>
                                    </div>
                                    <ul className="right_chat list-unstyled mb-0">
                                        <li className="offline">
                                            <Link to="/">
                                                <div className="media">
                                                    <div className="avtar-pic w35 bg-red"><span>FC</span></div>
                                                    <div className="media-body">
                                                        <span className="name">Folisise Chosielie</span>
                                                        <span className="message">offline</span>
                                                        <span className="badge badge-outline status"></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="online">
                                            <Link to="/">
                                                <div className="media">
                                                    <img className="media-object " src="../assets/images/xs/avatar3.jpg" alt="avatar" />
                                                    <div className="media-body">
                                                        <span className="name">Marshall Nichols</span>
                                                        <span className="message">online</span>
                                                        <span className="badge badge-outline status"></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="online">
                                            <Link to="/">
                                                <div className="media">
                                                    <div className="avtar-pic w35 bg-red"><span>FC</span></div>
                                                    <div className="media-body">
                                                        <span className="name">Louis Henry</span>
                                                        <span className="message">online</span>
                                                        <span className="badge badge-outline status"></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="online">
                                            <Link to="/">
                                                <div className="media">
                                                    <div className="avtar-pic w35 bg-orange"><span>DS</span></div>
                                                    <div className="media-body">
                                                        <span className="name">Debra Stewart</span>
                                                        <span className="message">online</span>
                                                        <span className="badge badge-outline status"></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="offline">
                                            <Link to="/">
                                                <div className="media">
                                                    <div className="avtar-pic w35 bg-green"><span>SW</span></div>
                                                    <div className="media-body">
                                                        <span className="name">Lisa Garett</span>
                                                        <span className="message">offline since May 12</span>
                                                        <span className="badge badge-outline status"></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="online">
                                            <Link to="/">
                                                <div className="media">
                                                    <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt="avatar" />
                                                    <div className="media-body">
                                                        <span className="name">Debra Stewart</span>
                                                        <span className="message">online</span>
                                                        <span className="badge badge-outline status"></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="offline">
                                            <Link to="/">
                                                <div className="media">
                                                    <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt="avatar" />
                                                    <div className="media-body">
                                                        <span className="name">Lisa Garett</span>
                                                        <span className="message">offline since Jan 18</span>
                                                        <span className="badge badge-outline status"></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="online">
                                            <Link to="/">
                                                <div className="media">
                                                    <div className="avtar-pic w35 bg-indigo"><span>FC</span></div>
                                                    <div className="media-body">
                                                        <span className="name">Louis Henry</span>
                                                        <span className="message">online</span>
                                                        <span className="badge badge-outline status"></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="online">
                                            <Link to="/">
                                                <div className="media">
                                                    <div className="avtar-pic w35 bg-pink"><span>DS</span></div>
                                                    <div className="media-body">
                                                        <span className="name">Debra Stewart</span>
                                                        <span className="message">online</span>
                                                        <span className="badge badge-outline status"></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="offline">
                                            <Link to="/">
                                                <div className="media">
                                                    <div className="avtar-pic w35 bg-info"><span>SW</span></div>
                                                    <div className="media-body">
                                                        <span className="name">Lisa Garett</span>
                                                        <span className="message">offline since May 12</span>
                                                        <span className="badge badge-outline status"></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="chatapp_body">
                                    <div className="chat-header clearfix">
                                        <div className="row clearfix">
                                            <div className="col-lg-12">
                                                <div className="chat-about">
                                                    <h6 className="m-b-0">Louis Pierce</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-history">
                                        <ul className="message_data">
                                            <li className="right clearfix">
                                                <img className="user_pix" src="../assets/images/xs/avatar7.jpg" alt="avatar" />
                                                <div className="message">
                                                    <span>Hi Aiden, how are you?<br /> How is the project coming along?</span>
                                                </div>
                                                <span className="data_time">10:12 AM, Today</span>
                                            </li>
                                            <li className="left clearfix">
                                                <img className="user_pix" src="../assets/images/user.png" alt="avatar" />
                                                <div className="message">
                                                    <span>Are we meeting today?</span>
                                                </div>
                                                <span className="data_time">10:12 AM, Today</span>
                                            </li>
                                            <li className="right clearfix">
                                                <img className="user_pix" src="../assets/images/xs/avatar5.jpg" alt="avatar" />
                                                <div className="message">
                                                    <span>How is the project coming along?</span>
                                                </div>
                                                <span className="data_time">10:12 AM, Today</span>
                                            </li>
                                            <li className="left clearfix">
                                                <img className="user_pix" src="../assets/images/user.png" alt="avatar" />
                                                <div className="message">
                                                    <span>Project has been already finished and I have<br /> results to show you.</span>
                                                </div>
                                                <span className="data_time">10:16 AM, Today</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="chat-message clearfix">
                                        <div className="input-group mb-0">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <a href="/" className="btn btn-link"><i className="icon-camera text-warning"></i></a>
                                                    <a href="/" className="btn btn-link"><i className="icon-camcorder text-warning"></i></a>
                                                </span>
                                            </div>
                                            <textarea type="text" row="" className="form-control" placeholder="Enter text here..."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="chatapp_detail text-center vivify pullLeft delay-150">
                                    <div className="profile-image"><img src="../assets/images/user.png" className="rounded-circle mb-3" alt="avatar" /></div>
                                    <h5 className="mb-0">Louis Pierce</h5>
                                    <small className="text-muted">Address: </small>
                                    <p> San Francisco</p>
                                    <small className="text-muted">Email address: </small>
                                    <p>louispierce@example.com</p>
                                    <small className="text-muted">Mobile: </small>
                                    <p>+ 202-222-2121</p>
                                    <button className="btn btn-round btn-success">View Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Messenger
