import React from 'react';

const ListGroup = () => {
    return (
        <div className="container-fluid">
            <div className="block-header">
                <div className="row clearfix">
                    <div className="col-md-6 col-sm-12">
                        <h1>List Group</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Oculux</a></li>
                                <li className="breadcrumb-item"><a href="/">Components</a></li>
                                <li className="breadcrumb-item active" aria-current="page">List Group</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-md-6 col-sm-12 text-right hidden-xs">
                        <a href="/" className="mr-1 btn btn-sm btn-primary" title="">Create Campaign</a>
                        <a href="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket"></i> Buy Now</a>
                    </div>
                </div>
            </div>

            <div className="row clealfix">
                <div className="col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Basic example</h2>
                        </div>
                        <div className="body">
                            <ul className="list-group">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Morbi leo risus</li>
                                <li className="list-group-item">Porta ac consectetur ac</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row clealfix">
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Active items</h2>
                        </div>
                        <div className="body">
                            <ul className="list-group">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item active">Morbi leo risus</li>
                                <li className="list-group-item">Porta ac consectetur ac</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Disabled items</h2>
                        </div>
                        <div className="body">
                            <ul className="list-group">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item disabled">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Morbi leo risus</li>
                                <li className="list-group-item">Porta ac consectetur ac</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row clealfix">
                <div className="col-lg-12 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Links and buttons</h2>
                        </div>
                        <div className="body">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12">
                                    <h6>With Anchor</h6>
                                    <div className="list-group">
                                        <a href="/" className="list-group-item list-group-item-action active">
                                            Cras justo odio
                                        </a>
                                        <a href="/" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                                        <a href="/" className="list-group-item list-group-item-action">Morbi leo risus</a>
                                        <a href="/" className="list-group-item list-group-item-action disabled">Porta ac consectetur ac</a>
                                        <a href="/" className="list-group-item list-group-item-action">Vestibulum at eros</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <h6>With button</h6>
                                    <div className="list-group">
                                        <button type="button" className="list-group-item list-group-item-action active">
                                            Cras justo odio
                                        </button>
                                        <button type="button" className="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
                                        <button type="button" className="list-group-item list-group-item-action disabled">Morbi leo risus</button>
                                        <button type="button" className="list-group-item list-group-item-action">Porta ac consectetur ac</button>
                                        <button type="button" className="list-group-item list-group-item-action">Vestibulum at eros</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row clealfix">
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Flush example</h2>
                        </div>
                        <div className="body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Morbi leo risus</li>
                                <li className="list-group-item">Porta ac consectetur ac</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>With badges</h2>
                        </div>
                        <div className="body">
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center">Cras justo odio<span className="badge badge-info">14</span></li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">Dapibus ac facilisis in<span className="badge badge-primary">2</span></li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">Morbi leo risus<span className="badge badge-warning">1</span></li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">Cras justo odio<span className="badge badge-danger">14</span></li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">Dapibus ac facilisis in<span className="badge badge-success">2</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row clealfix">
                <div className="col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Custom content</h2>
                        </div>
                        <div className="body">
                            <div className="list-group">
                                <a href="/" className="list-group-item list-group-item-action flex-column align-items-start active">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small>3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small>Donec id elit non mi porta.</small>
                                </a>
                                <a href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small className="text-muted">3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small className="text-muted">Donec id elit non mi porta.</small>
                                </a>
                                <a href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small className="text-muted">3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small className="text-muted">Donec id elit non mi porta.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}
export default ListGroup
