import React from 'react';

const PageInvoiceDetails = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>Invoices Details</h1>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right">
                            <div className="inlineblock vivify swoopInTop delay-900 mr-4">Visitors <span id="mini-bar-chart1" className="mini-bar-chart"></span></div>
                            <div className="inlineblock vivify swoopInTop delay-950 mr-4">Visits <span id="mini-bar-chart2" className="mini-bar-chart"></span></div>
                            <div className="inlineblock vivify swoopInTop delay-1000">Chats <span id="mini-bar-chart3" className="mini-bar-chart"></span></div>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="header">
                                <h2>South Shyanne <small> 795 Folsom Ave, Suite 546 San Francisco, CA 54656</small></h2>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-md-6 col-sm-6">
                                        <p className="m-b-0"><strong>Order Date: </strong> AUG 15, 2018</p>
                                        <p><strong>Order ID: </strong> C09</p>
                                    </div>
                                    <div className="col-md-6 col-sm-6 text-right">

                                    </div>
                                </div>
                                <div className="row clearfix">
                                    <div className="col-md-12">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-custom spacing5 mb-5">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Item</th>
                                                        <th style={{ width: "120px" }}>Quantity</th>
                                                        <th className="hidden-sm-down" style={{ width: '80px' }}>Cost</th>
                                                        <th style={{ width: "80px", textAlign: "right" }}>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            <span>iPhoneX 128GB</span>
                                                            <p className="hidden-sm-down mb-0 text-muted"> Lorem Ipsum has been the industry's standard.</p>
                                                        </td>
                                                        <td>01</td>
                                                        <td className="hidden-sm-down">$380</td>
                                                        <td className="text-right">$380</td>
                                                    </tr>
                                                    <tr>
                                                        <td>02</td>
                                                        <td>
                                                            <span>Nokia 6.1 64GB</span>
                                                            <p className="hidden-sm-down mb-0 text-muted">simply dummy text of the printing and typesetting industry. </p>
                                                        </td>
                                                        <td>5</td>
                                                        <td className="hidden-sm-down">$50</td>
                                                        <td className="text-right">$250</td>
                                                    </tr>
                                                    <tr>
                                                        <td>03</td>
                                                        <td>
                                                            <span>OnePlus6 64GB Red</span>
                                                            <p className="hidden-sm-down mb-0 text-muted">simply dummy text of the printing and typesetting industry. </p>
                                                        </td>
                                                        <td>1</td>
                                                        <td className="hidden-sm-down">$120</td>
                                                        <td className="text-right">$120</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <td colSpan="4"></td>
                                                    <td className="text-right">
                                                        <span>Total: <strong className="text-success">$750.00</strong></span>
                                                    </td>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="row clearfix">
                                    <div className="col-md-6">
                                        <span><strong>Note:</strong> Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <button className="btn btn-info"><i className="icon-printer"></i> Print</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default PageInvoiceDetails
