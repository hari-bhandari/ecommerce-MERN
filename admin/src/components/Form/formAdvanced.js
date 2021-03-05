import React from 'react';
import { Link } from 'react-router-dom';
import Datepicker from '../common/datepicker';
import { Multiselect } from 'multiselect-react-dropdown';

const FormAdvanced = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>Advanced Elements</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">Form</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Advanced Elements</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <span className="btn btn-sm btn-primary" title="">Create Campaign</span>
                            <Link to="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket"></i> Buy Now</Link>
                        </div>
                    </div>
                </div>

                {/* <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>Color Pickers <small>Taken from <a href="https://github.com/mjolnic/bootstrap-colorpicker/">github.com/mjolnic/bootstrap-colorpicker</a></small></h2>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-md-6"><b>HEX CODE</b>
                                        <div className="input-group colorpicker">
                                            <input type="text" className="form-control" value="#00AABB" />
                                            <div className="input-group-append">
                                                <span className="input-group-text"><span className="input-group-addon"><i></i></span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6"><b>RGB(A) CODE</b>
                                        <div className="input-group colorpicker">
                                            <input type="text" className="form-control" value="rgba(0,0,0,0.7)" />
                                            <div className="input-group-append">
                                                <span className="input-group-text"><span className="input-group-addon"><i></i></span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


                <div className="row clearfix">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>Date Picker</h2>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12">
                                        <label>Default</label>
                                        <div className="input-group mb-3">
                                            <Datepicker className="form-control" />
                                        </div>
                                        <div>
                                            <label>Custom Format (dd/mm/yyyy)</label>
                                            <div className="input-group mb-3">
                                                <Datepicker className="form-control" />
                                            </div>
                                        </div>
                                        <div>
                                            <label>Range</label>
                                            <div className="input-daterange input-group" data-provide="datepicker">
                                                <Datepicker className="input-sm form-control" />
                                                <span className="input-group-addon range-to">to</span>
                                                <Datepicker className="input-sm form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <label>Inline</label>
                                        <div className="inline-datepicker">
                                            <Datepicker inline />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="header">
                                <h2>Masked Input with icons <small>Taken from <a href="https://github.com/RobinHerbots/jquery.inputmask">github.com/RobinHerbots/jquery.inputmask</a></small></h2>
                                <ul className="header-dropdown dropdown">
                                    <li><a href className="full-screen"><i className="icon-frame"></i></a></li>
                                    <li className="dropdown">
                                        <a href className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                        <ul className="dropdown-menu">
                                            <li><a href>Action</a></li>
                                            <li><a href>Another Action</a></li>
                                            <li><a href>Something else</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="body">
                                <div className="demo-masked-input">
                                    <div className="row clearfix">
                                        <div className="col-lg-4 col-md-6">
                                            <b>Date</b>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="icon-calendar"></i></span>
                                                </div>
                                                <input type="text" className="form-control date" placeholder="Ex: 30/07/2016" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <b>Time (24 hour)</b>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="icon-clock"></i></span>
                                                </div>
                                                <input type="text" className="form-control time24" placeholder="Ex: 23:59" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <b>Time (12 hour)</b>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="icon-clock"></i></span>
                                                </div>
                                                <input type="text" className="form-control time12" placeholder="Ex: 11:59 pm" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <b>Date Time</b>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                                                </div>
                                                <input type="text" className="form-control datetime" placeholder="Ex: 30/07/2016 23:59" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <b>Mobile Phone Number</b>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-mobile-phone"></i></span>
                                                </div>
                                                <input type="text" className="form-control mobile-phone-number" placeholder="Ex: +00 (000) 000-00-00" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <b>Phone Number</b>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-phone"></i></span>
                                                </div>
                                                <input type="text" className="form-control phone-number" placeholder="Ex: +00 (000) 000-00-00" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <b>Money (Dollar)</b>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-dollar"></i></span>
                                                </div>
                                                <input type="text" className="form-control money-dollar" placeholder="Ex: 99,99 $" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <b>IP Address</b>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-desktop"></i></span>
                                                </div>
                                                <input type="text" className="form-control ip" placeholder="Ex: 255.255.255.255" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <b>Credit Card</b>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-credit-card"></i></span>
                                                </div>
                                                <input type="text" className="form-control credit-card" placeholder="Ex: 0000 0000 0000 0000" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <b>Email Address</b>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-envelope-o"></i></span>
                                                </div>
                                                <input type="text" className="form-control email" placeholder="Ex: example@example.com" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <b>Serial Key</b>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-key"></i></span>
                                                </div>
                                                <input type="text" className="form-control key" placeholder="Ex: XXX0-XXXX-XX00-0XXX" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>Masked Text Inputs</h2>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label for="phone" className="control-label">Phone</label>
                                            <input type="text" id="phone" className="form-control" />
                                            <span className="help-block">(999) 999-9999</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label for="phone-ex" className="control-label">Phone + Ext</label>
                                            <input type="text" id="phone-ex" className="form-control" />
                                            <span className="help-block">(999) 999-9999? x99999</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label for="tax-id" className="control-label">Tax ID</label>
                                            <input type="text" id="tax-id" className="form-control" />
                                            <span className="help-block">99-9999999</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label for="ssn" className="control-label">SSN</label>
                                            <input type="text" id="ssn" className="form-control" />
                                            <span className="help-block">999-99-9999</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label for="product-key" className="control-label">Product Key</label>
                                            <input type="text" id="product-key" className="form-control" />
                                            <span className="help-block">a*-999-a999</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
 */}

                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>Multi Select <small>Taken from <Link to="https://github.com/lou/multi-select/">github.com/lou/multi-select</Link></small></h2>
                            </div>
                            <div className="body">
                                <Multiselect
                                    options={[{ name: 'Srigar', id: 1 }, { name: 'Sam', id: 2 }]}
                                    displayValue="name"
                                    multiple="multiple"
                                />
                                <select id="optgroup" className="ms" multiple="multiple">
                                    <optgroup label="Alaskan/Hawaiian Time Zone">
                                        <option value="AK">Alaska</option>
                                        <option value="HI">Hawaii</option>
                                    </optgroup>
                                    <optgroup label="Pacific Time Zone">
                                        <option value="CA">California</option>
                                        <option value="NV">Nevada</option>
                                        <option value="OR">Oregon</option>
                                        <option value="WA">Washington</option>
                                    </optgroup>
                                    <optgroup label="Mountain Time Zone">
                                        <option value="AZ">Arizona</option>
                                        <option value="CO">Colorado</option>
                                        <option value="ID">Idaho</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="UT">Utah</option>
                                        <option value="WY">Wyoming</option>
                                    </optgroup>
                                    <optgroup label="Central Time Zone">
                                        <option value="AL">Alabama</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TX">Texas</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="WI">Wisconsin</option>
                                    </optgroup>
                                    <optgroup label="Eastern Time Zone">
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="IN">Indiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="OH">Ohio</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WV">West Virginia</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>Multiselect</h2>
                            </div>
                            <div className="body demo-card">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12">
                                        <label>Default</label>
                                        <div className="multiselect_div">
                                            <select id="multiselect1" name="multiselect1[]" className="multiselect" multiple="multiple">
                                                <option value="cheese">Cheese</option>
                                                <option value="tomatoes">Tomatoes</option>
                                                <option value="mozarella">Mozzarella</option>
                                                <option value="mushrooms">Mushrooms</option>
                                                <option value="pepperoni">Pepperoni</option>
                                                <option value="onions">Onions</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <label>"Select All" Option Enabled</label>
                                        <div className="multiselect_div">
                                            <select id="multiselect3-all" name="multiselect3[]" className="multiselect multiselect-custom" multiple="multiple">
                                                <option value="multiselect-all">Select All</option>
                                                <option value="cheese">Cheese</option>
                                                <option value="tomatoes">Tomatoes</option>
                                                <option value="mozarella">Mozzarella</option>
                                                <option value="mushrooms">Mushrooms</option>
                                                <option value="pepperoni">Pepperoni</option>
                                                <option value="onions">Onions</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <label>Options Group</label>
                                        <div className="multiselect_div">
                                            <select id="multiselect5" name="multiselect5" className="multiselect-custom" multiple="multiple">
                                                <optgroup label="Mathematics">
                                                    <option value="analysis">Analysis</option>
                                                    <option value="algebra">Linear Algebra</option>
                                                    <option value="discrete">Discrete Mathematics</option>
                                                    <option value="numerical">Numerical Analysis</option>
                                                    <option value="probability">Probability Theory</option>
                                                </optgroup>
                                                <optgroup label="Computer Science">
                                                    <option value="programming">Introduction to Programming</option>
                                                    <option value="automata">Automata Theory</option>
                                                    <option value="complexity">Complexity Theory</option>
                                                    <option value="software">Software Engineering</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <label>Smaller Size</label>
                                        <div className="multiselect_div">
                                            <select id="multiselect-size" name="multiselect7[]" className="multiselect multiselect-custom" multiple="multiple">
                                                <option value="cheese">Cheese</option>
                                                <option value="tomatoes">Tomatoes</option>
                                                <option value="mozarella">Mozzarella</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-12">
                                        <label>Custom Checkbox</label>
                                        <div className="multiselect_div">
                                            <select id="multiselect2" name="multiselect2[]" className="multiselect multiselect-custom" multiple="multiple">
                                                <option value="cheese">Cheese</option>
                                                <option value="tomatoes">Tomatoes</option>
                                                <option value="mozarella">Mozzarella</option>
                                                <option value="mushrooms">Mushrooms</option>
                                                <option value="pepperoni">Pepperoni</option>
                                                <option value="onions">Onions</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <label>Single Selection</label>
                                        <div className="multiselect_div">
                                            <select id="single-selection" name="single_selection" className="multiselect multiselect-custom">
                                                <option value="cheese">Cheese</option>
                                                <option value="tomatoes">Tomatoes</option>
                                                <option value="mozarella">Mozzarella</option>
                                                <option value="mushrooms">Mushrooms</option>
                                                <option value="pepperoni">Pepperoni</option>
                                                <option value="onions">Onions</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <label>Filter Enabled</label>
                                        <div className="multiselect_div">
                                            <select id="multiselect4-filter" name="multiselect4[]" className="multiselect multiselect-custom" multiple="multiple">
                                                <option value="bootstrap">Bootstrap</option>
                                                <option value="bootstrap-marketplace">Bootstrap Marketplace</option>
                                                <option value="bootstrap-theme">Bootstrap Theme</option>
                                                <option value="html">HTML</option>
                                                <option value="html-template">HTML Template</option>
                                                <option value="wp-marketplace">WordPress Marketplace</option>
                                                <option value="wp-plugin">WordPress Plugin</option>
                                                <option value="wp-theme">WordPress Theme</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <label>Disabled Options</label>
                                        <div className="multiselect_div">
                                            <select id="multiselect6" name="multiselect6[]" className="multiselect multiselect-custom" multiple="multiple">
                                                <option value="cheese">Cheese</option>
                                                <option value="tomatoes">Tomatoes</option>
                                                <option value="mozarella">Mozzarella</option>
                                                <option value="mushrooms" disabled="disabled">Mushrooms</option>
                                                <option value="pepperoni" disabled="disabled">Pepperoni</option>
                                                <option value="onions" disabled="disabled">Onions</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-12">
                                        <label>Link (btn-link)</label>
                                        <div className="multiselect_div">
                                            <select id="multiselect-link" name="multiselect8[]" className="multiselect multiselect-custom" multiple="multiple">
                                                <option value="cheese">Cheese</option>
                                                <option value="tomatoes">Tomatoes</option>
                                                <option value="mozarella">Mozzarella</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-12">
                                        <label>Custom Button Class (btn-primary)</label>
                                        <div className="multiselect_div">
                                            <select id="multiselect-color" name="multiselect9[]" className="multiselect multiselect-custom" multiple="multiple">
                                                <option value="cheese">Cheese</option>
                                                <option value="tomatoes">Tomatoes</option>
                                                <option value="mozarella">Mozzarella</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <label>Custom Button Class (btn-success)</label>
                                        <div className="multiselect_div">
                                            <select id="multiselect-color2" name="multiselect10[]" className="multiselect multiselect-custom" multiple="multiple">
                                                <option value="cheese">Cheese</option>
                                                <option value="tomatoes">Tomatoes</option>
                                                <option value="mozarella">Mozzarella</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="header">
                                <h2>Tags Input <small>Taken from <a href="https://github.com/bootstrap-tagsinput/bootstrap-tagsinput">github.com/bootstrap-tagsinput/bootstrap-tagsinput</a></small></h2>
                            </div>
                            <div className="body">
                                <div className="input-group demo-tagsinput-area">
                                    <input type="text" className="form-control" data-role="tagsinput" defaultValue="Washington,Beijing,Cairo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>Input Slider <small>Taken from <a href="http://refreshless.com/nouislider">refreshless.com/nouislider</a> & <a href="http://materializecss.com">materializecss.com</a></small></h2>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12">
                                        <p><b>Basic Example</b></p>
                                        <div id="nouislider_basic_example"></div>
                                        <div className="m-t-20 font-12"><b>Value: </b><span className="js-nouislider-value"></span></div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <p><b>Range Example</b></p>
                                        <div id="nouislider_range_example"></div>
                                        <div className="m-t-20 font-12"><b>Value: </b><span className="js-nouislider-value"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );

}
export default FormAdvanced
