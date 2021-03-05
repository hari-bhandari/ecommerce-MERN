import React from 'react';
import { Link } from 'react-router-dom';

const PageGallery = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Light Gallery</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><a href="/">Pages</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Light Gallery</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <a href="/" className="btn btn-sm btn-primary btn-round" title=""><i className="fa fa-cloud-upload"></i> Upload images</a>
                        </div>
                    </div>
                </div>

                <div id="lightgallery" className="row clearfix lightGallery">
                    <div className="col-lg-3 col-md-6 m-b-30"><a className="light-link" href="../assets/images/image-gallery/1.jpg"><img className="img-fluid rounded" src="../assets/images/image-gallery/1.jpg" alt="" /></a></div>
                    <div className="col-lg-3 col-md-6 m-b-30"><a className="light-link" href="../assets/images/image-gallery/2.jpg" ><img className="img-fluid rounded" src="../assets/images/image-gallery/2.jpg" alt="" /></a></div>
                    <div className="col-lg-3 col-md-6 m-b-30"><a className="light-link" href="../assets/images/image-gallery/3.jpg" ><img className="img-fluid rounded" src="../assets/images/image-gallery/3.jpg" alt="" /></a></div>
                    <div className="col-lg-3 col-md-6 m-b-30"><a className="light-link" href="../assets/images/image-gallery/4.jpg" ><img className="img-fluid rounded" src="../assets/images/image-gallery/4.jpg" alt="" /></a></div>
                    <div className="col-lg-3 col-md-6 m-b-30"><a className="light-link" href="../assets/images/image-gallery/5.jpg" ><img className="img-fluid rounded" src="../assets/images/image-gallery/5.jpg" alt="" /></a></div>
                    <div className="col-lg-3 col-md-6 m-b-30"><a className="light-link" href="../assets/images/image-gallery/6.jpg" ><img className="img-fluid rounded" src="../assets/images/image-gallery/6.jpg" alt="" /></a></div>
                    <div className="col-lg-3 col-md-6 m-b-30"><a className="light-link" href="../assets/images/image-gallery/7.jpg" ><img className="img-fluid rounded" src="../assets/images/image-gallery/7.jpg" alt="" /></a></div>
                    <div className="col-lg-3 col-md-6 m-b-30"><a className="light-link" href="../assets/images/image-gallery/8.jpg" ><img className="img-fluid rounded" src="../assets/images/image-gallery/8.jpg" alt="" /></a></div>
                    <div className="col-lg-3 col-md-6 m-b-30"><a className="light-link" href="../assets/images/image-gallery/9.jpg" ><img className="img-fluid rounded" src="../assets/images/image-gallery/9.jpg" alt="" /></a></div>
                    <div className="col-lg-3 col-md-6 m-b-30"><a className="light-link" href="../assets/images/image-gallery/10.jpg" ><img className="img-fluid rounded" src="../assets/images/image-gallery/10.jpg" alt="" /></a></div>
                    <div className="col-lg-3 col-md-6 m-b-30"><a className="light-link" href="../assets/images/image-gallery/11.jpg" ><img className="img-fluid rounded" src="../assets/images/image-gallery/11.jpg" alt="" /></a></div>
                    <div className="col-lg-3 col-md-6 m-b-30"><a className="light-link" href="../assets/images/image-gallery/12.jpg" ><img className="img-fluid rounded" src="../assets/images/image-gallery/12.jpg" alt="" /></a></div>
                    <div className="col-lg-3 col-md-6 m-b-30"><a className="light-link" href="../assets/images/image-gallery/13.jpg" ><img className="img-fluid rounded" src="../assets/images/image-gallery/13.jpg" alt="" /></a></div>
                    <div className="col-lg-3 col-md-6 m-b-30"><a className="light-link" href="../assets/images/image-gallery/14.jpg" ><img className="img-fluid rounded" src="../assets/images/image-gallery/14.jpg" alt="" /></a></div>
                    <div className="col-lg-3 col-md-6 m-b-30"><a className="light-link" href="../assets/images/image-gallery/15.jpg" ><img className="img-fluid rounded" src="../assets/images/image-gallery/15.jpg" alt="" /></a></div>
                </div>
            </div>
        </>
    );

}
export default PageGallery
