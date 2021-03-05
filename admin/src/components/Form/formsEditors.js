import React from 'react';
import { Link } from 'react-router-dom';
import Ckeditor from '../common/ckeditor';

const FormsEditors = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>CKEditor</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">Form</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">CKEditor</li>
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
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="body">
                                <Ckeditor />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );

}
export default FormsEditors
