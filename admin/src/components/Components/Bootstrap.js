import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Bootstrap = () => {
    return (
        <div className="container-fluid">
            <div className="block-header">
                <div className="row clearfix">
                    <div className="col-md-6 col-sm-12">
                        <h1>Bootstrap UI</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                <li className="breadcrumb-item"><Link to="/">Components</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Bootstrap UI</li>
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
                <div className="col-lg-12 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Toggle Switch</h2>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item">
                                What is a toggle button in Microsoft Word?
                            <div className="float-right">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                What is toggle button in Android?
                            <div className="float-right">
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                What is the purpose of a toggle switch?
                            <div className="float-right">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                What is meant by toggle key?
                            <div className="float-right">
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Labels</h2>
                        </div>
                        <div className="body">
                            <p>We restyled the default options for labels and we added the filled class, that can be used in any combination.</p>
                            <span className="badge badge-default">Default</span>
                            <span className="badge badge-primary">Primary</span>
                            <span className="badge badge-success">Success</span>
                            <span className="badge badge-info">Info</span>
                            <span className="badge badge-warning">Warning</span>
                            <span className="badge badge-danger">Danger</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row clearfix">

                <div className="col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Accordion</h2>
                        </div>

                        <Accordion className="accordion" id="accordion" defaultActiveKey="0">
                            <div>
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="btn btn-link">
                                            Q: How to use SCSS variables to build custom color <span className="float-right badge  badge-primary">23</span>
                                        </Accordion.Toggle>
                                    </h5>
                                </div>
                                <Accordion.Collapse eventKey="0" className="collapse">
                                    <div className="body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </div>
                                </Accordion.Collapse>
                            </div>

                            <div>
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1" className="btn btn-link">
                                        Q: Four questions to ask about your DevOps strategy <span className="float-right badge  badge-success">8</span>
                                        </Accordion.Toggle>
                                    </h5>
                                </div>
                                <Accordion.Collapse eventKey="1" className="collapse">
                                    <div className="body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </Accordion.Collapse>
                            </div>

                            <div>
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <Accordion.Toggle as={Button} variant="link" eventKey="2" className="btn btn-link">
                                        Q: A comparison of microservices and functional programming concepts <span className="float-right badge  badge-danger">13</span>
                                        </Accordion.Toggle>
                                    </h5>
                                </div>
                                <Accordion.Collapse eventKey="2" className="collapse">
                                    <div className="body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </Accordion.Collapse>
                            </div>


                        </Accordion>

                    </div>
                    <div className="card">
                        <div className="header">
                            <h2>Accordion with link</h2>
                        </div>
                        <div className="body">
                            <p>
                                <Link className="btn btn-primary btn-round mr-1" data-toggle="collapse" to="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Link with href
                            </Link>
                                <button className="btn btn-primary btn-round" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    Button with data-target
                            </button>
                            </p>
                            <div className="collapse" id="collapseExample">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                        </div>

                        <div className="body">
                            <div>
                                <h6>Multiple targets Accordion</h6>
                                <p>
                                    <Link className="btn btn-primary mr-1" data-toggle="collapse" to="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</Link>
                                    <button className="btn btn-primary mr-1" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
                                    <button className="btn btn-primary mr-1" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
                                </p>
                                <div className="row clearfix">
                                    <div className="col">
                                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                                            <div className="card body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="collapse multi-collapse" id="multiCollapseExample2">
                                            <div className="card body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Accordion style two with backgorund</h2>
                        </div>
                        <div className="body">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12">
                                    <ul className="accordion2">
                                        <li className="accordion-item is-active">
                                            <h3 className="accordion-thumb"><span>Lorem ipsum</span></h3>
                                            <p className="accordion-panel">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Placeat, quibusdam! Voluptate nobis, beatae
                                                tempora praesentium, illum quis illo, maiores quod
                                                similique placeat, saepe mollitia dolor officiis
                                                aspernatur deleniti debitis commodi!
                                        </p>
                                        </li>

                                        <li className="accordion-item">
                                            <h3 className="accordion-thumb"><span>Dolor sit amet</span></h3>
                                            <p className="accordion-panel">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Reprehenderit quos, accusamus! Enim labore totam
                                                dicta quibusdam? Eveniet quis asperiores reprehenderit
                                                eaque atque in iure voluptate, explicabo, placeat, id
                                                earum architecto!
                                        </p>
                                        </li>

                                        <li className="accordion-item">
                                            <h3 className="accordion-thumb"><span>Consectetur adipisicing elit</span></h3>
                                            <p className="accordion-panel">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Reprehenderit quos, accusamus! Enim labore
                                                totam dicta quibusdam? Eveniet quis asperiores
                                                reprehenderit eaque atque in iure voluptate,
                                                explicabo, placeat, id earum architecto!
                                        </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <ul className="accordion2">
                                        <li className="accordion-item bg-blue text-light is-active">
                                            <h3 className="accordion-thumb"><span>Lorem ipsum</span></h3>
                                            <p className="accordion-panel">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Placeat, quibusdam! Voluptate nobis, beatae
                                                tempora praesentium, illum quis illo, maiores quod
                                                similique placeat, saepe mollitia dolor officiis
                                                aspernatur deleniti debitis commodi!
                                        </p>
                                        </li>

                                        <li className="accordion-item bg-pink text-light">
                                            <h3 className="accordion-thumb"><span>Dolor sit amet</span></h3>
                                            <p className="accordion-panel">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Reprehenderit quos, accusamus! Enim labore totam
                                                dicta quibusdam? Eveniet quis asperiores reprehenderit
                                                eaque atque in iure voluptate, explicabo, placeat, id
                                                earum architecto!
                                        </p>
                                        </li>

                                        <li className="accordion-item bg-indigo text-light">
                                            <h3 className="accordion-thumb"><span>Consectetur adipisicing elit</span></h3>
                                            <p className="accordion-panel">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Reprehenderit quos, accusamus! Enim labore
                                                totam dicta quibusdam? Eveniet quis asperiores
                                                reprehenderit eaque atque in iure voluptate,
                                                explicabo, placeat, id earum architecto!
                                        </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Pagination</h2>
                        </div>
                        <div className="body">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-sm-12">
                                    <h6>Default</h6>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item"><Link className="page-link" to="/">Previous</Link></li>
                                            <li className="page-item"><Link className="page-link" to="/">1</Link></li>
                                            <li className="page-item"><Link className="page-link" to="/">2</Link></li>
                                            <li className="page-item"><Link className="page-link" to="/">3</Link></li>
                                            <li className="page-item"><Link className="page-link" to="/">Next</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-lg-4 col-sm-12">
                                    <h6>Working with icons</h6>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <Link className="page-link" to="/" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                    <span className="sr-only">Previous</span>
                                                </Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" to="/">1</Link></li>
                                            <li className="page-item"><Link className="page-link" to="/">2</Link></li>
                                            <li className="page-item"><Link className="page-link" to="/">3</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link" to="/" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                    <span className="sr-only">Next</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-lg-4 col-sm-12">
                                    <h6>Disabled and active states</h6>
                                    <nav aria-label="...">
                                        <ul className="pagination">
                                            <li className="page-item disabled">
                                                <Link className="page-link" to="/" tabIndex="-1">Previous</Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" to="/">1</Link></li>
                                            <li className="page-item active">
                                                <Link className="page-link" to="/">2 <span className="sr-only">(current)</span></Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" to="/">3</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link" to="/">Next</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Tooltips</h2>
                        </div>
                        <div className="body">
                            <div className="demo-button">
                                <button type="button" className="btn btn-default mr-1" data-toggle="tooltip" data-placement="right" title="Tooltip on the right">Tooltip on the right</button>
                                <button type="button" className="btn btn-default mr-1" data-toggle="tooltip" data-placement="left" title="Tooltip on the left">Tooltip on the left</button>
                                <button type="button" className="btn btn-default mr-1" data-toggle="tooltip" data-placement="top" title="Tooltip on the top">Tooltip on the top</button>
                                <button type="button" className="btn btn-default mr-1" data-toggle="tooltip" data-placement="bottom" title="Tooltip on the bottom">Tooltip on the bottom</button>
                            </div>
                            <hr />
                            <h6>Popovers</h6>
                            <div className="demo-button">
                                <button type="button" className="btn btn-sm btn-default mr-1" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Popover on Click</button>
                                <button type="button" className="btn btn-sm btn-default mr-1" data-toggle="popover" data-trigger="hover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Popover on Hover</button>
                                <button type="button" className="btn btn-default btn-sm mr-1" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Popover on left</button>
                                <button type="button" className="btn btn-default btn-sm mr-1" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Popover on right</button>
                                <button type="button" className="btn btn-default btn-sm mr-1" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Popover on top</button>
                                <button type="button" className="btn btn-default btn-sm mr-1" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Popover on bottom</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Alert Messages with Link</h2>
                        </div>
                        <div className="body">
                            <div className="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
                            <div className="alert alert-secondary" role="alert">A simple secondary alert—check it out!</div>
                            <div className="alert alert-success" role="alert">A simple success alert—check it out!</div>
                            <div className="alert alert-danger" role="alert">A simple danger alert—check it out!</div>

                            <div className="alert alert-warning" role="alert">
                                A simple warning alert with <Link to="." className="alert-link">an example link</Link>. Give it a click if you like.
                        </div>
                            <div className="alert alert-info" role="alert">
                                A simple info alert with <Link to="." className="alert-link">an example link</Link>. Give it a click if you like.
                        </div>
                            <div className="alert alert-light" role="alert">
                                A simple light alert with <Link to="." className="alert-link">an example link</Link>. Give it a click if you like.
                        </div>
                            <div className="alert alert-dark" role="alert">
                                A simple dark alert with <Link to="." className="alert-link">an example link</Link>. Give it a click if you like.
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Alert Messages With Icon</h2>
                        </div>
                        <div className="body">
                            <div className="alert alert-info alert-dismissible" role="alert">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <i className="fa fa-info-circle"></i> The system is running well
                        </div>
                            <div className="alert alert-success alert-dismissible" role="alert">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <i className="fa fa-check-circle"></i> Your settings have been succesfully saved
                        </div>
                            <div className="alert alert-warning alert-dismissible" role="alert">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <i className="fa fa-warning"></i> Warning, check your permission settings
                        </div>
                            <div className="alert alert-danger alert-dismissible" role="alert">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <i className="fa fa-times-circle"></i> Your account has been suspended
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}
export default Bootstrap
