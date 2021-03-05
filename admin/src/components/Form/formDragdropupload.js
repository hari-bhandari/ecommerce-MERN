import React from 'react';
import { Link } from 'react-router-dom';
import Dropzone from '../common/DropzoneExample'

const FormDragdropupload = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>Drag & Drop File Upload</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">Form</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">File Upload</li>
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
                    <div className="col-md-12">
                        <div className="card">
                            <div className="body">
                                <Dropzone />
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>With event and default file <small>try to remove the image</small></h2>
                            </div>
                            <div className="body">
                                <Dropzone />
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>Disabled file upload</h2>
                            </div>
                            <div className="body">
                            <Dropzone />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>Limit file type <small>try to upload png or pdf only</small></h2>
                            </div>
                            <div className="body">
                                <Dropzone />
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>Limit file size <small>try to upload file larger than 100 KB</small></h2>
                            </div>
                            <div className="body">
                            <Dropzone />
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>Custom messages for default <small>replace, remove and error</small></h2>
                            </div>
                            <div className="body">
                            <Dropzone />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>

    );

}
export default FormDragdropupload
