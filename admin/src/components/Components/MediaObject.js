import React from 'react';

const MediaObject = () => {
    return (
        <div className="container-fluid">
            <div className="block-header">
                <div className="row clearfix">
                    <div className="col-md-6 col-sm-12">
                        <h1>Media Object</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Oculux</a></li>
                                <li className="breadcrumb-item"><a href="/">Components</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Media Object</li>
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
                <div className="col-lg-12 col-md-12">
                    <div className="card">
                        <div className="body">
                            <div className="media mleft">
                                <div className="media-left"><a href="/"><img className="media-object rounded" src="../assets/images/sm/avatar1.jpg" width="64" height="64" alt="" /></a></div>
                                <div className="media-body">
                                    <h4 className="media-heading">Media heading</h4>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                in faucibus.
                            </div>
                            </div>
                            <div className="media mleft">
                                <div className="media-left"><a href="/"><img alt="" className="media-object rounded" src="../assets/images/sm/avatar2.jpg" width="64" height="64" /></a></div>
                                <div className="media-body">
                                    <h4 className="media-heading">Media heading</h4>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                in faucibus.
                                <div className="media m-t-20">
                                        <div className="media-left"><a href="/"><img alt="" className="media-object rounded" src="../assets/images/sm/avatar3.jpg" width="64" height="64" /></a></div>
                                        <div className="media-body">
                                            <h4 className="media-heading">Nested media heading</h4>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla
                                        vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
                                        in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus. </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media mright">
                                <div className="media-body">
                                    <h4 className="media-heading">Media heading</h4>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                turpis. </div>
                                <div className="media-right"><a href="/"><img alt="" className="media-object rounded" src="../assets/images/sm/avatar4.jpg" width="64" height="64" /></a></div>
                            </div>
                            <div className="media mleft">
                                <div className="media-left"><a href="/"><img alt="" className="media-object rounded" src="../assets/images/sm/avatar2.jpg" width="64" height="64" /></a></div>
                                <div className="media-body">
                                    <h4 className="media-heading">Media heading</h4>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                turpis. </div>
                                <div className="media-right"><a href="/"><img className="media-object rounded" src="../assets/images/sm/avatar3.jpg" width="64" height="64" alt="avatar" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Media Alignment</h2>
                        </div>
                        <div className="body">
                            <div className="bs-example" data-example-id="media-alignment">
                                <div className="media">
                                    <div className="media-left"><a href="/"><img alt="" className="media-object rounded" src="../assets/images/sm/avatar4.jpg" width="64" height="64" /></a></div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Top aligned media</h4>
                                        <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
                                        commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                        in faucibus. </p>
                                        <p> Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left media-middle"><a href="/"><img alt="" className="media-object rounded" src="../assets/images/sm/avatar1.jpg" width="64" height="64" /></a></div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Middle aligned media</h4>
                                        <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
                                        commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                        in faucibus. </p>
                                        <p> Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left media-bottom"><a href="/"><img alt="" className="media-object rounded" src="../assets/images/sm/avatar2.jpg" width="64" height="64" /></a></div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Bottom aligned media</h4>
                                        <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
                                        commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                        in faucibus. </p>
                                        <p> Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}
export default MediaObject
