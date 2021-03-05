import React from 'react';
import { Link } from 'react-router-dom';

const FormValidation = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>Form Validation</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">Form</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Form Validation</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <a href="/" className="btn btn-sm btn-primary" title="">Create Campaign</a>
                            <a href="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket"></i> Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>Basic Validation</h2>
                            </div>
                            <div className="body">
                                <form id="basic-form" method="post" noValidate>
                                    <div className="form-group">
                                        <label>Text Input</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Input</label>
                                        <input type="email" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Text Area</label>
                                        <textarea className="form-control" rows="5" cols="30" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-12">
                                                <label>Checkbox</label>
                                                <br />
                                                <label className="fancy-checkbox">
                                                    <input type="checkbox" name="checkbox" required data-parsley-errors-container="#error-checkbox" />
                                                    <span>Option 1</span>
                                                </label>
                                                <label className="fancy-checkbox">
                                                    <input type="checkbox" name="checkbox" />
                                                    <span>Option 2</span>
                                                </label>
                                                <label className="fancy-checkbox">
                                                    <input type="checkbox" name="checkbox" />
                                                    <span>Option 3</span>
                                                </label>
                                                <p id="error-checkbox"></p>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <label>Radio Button</label>
                                                <br />
                                                <label className="fancy-radio">
                                                    <input type="radio" name="gender" value="male" required data-parsley-errors-container="#error-radio" />
                                                    <span><i></i>Male</span>
                                                </label>
                                                <label className="fancy-radio">
                                                    <input type="radio" name="gender" value="female" />
                                                    <span><i></i>Female</span>
                                                </label>
                                                <p id="error-radio"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="food">Multiselect</label>
                                        <br />
                                        <div className="form-group">
                                            <select id="food" name="food[]" className="multiselect multiselect-custom" multiple="multiple" data-parsley-required data-parsley-trigger-after-failure="change" data-parsley-errors-container="#error-multiselect">
                                                <option value="cheese">Cheese</option>
                                                <option value="tomatoes">Tomatoes</option>
                                                <option value="mozarella">Mozzarella</option>
                                                <option value="mushrooms">Mushrooms</option>
                                                <option value="pepperoni">Pepperoni</option>
                                                <option value="onions">Onions</option>
                                            </select>
                                        </div>
                                        <p id="error-multiselect"></p>
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-primary">Validate</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>Advanced Validation</h2>
                            </div>
                            <div className="body">
                                <form id="advanced-form" data-parsley-validate noValidate>
                                    <div className="form-group">
                                        <label htmlFor="text-input1">Min. 8 Characters</label>
                                        <input type="text" id="text-input1" className="form-control" required data-parsley-minlength="8" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="text-input2">Between 5-10 Characters</label>
                                        <input type="text" id="text-input2" className="form-control" required data-parsley-length="[5,10]" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="text-input3">Min. Number ( >= 5 )</label>
                                        <input type="text" id="text-input3" className="form-control" required data-parsley-min="5" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="text-input4">Between 20-30</label>
                                        <input type="text" id="text-input4" className="form-control" required data-parsley-range="[20,30]" />
                                    </div>
                                    <div className="form-group">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-12">
                                                <label>Select Min. 2 Options</label>
                                                <br />
                                                <label className="control-inline fancy-checkbox">
                                                    <input type="checkbox" name="checkbox2" required data-parsley-mincheck="2" data-parsley-errors-container="#error-checkbox2" />
                                                    <span>Option 1</span>
                                                </label>
                                                <label className="control-inline fancy-checkbox">
                                                    <input type="checkbox" name="checkbox2" />
                                                    <span>Option 2</span>
                                                </label>
                                                <label className="control-inline fancy-checkbox">
                                                    <input type="checkbox" name="checkbox2" />
                                                    <span>Option 3</span>
                                                </label>
                                                <p id="error-checkbox2"></p>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <label>Select Between 1-2 Options</label>
                                                <br />
                                                <label className="control-inline fancy-checkbox">
                                                    <input type="checkbox" name="checkbox3" required data-parsley-check="[1,2]" data-parsley-errors-container="#error-checkbox3" />
                                                    <span>Option 1</span>
                                                </label>
                                                <label className="control-inline fancy-checkbox">
                                                    <input type="checkbox" name="checkbox3" />
                                                    <span>Option 2</span>
                                                </label>
                                                <label className="control-inline fancy-checkbox">
                                                    <input type="checkbox" name="checkbox3" />
                                                    <span>Option 3</span>
                                                </label>
                                                <p id="error-checkbox3"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Validate</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );

}
export default FormValidation
