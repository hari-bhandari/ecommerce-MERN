import React from 'react';
import { Link } from 'react-router-dom';

const TicketList = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Ticket List</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><a href="/">Project</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Ticket</li>
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
                    <div className="col-12">
                        <div className="card">
                            <div className="body">
                                <div className="row">
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="id" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Priority" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Department" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Agent" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Date" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <a href="/" className="btn btn-sm btn-primary btn-block" title="">Search</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-custom2 table-hover">
                                <thead>
                                    <tr>
                                        <th colSpan="5">Ticket Detail</th>
                                        <th colSpan="3">Activity</th>
                                    </tr>
                                    <tr>
                                        <th className="w30">&nbsp;</th>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Priority</th>
                                        <th>Department</th>
                                        <th>Agent</th>
                                        <th>Date</th>
                                        <th>Activity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label className="fancy-checkbox margin-0">
                                                <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="/">ASD-5258</a></td>
                                        <td><span>It is a long established fact that a reader</span></td>
                                        <td><span className="badge badge-default">lower</span></td>
                                        <td><span>Pre-Sales</span></td>
                                        <td><span>Archie Cantones</span></td>
                                        <td><span>6 hours ago</span></td>
                                        <td>No reply yet</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="fancy-checkbox margin-0">
                                                <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="/">ASD-8793</a></td>
                                        <td><span>Measures your Current Assets / Current</span></td>
                                        <td><span className="badge badge-danger">High</span></td>
                                        <td><span>Pre-Sales</span></td>
                                        <td><span>Rose Orcullo</span></td>
                                        <td><span>9 hours ago</span></td>
                                        <td>2 reply</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="fancy-checkbox margin-0">
                                                <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="/">ASD-2500</a></td>
                                        <td><span>There are many variations of passages</span></td>
                                        <td><span className="badge badge-info">Medium</span></td>
                                        <td><span>Pre-Sales</span></td>
                                        <td><span>Charize Cericoz</span></td>
                                        <td><span>10 hours ago</span></td>
                                        <td>1 reply</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="fancy-checkbox margin-0">
                                                <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="/">ASD-9465</a></td>
                                        <td><span>Measures your Current Assets / Current</span></td>
                                        <td><span className="badge badge-default">lower</span></td>
                                        <td><span>Payment</span></td>
                                        <td><span>Billie Ko</span></td>
                                        <td><span>23-01-2019</span></td>
                                        <td>No reply yet</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="fancy-checkbox margin-0">
                                                <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="/">ASD-1515</a></td>
                                        <td><span>Contrary to popular belief, Lorem Ipsum</span></td>
                                        <td><span className="badge badge-info">Medium</span></td>
                                        <td><span>Sales</span></td>
                                        <td><span>Hamza Macasindil</span></td>
                                        <td><span>22-01-2019</span></td>
                                        <td>No reply yet</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="fancy-checkbox margin-0">
                                                <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="/">ASD-2589</a></td>
                                        <td><span>It uses a dictionary of over 200 Latin</span></td>
                                        <td><span className="badge badge-info">Medium</span></td>
                                        <td><span>Technical</span></td>
                                        <td><span>Dyanne Aceron</span></td>
                                        <td><span>28-01-2019</span></td>
                                        <td>5 reply</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="fancy-checkbox margin-0">
                                                <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="/">ASD-8793</a></td>
                                        <td><span>Measures your Current Assets / Current</span></td>
                                        <td><span className="badge badge-danger">High</span></td>
                                        <td><span>Pre-Sales</span></td>
                                        <td><span>Rose Orcullo</span></td>
                                        <td><span>9 hours ago</span></td>
                                        <td>2 reply</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="fancy-checkbox margin-0">
                                                <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="/">ASD-2500</a></td>
                                        <td><span>There are many variations of passages</span></td>
                                        <td><span className="badge badge-info">Medium</span></td>
                                        <td><span>Pre-Sales</span></td>
                                        <td><span>Charize Cericoz</span></td>
                                        <td><span>10 hours ago</span></td>
                                        <td>1 reply</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="fancy-checkbox margin-0">
                                                <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="/">ASD-9465</a></td>
                                        <td><span>Measures your Current Assets / Current</span></td>
                                        <td><span className="badge badge-default">lower</span></td>
                                        <td><span>Payment</span></td>
                                        <td><span>Billie Ko</span></td>
                                        <td><span>23-01-2019</span></td>
                                        <td>No reply yet</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="fancy-checkbox margin-0">
                                                <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="/">ASD-4569</a></td>
                                        <td><span>The standard chunk of Lorem Ipsum used</span></td>
                                        <td><span className="badge badge-danger">High</span></td>
                                        <td><span>Technical</span></td>
                                        <td><span>Dyanne Aceron</span></td>
                                        <td><span>02-02-2019</span></td>
                                        <td>3 reply</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default TicketList
