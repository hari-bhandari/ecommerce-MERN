import React from 'react';
import { Link } from 'react-router-dom';
import Ckeditor from '../common/ckeditor';

const FormSummernote = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>Summernote</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">Form</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Summernote</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <span className="btn btn-sm btn-primary mr-1" title="">Create Campaign</span>
                            <Link to="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket"></i> Buy Now</Link>
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="body">
                                <Ckeditor activeClass="summernote" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="header">
                                <h2>Inline Editor</h2>
                            </div>
                            <div className="body">
                                <div className="inline-editor">
                                    <p className="m-b-0">You can select content and edit inline</p>
                                    <h5>Title Heading will be <b>apear here</b></h5>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fa fa-angle-right mr-3"></i> There are many variations of passages</li>
                                        <li><i className="fa fa-angle-right mr-3"></i> If you are going to use a passage of Ipsum</li>
                                        <li><i className="fa fa-angle-right mr-3"></i> Contrary to popular belief, Ipsum is not simply</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );

}
export default FormSummernote
