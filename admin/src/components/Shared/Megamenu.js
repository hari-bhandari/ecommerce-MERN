import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleMegamenu } from '../../actions/settingsAction';

const Megamenu = ({ toggleMegamenu, isMegaMenu }) => {
    return (
        <>
            <div id="megamenu" className={`megamenu particles_js ${isMegaMenu ? " open" : ""}`}>
                <span onClick={() => toggleMegamenu(!isMegaMenu)} className="megamenu_toggle btn btn-danger"><i className="icon-close"></i></span>
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-12">
                            <ul className="q_links">
                                <li onClick={() => toggleMegamenu(!isMegaMenu)}><Link to="/app-inbox"><i className="icon-envelope"></i><span>Inbox</span></Link></li>
                                <li onClick={() => toggleMegamenu(!isMegaMenu)}><Link to="/app-chat"><i className="icon-bubbles"></i><span>Messenger</span></Link></li>
                                <li onClick={() => toggleMegamenu(!isMegaMenu)}><Link to="/app-calendar"><i className="icon-calendar"></i><span>Event</span></Link></li>
                                <li onClick={() => toggleMegamenu(!isMegaMenu)}><Link to="/page-profile"><i className="icon-user"></i><span>Profile</span></Link></li>
                                <li onClick={() => toggleMegamenu(!isMegaMenu)}><Link to="/page-invoices"><i className="icon-printer"></i><span>Invoice</span></Link></li>
                                <li onClick={() => toggleMegamenu(!isMegaMenu)}><Link to="/page-timeline"><i className="icon-list"></i><span>Timeline</span></Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="card w_card3">
                                <div className="body">
                                    <div className="text-center"><i className="icon-picture text-info"></i>
                                        <h4 className="m-t-25 mb-0">104 Picture</h4>
                                        <p>Your gallery download complete</p>
                                        <a href="/" className="btn btn-info btn-round">Download now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="card w_card3">
                                <div className="body">
                                    <div className="text-center"><i className="icon-diamond text-success"></i>
                                        <h4 className="m-t-25 mb-0">813 Point</h4>
                                        <p>You are doing great job!</p>
                                        <a href="/" className="btn btn-success btn-round">Read now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="card w_card3">
                                <div className="body">
                                    <div className="text-center"><i className="icon-social-twitter text-primary"></i>
                                        <h4 className="m-t-25 mb-0">3,756</h4>
                                        <p>New Followers on Twitter</p>
                                        <a href="/" className="btn btn-primary btn-round">Find more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Anyone send me a message
                            <div className="float-right">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    Anyone seeing my profile page
                            <div className="float-right">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    Anyone posts a comment on my post
                            <div className="float-right">
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="particles-js"></div>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    isMegaMenu: state.settings.isMegaMenu
})

const mapDispatchToProps = dispatch => ({
    toggleMegamenu: (e) => dispatch(toggleMegamenu(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(Megamenu);