import React from 'react';
import { Link } from 'react-router-dom';

const PageBlog = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Blog</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">Blog</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">List</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <Link to="/page-blog-post" className="btn btn-sm btn-primary btn-round" title="">New Post</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row clearfix">
                    <div className="col-lg-8 col-md-12">
                        <div className="single-blog">
                            <div className="post-thumb">
                                <Link to="/"><img src="../assets/images/image-gallery/1.jpg" className="img-fluid rounded" alt="Avatar" /></Link>
                            </div>

                            <div className="post-content overflow">
                                <h2 className="post-title bold"><Link to="/">Advanced business cards design</Link></h2>
                                <h3 className="post-author"><Link to="/">Posted by micron News</Link></h3>
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber [...]</p>
                                <Link to="/" className="read-more">View More</Link>
                                <div className="post-bottom overflow">
                                    <ul className="nav navbar-nav post-nav">
                                        <li><a href="/"><i className="fa fa-tag"></i>Creative</a></li>
                                        <li><a href="/"><i className="fa fa-heart"></i>32 Love</a></li>
                                        <li><a href="/"><i className="fa fa-comments"></i>3 Comments</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="single-blog">
                            <div className="post-thumb">
                                <Link to="/"><img src="../assets/images/image-gallery/2.jpg" className="img-fluid rounded" alt="Avatar" /></Link>
                            </div>
                            <div className="post-content overflow">
                                <h2 className="post-title bold"><a href="/">Advanced business cards design</a></h2>
                                <h3 className="post-author"><a href="/">Posted by micron News</a></h3>
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber [...]</p>
                                <Link to="/" className="read-more">View More</Link>
                                <div className="post-bottom overflow">
                                    <ul className="nav navbar-nav post-nav">
                                        <li><Link to="/"><i className="fa fa-tag"></i>Creative</Link></li>
                                        <li><Link to="/"><i className="fa fa-heart"></i>11 Love</Link></li>
                                        <li><Link to="/"><i className="fa fa-comments"></i>30 Comments</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="single-blog">
                            <div className="post-thumb">
                                <Link to="/"><img src="../assets/images/image-gallery/3.jpg" className="img-fluid rounded" alt="Avatar" /></Link>
                            </div>
                            <div className="post-content overflow">
                                <h2 className="post-title bold"><a href="/">Advanced business cards design</a></h2>
                                <h3 className="post-author"><a href="/">Posted by micron News</a></h3>
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber [...]</p>
                                <Link to="/" className="read-more">View More</Link>
                                <div className="post-bottom overflow">
                                    <ul className="nav navbar-nav post-nav">
                                        <li><Link to="/"><i className="fa fa-tag"></i>Creative</Link></li>
                                        <li><Link to="/"><i className="fa fa-heart"></i>51 Love</Link></li>
                                        <li><Link to="/"><i className="fa fa-comments"></i>12 Comments</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
                    <div className="col-lg-4 col-md-12">
                        <form className="card">
                            <div className="body">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                </div>
                                <div className="form-footer">
                                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                </div>
                            </div>
                        </form>
                        <div className="card">
                            <div className="header">
                                <h2>Archive</h2>
                            </div>
                            <div className="body">
                                <table className="table card-table mb-0">
                                    <tbody>
                                        <tr>
                                            <td className="font-weight-bold"><span className="text-muted">November 2018</span></td>
                                            <td className="text-right">( 42 )</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-bold"><span className="text-muted">December 2018</span></td>
                                            <td className="text-right">( 210 )</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-bold"><span className="text-muted">January 2019</span></td>
                                            <td className="text-right">( 54 )</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-bold"><span className="text-muted">February 2019</span></td>
                                            <td className="text-right">( 25 )</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-bold"><span className="text-muted">March 2019</span></td>
                                            <td className="text-right">( 102 )</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-bold"><span className="text-muted">April 2019</span></td>
                                            <td className="text-right">( 12 )</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card">
                            <div id="slider4" className="carousel slide" data-ride="carousel" data-interval="2000">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="card-img-top" src="../assets/images/image-gallery/10.jpg" alt="Card cap" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="card-img-top" src="../assets/images/image-gallery/11.jpg" alt="Card cap" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="card-img-top" src="../assets/images/image-gallery/12.jpg" alt="Card cap" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <div className="row clearfix">
                                    <div className="col-6">
                                        <i className="fa fa-camera font-22"></i>
                                        <div><span className="text-muted">3 Photos</span></div>
                                    </div>
                                    <div className="col-6">
                                        <i className="fa fa-eye font-22"></i>
                                        <div><span className="text-muted">1k Views</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>Tag Cloud</h2>
                            </div>
                            <div className="body">
                                <ul className="nav nav-pills tag_cloud">
                                    <li className="nav-item"><a className="nav-link" href="/">Corporate</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/">Joomla</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/">Abstract</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/">Creative</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/">Business</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/">Product</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>Latest Photos</h2>
                            </div>
                            <ul className="gallery list-unstyled">
                                <li><a href="/"><img src="../assets/images/image-gallery/1.jpg" className="img-fluid rounded" alt="" /></a></li>
                                <li><a href="/"><img src="../assets/images/image-gallery/2.jpg" className="img-fluid rounded" alt="" /></a></li>
                                <li><a href="/"><img src="../assets/images/image-gallery/3.jpg" className="img-fluid rounded" alt="" /></a></li>
                                <li><a href="/"><img src="../assets/images/image-gallery/4.jpg" className="img-fluid rounded" alt="" /></a></li>
                                <li><a href="/"><img src="../assets/images/image-gallery/5.jpg" className="img-fluid rounded" alt="" /></a></li>
                                <li><a href="/"><img src="../assets/images/image-gallery/6.jpg" className="img-fluid rounded" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default PageBlog
