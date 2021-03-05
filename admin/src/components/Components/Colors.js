import React from 'react';

const Colors = () => {
    return (
        <div className="container-fluid">
            <div className="block-header">
                <div className="row clearfix">
                    <div className="col-md-6 col-sm-12">
                        <h1>Colors UI</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Oculux</a></li>
                                <li className="breadcrumb-item"><a href="/">Components</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Colors UI</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-md-6 col-sm-12 text-right hidden-xs">
                        <a href="/" className="btn btn-sm btn-primary mr-1" title="">Create Campaign</a>
                        <a href="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket"></i> Buy Now</a>
                    </div>
                </div>
            </div>

            <div className="row clearfix">
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Colors</h2>
                        </div>
                        <div className="body">
                            <p className="text-primary">.text-primary</p>
                            <p className="text-secondary">.text-secondary</p>
                            <p className="text-success">.text-success</p>
                            <p className="text-danger">.text-danger</p>
                            <p className="text-warning">.text-warning</p>
                            <p className="text-info">.text-info</p>
                            <p className="text-light bg-dark">.text-light</p>
                            <p className="text-dark">.text-dark</p>
                            <p className="text-muted">.text-muted</p>
                            <p className="text-white bg-dark">.text-white</p>
                            <p className="text-black-50">.text-black-50</p>
                            <p className="text-white-50 bg-dark">.text-white-50</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Contextual text Colors</h2>
                        </div>
                        <div className="body">
                            <p>classes also work well on anchors with the provided hover and focus states. <strong>Note that the <code className="highlighter-rouge">.text-white</code> and <code className="highlighter-rouge">.text-muted</code> class has no link styling.</strong></p>
                            <p><a href="/" className="text-primary">Primary link</a></p>
                            <p><a href="/" className="text-secondary">Secondary link</a></p>
                            <p><a href="/" className="text-success">Success link</a></p>
                            <p><a href="/" className="text-danger">Danger link</a></p>
                            <p><a href="/" className="text-warning">Warning link</a></p>
                            <p><a href="/" className="text-info">Info link</a></p>
                            <p><a href="/" className="text-light bg-dark">Light link</a></p>
                            <p><a href="/" className="text-dark">Dark link</a></p>
                            <p><a href="/" className="text-muted">Muted link</a></p>
                            <p><a href="/" className="text-white bg-dark">White link</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Background color</h2>
                        </div>
                        <div className="body">
                            <p>Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities <strong>do not set <code className="highlighter-rouge">color</code></strong>, so in some cases you’ll want to use <code className="highlighter-rouge">.text-*</code> utilities.</p>
                            <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
                            <div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
                            <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
                            <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
                            <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
                            <div className="p-3 mb-2 bg-info text-white">.bg-info</div>
                            <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
                            <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
                            <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
                            <div className="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}
export default Colors
