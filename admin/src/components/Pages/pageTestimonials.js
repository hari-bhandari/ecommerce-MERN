import React from 'react';
import { Link } from 'react-router-dom';

const PageTestimonials = () => {
    return (
        <>
         <div className="container-fluid">
            <div className="block-header">
                <div className="row clearfix">
                    <div className="col-md-6 col-sm-12">
                        <h2>Testimonials</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                            <li className="breadcrumb-item"><a href="/">Pages</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Testimonials</li>
                            </ol>
                        </nav>
                    </div>            
                    <div className="col-md-6 col-sm-12 text-right hidden-xs">
                        <a href="/" className="btn btn-sm btn-primary btn-round" title="">Add New</a>
                    </div>
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-12">
                    <div className="card-columns testimonials">
                        <div className="card">
                            <div className="body">
                                <blockquote className="blockquote mb-0">
                                    <p><i className="fa fa-quote-left"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted"><img className="avatar sm rounded-circle mr-1" src="../assets/images/sm/avatar1.jpg" alt="avatar"/> Michelle Green</small>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="card">
                            <div className="body">
                                <blockquote className="blockquote mb-0">
                                    <p><i className="fa fa-quote-left"></i>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted"><img className="avatar sm rounded-circle mr-1" src="../assets/images/sm/avatar2.jpg" alt="avatar"/> Jason Porter</small>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="card">
                            <div className="body">
                                <blockquote className="blockquote mb-0">
                                    <p><i className="fa fa-quote-left"></i>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted"><img className="avatar sm rounded-circle mr-1" src="../assets/images/sm/avatar3.jpg" alt="avatar"/> David Wallace</small>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="card">
                            <div className="body">
                                <blockquote className="blockquote mb-0">
                                    <p><i className="fa fa-quote-left"></i>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted"><img className="avatar sm rounded-circle mr-1" src="../assets/images/sm/avatar4.jpg" alt="avatar"/> Sean Black</small>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="card">
                            <div className="body">
                                <blockquote className="blockquote mb-0">
                                    <p><i className="fa fa-quote-left"></i>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted"><img className="avatar sm rounded-circle mr-1" src="../assets/images/sm/avatar5.jpg" alt="avatar"/> Jason Porter</small>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="card">
                            <div className="body">
                                <blockquote className="blockquote mb-0">
                                    <p><i className="fa fa-quote-left"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted"><img className="avatar sm rounded-circle mr-1" src="../assets/images/sm/avatar1.jpg" alt="avatar"/> Michelle Green</small>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="card">
                            <div className="body">
                                <blockquote className="blockquote mb-0">
                                    <p><i className="fa fa-quote-left"></i>he standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced</p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted"><img className="avatar sm rounded-circle mr-1" src="../assets/images/sm/avatar6.jpg" alt="avatar"/> David Wallace</small>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="card">
                            <div className="body">
                                <blockquote className="blockquote mb-0">
                                    <p><i className="fa fa-quote-left"></i>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted"><img className="avatar sm rounded-circle mr-1" src="../assets/images/sm/avatar2.jpg" alt="avatar"/> Jason Porter</small>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="card">
                            <div className="body">
                                <blockquote className="blockquote mb-0">
                                    <p><i className="fa fa-quote-left"></i>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted"><img className="avatar sm rounded-circle mr-1" src="../assets/images/sm/avatar3.jpg" alt="avatar"/> David Wallace</small>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}
export default PageTestimonials
