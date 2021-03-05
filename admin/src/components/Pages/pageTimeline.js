import React from 'react';
import { Link } from 'react-router-dom';

const PageTimeline = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Timeline</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><a href="/">Pages</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Timeline</li>
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
                        <div className="card">
                            <div className="body">
                                <ul className="timeline">
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>March 12, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Event Title</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                            eu pede mollis pretium. Pellentesque ut neque.</p>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>March 23, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Event Title</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                            eu pede mollis pretium. Pellentesque ut neque. </p>
                                        </div>
                                    </li>
                                    <li className="timeline-item period">
                                        <div className="timeline-info"></div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h2 className="timeline-title">April 2018</h2>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>April 02, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Event Title</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                            eu pede mollis pretium. Pellentesque ut neque. </p>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>April 28, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content pb-0">
                                            <h3 className="timeline-title">Event Title</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                            eu pede mollis pretium. Pellentesque ut neque. </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="header">
                                <h2>Split Timeline</h2>
                            </div>
                            <div className="body">
                                <ul className="timeline timeline-split">
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>March 12, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Event Title</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                            eu pede mollis pretium. Pellentesque ut neque.</p>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>March 23, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Event Title</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                            eu pede mollis pretium. Pellentesque ut neque. </p>
                                        </div>
                                    </li>
                                    <li className="timeline-item period">
                                        <div className="timeline-info"></div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h2 className="timeline-title">April 2018</h2>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>April 02, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Event Title</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                            eu pede mollis pretium. Pellentesque ut neque. </p>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>April 28, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content pb-0">
                                            <h3 className="timeline-title">Event Title</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                            eu pede mollis pretium. Pellentesque ut neque. </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="header">
                                <h2>Centered Timeline</h2>
                            </div>
                            <div className="body">
                                <ul className="timeline timeline-centered">
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>March 12, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Event Title</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                            eu pede mollis pretium. Pellentesque ut neque.</p>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>March 23, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Event Title</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                            eu pede mollis pretium. Pellentesque ut neque. </p>
                                        </div>
                                    </li>
                                    <li className="timeline-item period">
                                        <div className="timeline-info"></div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h2 className="timeline-title">April 2018</h2>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>April 02, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Event Title</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                            eu pede mollis pretium. Pellentesque ut neque. </p>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span>April 28, 2018</span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">Event Title</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                            eu pede mollis pretium. Pellentesque ut neque. </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default PageTimeline
