import React, { useState } from 'react';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
const SweetAlert = withSwalInstance(swal);

const Dialogs = () => {
    const [alert1, setAlert1] = useState(false)
    const [alert2, setAlert2] = useState(false)
    const [alert3, setAlert3] = useState(false)
    const [alert4, setAlert4] = useState(false)

    return (
        <div className="container-fluid">
            <div className="block-header">
                <div className="row clearfix">
                    <div className="col-md-6 col-sm-12">
                        <h1>Sweet Alert Ui</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Oculux</a></li>
                                <li className="breadcrumb-item"><a href="/">Components</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Sweet Alert</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-md-6 col-sm-12 text-right hidden-xs">
                        <a href="/" className="mr-1 btn btn-sm btn-primary" title="">Create Campaign</a>
                        <a href="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket"></i> Buy Now</a>
                    </div>
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-md-6 col-sm-12">
                    <div className="card">
                        <div className="body">
                            <p>A basic message</p>
                            <button onClick={() => setAlert1(true)} className="btn btn-primary btn-round js-sweetalert" data-type="basic">Click Me</button>
                            <SweetAlert
                                show={alert1}
                                title="Here's a message!"
                                onConfirm={() => setAlert1(false)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="card">
                        <div className="body">
                            <p>A title with a text under</p>
                            <button onClick={() => setAlert2(true)} className="btn btn-primary btn-round js-sweetalert" data-type="with-title">Click Me</button>
                            <SweetAlert
                                show={alert2}
                                title="Here's a message!"
                                text="It's pretty, isn't it?"
                                onConfirm={() => setAlert2(false)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="card">
                        <div className="body">
                            <p>A success message!</p>
                            <button onClick={() => setAlert3(true)} className="btn btn-primary btn-round js-sweetalert" data-type="success">Click Me</button>
                            <SweetAlert
                                show={alert3}
                                title="Here's a message!"
                                text="It's pretty, isn't it?"
                                type="success"
                                onConfirm={() => setAlert3(false)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="card">
                        <div className="body">
                            <p>An HTML message</p>
                            <button onClick={() => setAlert4(true)} className="btn btn-primary btn-round js-sweetalert" data-type="html-message">Click Me</button>
                            <SweetAlert
                                show={alert4}
                                title="HTML <small>Title</small>!"
                                type="success"
                                onConfirm={() => setAlert4(false)}
                                html='A custom <span style=\"color: #CC0000\">html<span> message.'
                            />
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-6 col-sm-12">
                    <div className="card">
                        <div className="body">
                            <p>A message with a custom icon</p>
                            <button className="btn btn-primary btn-round js-sweetalert" data-type="with-custom-icon">Click Me</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="card">
                        <div className="body">
                            <p>A message with auto close timer</p>
                            <button className="btn btn-primary btn-round js-sweetalert" data-type="autoclose-timer">Click Me</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="card">
                        <div className="body">
                            <p>A warning message, with a function attached to the <b>Confirm</b> button...</p>
                            <button className="btn btn-primary btn-round js-sweetalert" data-type="confirm">Click Me</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="body">
                            <p>A replacement for the <b>prompt</b> function</p>
                            <button className="btn btn-primary btn-round js-sweetalert" data-type="prompt">Click Me</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="card">
                        <div className="body">
                            <p>With a loader (for AJAX request for example)</p>
                            <button className="btn btn-primary btn-round js-sweetalert" data-type="ajax-loader">Click Me</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="body">
                            <p>... and by passing a parameter, you can execute something else for <b>Cancel</b>.</p>
                            <button className="btn btn-primary btn-round js-sweetalert" data-type="cancel">Click Me</button>
                        </div>
                    </div>
                </div>
           */}
            </div>
        </div>
    );

}
export default Dialogs
