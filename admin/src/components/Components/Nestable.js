import React from 'react';
import Nestable from 'react-nestable';

const Nestables = () => {
    const itemsPlanned = [
        {
            id: 0, text: <>
                <div className="dd-handle dd3-handle"></div>
                <div className="dd3-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </>
        },
        {
            id: 1, text: <>
                <div className="dd-handle dd3-handle"></div>
                <div className="dd3-content">It is a long established fact that a reader will be distracted by the readable</div>
            </>
        },
        {
            id: 2, text: <>
                <div className="dd-handle dd3-handle"></div>
                <div className="dd3-content">it look like readable English. Many desktop publishing </div>
            </>,
            children: [
                {
                    id: 4, text: <>
                        <div className="dd-handle dd3-handle"></div>
                        <div className="dd3-content">Contrary to popular belief, Lorem Ipsum is not simply random text. </div>
                    </>
                },
                {
                    id: 5, text: <>
                        <div className="dd-handle dd3-handle"></div>
                        <div className="dd3-content">Lorem Ipsum is therefore always free from repetition, injected humour</div>
                    </>
                },
                {
                    id: 6, text: <>
                        <div className="dd-handle dd3-handle"></div>
                        <div className="dd3-content">The standard chunk of Lorem Ipsum used since the 1500s</div>
                    </>
                }
            ]
        }
    ];
    const renderItemsPlanned = ({ item }) => item.text;

    const itemsBackground = [
        {
            id: 0, text: <div className="dd-handle bg-blue">Lorem Ipsum is simply dummy text of the printing and typesetting industry.r</div>
        },
        {
            id: 1, text: <div className="dd-handle bg-pink">Contrary to popular belief, Lorem Ipsum is not simply random text.</div>
        },
        {
            id: 2, text: <div className="dd-handle bg-green">Lorem Ipsum is therefore always free from repetition, injected humour</div>
        },
        {
            id: 3, text: <div className="dd-handle bg-indigo">The standard chunk of Lorem Ipsum used since the 1500s</div>
        },
        {
            id: 4, text: <div className="dd-handle bg-azura">It is a long established fact that a reader will be distracted by the readable</div>
        }
    ];
    const renderItemsBackground = ({ item }) => item.text;

    return (
        <div className="container-fluid">
            <div className="block-header">
                <div className="row clearfix">
                    <div className="col-md-6 col-sm-12">
                        <h1>Sortable Nestable</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Oculux</a></li>
                                <li className="breadcrumb-item"><a href="/">Components</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Sortable Nestable</li>
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
                <div className="col-md-12">
                    <div className="card">
                        {/* <div className="header">
                            <h2>Nestable Handle</h2>
                            <ul className="header-dropdown dropdown">

                                <li><a href="/" className="full-screen"><i className="icon-frame"></i></a></li>
                                <li className="dropdown">
                                    <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="/">Action</a></li>
                                        <li><a href="/">Another Action</a></li>
                                        <li><a href="/">Something else</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div> */}
                        <div className="body">
                            <div className="dd nestable-with-handle">
                                <ol className="dd-list">
                                    <Nestable
                                        items={itemsPlanned}
                                        renderItem={renderItemsPlanned}
                                    />
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="card">
                        {/* <div className="header">
                            <h2>Sortable with Background</h2>
                            <ul className="header-dropdown dropdown">

                                <li><a href="/" className="full-screen"><i className="icon-frame"></i></a></li>
                                <li className="dropdown">
                                    <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="/">Action</a></li>
                                        <li><a href="/">Another Action</a></li>
                                        <li><a href="/">Something else</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div> */}
                        <div className="body">
                            <div className="dd dd4">
                                <ol className="dd-list">
                                    <Nestable
                                        items={itemsBackground}
                                        renderItem={renderItemsBackground}
                                    />
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Nestables
