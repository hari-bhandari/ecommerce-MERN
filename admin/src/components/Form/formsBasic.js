import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../common/dropdown';

const FormsBasic = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>Basic Form Elements</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">Form</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Basic Form Elements</li>
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
                    <div className="col-lg-12 col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2> Basic example</h2>
                            </div>
                            <div className="body">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>

                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">@example.com</span>
                                    </div>
                                </div>

                                <label htmlFor="basic-url">Your vanity URL</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                    </div>
                                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">$</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">.00</span>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">With textarea</span>
                                    </div>
                                    <textarea className="form-control" aria-label="With textarea"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>Different Sizing</h2>
                            </div>
                            <div className="body">
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                                </div>

                                <div className="input-group input-group-lg">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>Input with Checkboxes and radios</h2>
                            </div>
                            <div className="body">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <input type="checkbox" aria-label="Checkbox for following text input" />
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Text input with checkbox" />
                                </div>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <input type="radio" aria-label="Radio button for following text input" />
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Text input with radio button" />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>Multiple addons <small>Multiple add-ons are supported and can be mixed with checkbox and radio input versions.</small></h2>
                            </div>
                            <div className="body">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">$</span>
                                        <span className="input-group-text">0.00</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                </div>

                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">$</span>
                                        <span className="input-group-text">0.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>Custom Checkboxes and Radio Buttons</h2>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="fancy-checkbox">
                                            <label><input type="checkbox" /><span>Fancy Checkbox 1</span></label>
                                        </div>
                                        <div className="fancy-checkbox">
                                            <label><input type="checkbox" defaultChecked /><span>Fancy Checkbox 2</span></label>
                                        </div>
                                        <div className="fancy-checkbox">
                                            <label><input type="checkbox" /><span>Fancy Checkbox 3</span></label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="fancy-radio">
                                            <label><input name="gender" value="male" type="radio" defaultChecked /><span><i></i>Male</span></label>
                                        </div>
                                        <div className="fancy-radio">
                                            <label><input name="gender" value="female" type="radio" /><span><i></i>Female</span></label>
                                        </div>
                                        <br />
                                        <label className="fancy-radio"><input name="gender2" value="male" type="radio" /><span><i></i>Male</span></label>
                                        <label className="fancy-radio"><input name="gender2" value="female" type="radio" defaultChecked /><span><i></i>Female</span></label>
                                        <br />
                                        <label className="fancy-radio custom-color-green"><input name="gender3" value="male" type="radio" defaultChecked /><span><i></i>Male</span></label>
                                        <label className="fancy-radio custom-color-green"><input name="gender3" value="female" type="radio" /><span><i></i>Female</span></label>
                                        <br />
                                        <label className="fancy-radio custom-color-green"><input name="gender4" value="male" type="radio" /><span><i></i>Male</span></label>
                                        <label className="fancy-radio custom-color-green"><input name="gender4" value="female" type="radio" defaultChecked /><span><i></i>Female</span></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>Input Button addons</h2>
                            </div>
                            <div className="body">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary" type="button">Button</button>
                                    </div>
                                    <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                                </div>

                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Button</button>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary" type="button">Button</button>
                                        <button className="btn btn-outline-secondary" type="button">Button</button>
                                    </div>
                                    <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                                </div>

                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Button</button>
                                        <button className="btn btn-outline-secondary" type="button">Button</button>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <h6>Input Button dropdowns</h6>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <DropdownMenu text="Dropdown" varient="" />
                                    </div>
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                </div>

                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                    <div className="input-group-append">
                                        <DropdownMenu text="Dropdown" varient="" />
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <h6>Input Button wtih Segmented</h6>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <DropdownMenu text="Action" varient="" />
                                    </div>
                                    <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                                </div>

                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                                    <div className="input-group-append">
                                        <DropdownMenu text="Action" varient="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h2>Custom forms <small>Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.</small></h2>
                            </div>
                            <div className="body">
                                <h6>1. Custom select</h6>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                                    </div>
                                    <select className="custom-select" id="inputGroupSelect01">
                                        <option defaultValue>Choose...</option>
                                        <option defaultValue="1">One</option>
                                        <option defaultValue="2">Two</option>
                                        <option defaultValue="3">Three</option>
                                    </select>
                                </div>

                                <div className="input-group mb-3">
                                    <select className="custom-select" id="inputGroupSelect02">
                                        <option defaultValue>Choose...</option>
                                        <option defaultValue="1">One</option>
                                        <option defaultValue="2">Two</option>
                                        <option defaultValue="3">Three</option>
                                    </select>
                                    <div className="input-group-append">
                                        <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary" type="button">Button</button>
                                    </div>
                                    <select className="custom-select" id="inputGroupSelect03">
                                        <option defaultValue>Choose...</option>
                                        <option defaultValue="1">One</option>
                                        <option defaultValue="2">Two</option>
                                        <option defaultValue="3">Three</option>
                                    </select>
                                </div>

                                <div className="input-group">
                                    <select className="custom-select" id="inputGroupSelect04">
                                        <option defaultValue>Choose...</option>
                                        <option defaultValue="1">One</option>
                                        <option defaultValue="2">Two</option>
                                        <option defaultValue="3">Three</option>
                                    </select>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Button</button>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <h6>2. Custom file input</h6>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Upload</span>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile01" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile02" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile02">Choose file</label>
                                    </div>
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="">Upload</span>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary" type="button">Button</button>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile03" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile04" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
                                    </div>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Button</button>
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
export default FormsBasic
