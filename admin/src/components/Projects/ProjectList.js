import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Project List</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">Project</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">List</li>
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
                                    <div className="col-lg-3 col-md-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Milestone" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Status" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Priority" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <a href="/" className="btn btn-sm btn-primary btn-block" title="">Search</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-hover table-custom spacing8">
                                <thead>
                                    <tr>
                                        <th>Owner</th>
                                        <th>Milestone</th>
                                        <th>Status</th>
                                        <th className="w100">Work</th>
                                        <th className="w100">Duration</th>
                                        <th>Priority</th>
                                        <th className="w200">Task</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img src="../assets/images/xs/avatar1.jpg" alt="Avatar" className="w30 rounded-circle mr-2" /> <span>Isidore Dilao</span></td>
                                        <td><h6 className="mb-0">Account receivable</h6></td>
                                        <td><span className="badge badge-danger">Issue Found</span></td>
                                        <td><span>30:00</span></td>
                                        <td>30:0 hrs</td>
                                        <td><span className="text-warning">Medium</span></td>
                                        <td>
                                            <div className="progress progress-xxs progress-transparent custom-color-green mb-0 mt-0">
                                                <div className="progress-bar" data-transitiongoal="74" aria-valuenow="74" style={{ width: "0%" }}></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/images/xs/avatar2.jpg" alt="Avatar" className="w30 rounded-circle mr-2" /> <span>Maricel Villalon</span></td>
                                        <td><h6 className="mb-0">Account receivable</h6></td>
                                        <td><span className="badge badge-primary">Open</span></td>
                                        <td><span>68:00</span></td>
                                        <td>105:0 hrs</td>
                                        <td><span className="text-danger">High</span></td>
                                        <td>
                                            <div className="progress progress-xxs progress-transparent custom-color-green mb-0 mt-0">
                                                <div className="progress-bar" data-transitiongoal="23" aria-valuenow="23" style={{ width: "0%" }}></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/images/xs/avatar3.jpg" alt="Avatar" className="w30 rounded-circle mr-2" /> <span>Theresa Wright</span></td>
                                        <td><h6 className="mb-0">Approval site</h6></td>
                                        <td><span className="badge badge-primary">Open</span></td>
                                        <td><span>74:00</span></td>
                                        <td>89:0 hrs</td>
                                        <td><span>None</span></td>
                                        <td>
                                            <div className="progress progress-xxs progress-transparent custom-color-green mb-0 mt-0">
                                                <div className="progress-bar" data-transitiongoal="55" aria-valuenow="55" style={{ width: "0%" }}></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/images/xs/avatar4.jpg" alt="Avatar" className="w30 rounded-circle mr-2" /> <span>Jason Porter</span></td>
                                        <td><h6 className="mb-0">Final touch up</h6></td>
                                        <td><span className="badge badge-info">Issue Level 1</span></td>
                                        <td><span>30:00</span></td>
                                        <td>30:0 hrs</td>
                                        <td><span>None</span></td>
                                        <td>
                                            <div className="progress progress-xxs progress-transparent custom-color-green mb-0 mt-0">
                                                <div className="progress-bar" data-transitiongoal="23" aria-valuenow="23" style={{ width: "0%" }}></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/images/xs/avatar5.jpg" alt="Avatar" className="w30 rounded-circle mr-2" /> <span>Annelyn Mercado</span></td>
                                        <td><h6 className="mb-0">Account receivable</h6></td>
                                        <td><span className="badge badge-danger">Issue Found</span></td>
                                        <td><span>30:00</span></td>
                                        <td>30:0 hrs</td>
                                        <td><span>None</span></td>
                                        <td>
                                            <div className="progress progress-xxs progress-transparent custom-color-green mb-0 mt-0">
                                                <div className="progress-bar" data-transitiongoal="31" aria-valuenow="31" style={{ width: "0%" }}></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/images/xs/avatar6.jpg" alt="Avatar" className="w30 rounded-circle mr-2" /> <span>Sean Black</span></td>
                                        <td><h6 className="mb-0">Basement slab preparation</h6></td>
                                        <td><span className="badge badge-primary">Open</span></td>
                                        <td><span>88:00</span></td>
                                        <td>88:0 hrs</td>
                                        <td><span>None</span></td>
                                        <td>
                                            <div className="progress progress-xxs progress-transparent custom-color-green mb-0 mt-0">
                                                <div className="progress-bar" data-transitiongoal="89" aria-valuenow="89" style={{ width: "0%" }}></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/images/xs/avatar7.jpg" alt="Avatar" className="w30 rounded-circle mr-2" /> <span>Scott Ortega</span></td>
                                        <td><h6 className="mb-0">Account receivable</h6></td>
                                        <td><span className="badge badge-warning">Issue Level 2</span></td>
                                        <td><span>56:00</span></td>
                                        <td>125:0 hrs</td>
                                        <td><span className="text-warning">Medium</span></td>
                                        <td>
                                            <div className="progress progress-xxs progress-transparent custom-color-green mb-0 mt-0">
                                                <div className="progress-bar" data-transitiongoal="23" aria-valuenow="23" style={{ width: "0%" }}></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/images/xs/avatar8.jpg" alt="Avatar" className="w30 rounded-circle mr-2" /> <span>David Wallace</span></td>
                                        <td><h6 className="mb-0">Account receivable</h6></td>
                                        <td><span className="badge badge-danger">Issue Found</span></td>
                                        <td><span>30:00</span></td>
                                        <td>30:0 hrs</td>
                                        <td><span>None</span></td>
                                        <td>
                                            <div className="progress progress-xxs progress-transparent custom-color-green mb-0 mt-0">
                                                <div className="progress-bar" data-transitiongoal="23" aria-valuenow="23" style={{ width: "0%" }}></div>
                                            </div>
                                        </td>
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
export default ProjectList
