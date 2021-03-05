import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '../common/toolTip';

const PageInvoice = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Invoices List</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><a href="/">Pages</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Invoices</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <a href="/" className="btn btn-sm btn-primary btn-round" title="">Add New</a>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="table-responsive invoice_list mb-4">
                            <table className="table table-hover table-custom spacing8">
                                <thead>
                                    <tr>
                                        <th style={{ width: "20px" }}>#</th>
                                        <th>Client</th>
                                        <th style={{ width: "50px" }}>Amount</th>
                                        <th style={{ width: "50px" }}>Status</th>
                                        <th style={{ width: "110px" }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span>01</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-itAvatarems-center">
                                                <Tooltip id="text" text="Avatar Name" />
                                                <div className="avtar-pic w35 bg-red" data-tip data-for="text"><span>SS</span></div>
                                                <div className="ml-3">
                                                    <Link to="/page-invoices-details" title="">South Shyanne</Link>
                                                    <p className="mb-0">south.shyanne@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$1200</td>
                                        <td><span className="badge badge-success ml-0 mr-0">Done</span></td>
                                        <td>
                                            <button type="button" className="btn btn-sm btn-default" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope"></i></button>
                                            <button type="button" className="btn btn-sm btn-default " title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer"></i></button>
                                            <button type="button" className="btn btn-sm btn-default" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>02</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 h35 rounded" />
                                                <div className="ml-3">
                                                    <a href title="">Zoe Baker</a>
                                                    <p className="mb-0">zoe.baker@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$378</td>
                                        <td><span className="badge badge-success ml-0 mr-0">Done</span></td>
                                        <td>
                                            <button type="button" className="btn btn-sm btn-default" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope"></i></button>
                                            <button type="button" className="btn btn-sm btn-default " title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer"></i></button>
                                            <button type="button" className="btn btn-sm btn-default" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>03</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="avtar-pic w35 bg-indigo" data-toggle="tooltip" data-placement="top" title="Avatar Name"><span>CB</span></div>
                                                <div className="ml-3">
                                                    <a href title="">Colin Brown</a>
                                                    <p className="mb-0">colinbrown@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$653</td>
                                        <td><span className="badge badge-success ml-0 mr-0">Done</span></td>
                                        <td>
                                            <button type="button" className="btn btn-sm btn-default" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope"></i></button>
                                            <button type="button" className="btn btn-sm btn-default " title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer"></i></button>
                                            <button type="button" className="btn btn-sm btn-default" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>04</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="avtar-pic w35 bg-green" data-toggle="tooltip" data-placement="top" title="Avatar Name"><span>KG</span></div>
                                                <div className="ml-3">
                                                    <a href title="">Kevin Gill</a>
                                                    <p className="mb-0">kevin.gill@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$451</td>
                                        <td><span className="badge badge-warning  ml-0 mr-0">Panding</span></td>
                                        <td>
                                            <button type="button" className="btn btn-sm btn-default" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope"></i></button>
                                            <button type="button" className="btn btn-sm btn-default " title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer"></i></button>
                                            <button type="button" className="btn btn-sm btn-default" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>05</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 h35 rounded" />
                                                <div className="ml-3">
                                                    <a href title="">Brandon Smith</a>
                                                    <p className="mb-0">Maria.gill@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$1,989</td>
                                        <td><span className="badge badge-success  ml-0 mr-0">Done</span></td>
                                        <td>
                                            <button type="button" className="btn btn-sm btn-default" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope"></i></button>
                                            <button type="button" className="btn btn-sm btn-default " title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer"></i></button>
                                            <button type="button" className="btn btn-sm btn-default" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>06</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 h35 rounded" />
                                                <div className="ml-3">
                                                    <a href title="">Kevin Baker</a>
                                                    <p className="mb-0">kevin.baker@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$343</td>
                                        <td><span className="badge badge-warning  ml-0 mr-0">Panding</span></td>
                                        <td>
                                            <button type="button" className="btn btn-sm btn-default" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope"></i></button>
                                            <button type="button" className="btn btn-sm btn-default " title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer"></i></button>
                                            <button type="button" className="btn btn-sm btn-default" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>13</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 h35 rounded" />
                                                <div className="ml-3">
                                                    <a href title="">Colin Brown</a>
                                                    <p className="mb-0">colin-brown@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$653</td>
                                        <td><span className="badge badge-success ml-0 mr-0">Done</span></td>
                                        <td>
                                            <button type="button" className="btn btn-sm btn-default" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope"></i></button>
                                            <button type="button" className="btn btn-sm btn-default " title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer"></i></button>
                                            <button type="button" className="btn btn-sm btn-default" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>14</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 h35 rounded" />
                                                <div className="ml-3">
                                                    <a href title="">Kevin Gill</a>
                                                    <p className="mb-0">kevin-gill@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$451</td>
                                        <td><span className="badge badge-warning  ml-0 mr-0">Panding</span></td>
                                        <td>
                                            <button type="button" className="btn btn-sm btn-default" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i className="icon-envelope"></i></button>
                                            <button type="button" className="btn btn-sm btn-default " title="Print" data-toggle="tooltip" data-placement="top"><i className="icon-printer"></i></button>
                                            <button type="button" className="btn btn-sm btn-default" title="Delete" data-toggle="tooltip" data-placement="top"><i className="icon-trash"></i></button>
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
export default PageInvoice
