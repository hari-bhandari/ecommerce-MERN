import React from 'react';
import { Link } from 'react-router-dom';

import TextEditor from '../common/TextEditor';

const PageBlogPost = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>New Post</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/page-blog">Blog</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Post</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <Link to="/" className="btn btn-sm btn-primary btn-round" title="">New Post</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row clearfix">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="body">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Title" />
                                </div>
                                <div className="summernote">
                                    <TextEditor />
                                </div>
                                <div className="align-right mt-3">
                                    <button className="btn btn-link"><i className="icon-paper-clip text-muted"></i></button>
                                    <button className="btn btn-link"><i className="icon-camera text-muted"></i></button>
                                    <button className="btn btn-link"><i className="icon-pointer text-muted"></i></button>
                                    <button className="btn btn-primary">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default PageBlogPost
