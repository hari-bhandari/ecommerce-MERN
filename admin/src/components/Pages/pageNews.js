import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

const PageNews = () => {
    return (
        <div className="container-fluid news">
            <div className="block-header">
                <div className="row clearfix">
                    <div className="col-md-6 col-sm-12">
                        <h2>News</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">News</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-md-6 col-sm-12 text-right hidden-xs">
                        <Link to="/" className="btn btn-sm btn-primary btn-round" title="">Add New</Link>
                    </div>
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-12">
                    <div className="card-group m-b-30">
                        <div className="card n_category">
                            <span className="sub_n_category bg-orange">Music</span>
                            <img className="card-img-top" src="../assets/images/news/news1.jpg" alt="Card cap" />
                            <div className="body">
                                <h5 className="card-title">
                                    <Link to="/">The Madonna 80s Mastermix</Link>
                                </h5>
                                <p className="card-text">This is a wider card supporting This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div className="card n_category">
                            <span className="sub_n_category bg-red">Tops</span>
                            <img className="card-img-top" src="../assets/images/news/news2.jpg" alt="Card cap" />
                            <div className="body">
                                <h5 className="card-title"><Link to="/">The story behind a giant ship</Link></h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to content.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 7 mins ago</small>
                            </div>
                        </div>
                        <div className="card n_category">
                            <span className="sub_n_category p_right bg-purple">Food</span>
                            <img className="card-img-top" src="../assets/images/news/news4.jpg" alt="Card cap" />
                            <div className="body">
                                <h5 className="card-title"><Link to="/">Ten films to watch in Sept...    </Link></h5>
                                <p className="card-text">This is a wider card with supportin content than  height action.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 8 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card-columns">
                        <div className="card">
                            <div id="slider1" className="carousel slide" data-ride="carousel">
                                <Carousel
                                    fade={false}
                                    indicators={false}
                                    interval={3000}
                                    keyboard={false}
                                    >
                                    <Carousel.Item >
                                        <img className="d-block w-100" src="../assets/images/image-gallery/8.jpg" alt="First slide" />
                                    </Carousel.Item >
                                    <Carousel.Item >
                                        <img className="d-block w-100" src="../assets/images/image-gallery/9.jpg" alt="Second slide" />
                                    </Carousel.Item >
                                    <Carousel.Item >
                                        <img className="d-block w-100" src="../assets/images/image-gallery/1.jpg" alt="Third slide" />
                                    </Carousel.Item >
                                </Carousel>
                            </div>
                            <div className="body">
                                <h5 className="card-title"><Link to="/">Card title that wraps to a new line</Link></h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 13 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card n_category">
                            <span className="sub_n_category bg-green">Photograph</span>
                            <img className="card-img-top" src="../assets/images/image-gallery/15.jpg" alt="Card cap" />
                            <div className="body">
                                <h5 className="card-title"><Link to="/">'I cried when asked to be cover model'</Link></h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 13 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card n_category text-center">
                            <span className="sub_n_category bg-cyan">Travel</span>
                            <img className="card-img" src="../assets/images/news/news6.jpg" alt="Card" />
                            <div className="body">
                                <h5 className="card-title"><Link to="/">Wimbledon champion Kerber out of US Open</Link></h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 15 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="body">
                                <img className="card-img-top mb-3 rounded" src="../assets/images/news/news10.jpg" alt="Card cap" />
                                <h5 className="card-title"><Link to="/">Where can I get some?</Link></h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <p className="card-text"><small className="text-muted">Last updated 1 week ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="body">
                                <div id="slider2" className="carousel vert slide" data-ride="carousel" data-interval="1700">
                                    <Carousel
                                        fade={false}
                                        indicators={false}
                                        interval={3000}
                                        keyboard={false}
                                        >
                                        <Carousel.Item >
                                            <h5 className="card-title">Special title treatment</h5>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <Link to="/" className="btn btn-primary">Readmore</Link>
                                        </Carousel.Item >
                                        <Carousel.Item >
                                            <h5 className="card-title">Special title treatment</h5>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <Link to="/" className="btn btn-primary">Readmore</Link>
                                        </Carousel.Item >
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                        <div className="card n_category">
                            <span className="sub_n_category bg-pink">Fashion</span>
                            <img className="card-img-top" src="../assets/images/news/news9.jpg" alt="Card cap" />
                            <div className="body">
                                <h5 className="mb-0 card-title"><Link to="/">Some quick example text to build on the card title.</Link></h5>
                                <small>Feb 22, 10:47 am</small>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img" src="../assets/images/image-gallery/1.jpg" alt="Card" />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Amazon Fashion</h5>
                                <p className="card-text">Your new look for the new season | Top brands | 30 days return</p>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                        <div className="card n_category">
                            <span className="sub_n_category bg-red">Tech</span>
                            <img className="card-img-top" src="../assets/images/image-gallery/10.jpg" alt="Card cap" />
                            <div className="body">
                                <h5 className="mb-0 card-title"><Link to="/">Some quick example text to build on the card title.</Link></h5>
                                <small>Feb 22, 10:47 am</small>
                            </div>
                        </div>
                        <div className="card text-white bg-success">
                            <div className="body">
                                <h5 className="card-title">Where does it come from?</h5>
                                <p className="card-text">Lana Del Rey postpones Israel performance Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                                <p className="card-text"><small className="text-muted">Last updated 13 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="../assets/images/news/news5.jpg" alt="Card cap" />
                            <div className="body">
                                <h5 className="card-title"><Link to="/">'I cried when asked to be cover model'</Link></h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card n_category">
                            <span className="sub_n_category bg-pink">Fashion</span>
                            <img className="card-img-top" src="../assets/images/news/news8.jpg" alt="Card cap" />
                            <div className="body">
                                <h5 className="mb-0 card-title"><Link to="/">Some quick example text to build on the card title.</Link></h5>
                                <small>Feb 22, 10:47 am</small>
                            </div>
                        </div>
                        <div className="card n_category text-center">
                            <span className="sub_n_category bg-indigo">Style</span>
                            <img className="card-img" src="../assets/images/news/news7.jpg" alt="Card" />
                            <div className="body">
                                <h5 className="card-title"><Link to="/">Wimbledon champion Kerber out of US Open</Link></h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img" src="../assets/images/news/news3.jpg" alt="Card" />
                            <div className="card-img-overlay">
                                <h5 className="card-title"><Link to="/">Amazon Fashion</Link></h5>
                                <p className="card-text">Your new look for the new season | Top brands | 30 days return</p>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default PageNews
