import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


const FormsCropping = () => {
    const [crop, setCrop] = useState({ aspect: 16 / 9 });

    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>Image Cropping</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">Form</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Image Cropping</li>
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
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="body m-b-10">
                                <div className="row clearfix">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="img-container">
                                            {/* <img id="image" src="../assets/images/image-gallery/1.jpg" className="img-fluid" alt="Picture" /> */}
                                            <ReactCrop src="../../assets/images/image-gallery/1.jpg" crop={crop} onChange={newCrop => setCrop(newCrop)} />
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-4 col-md-12">
                                        <div className="docs-preview clearfix">
                                            <div className="img-preview preview-lg"></div>
                                            <div className="img-preview preview-md"></div>
                                            <div className="img-preview preview-sm"></div>
                                            <div className="img-preview preview-xs"></div>
                                        </div>
                                        <div className="docs-data">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" for="dataX">X</span>
                                                </div>
                                                <input type="text" className="form-control" id="dataX" placeholder="x" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">px</span>
                                                </div>
                                            </div>

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">Y</span>
                                                </div>
                                                <input type="text" className="form-control" id="dataY" placeholder="y" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">px</span>
                                                </div>
                                            </div>

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">Width</span>
                                                </div>
                                                <input type="text" className="form-control" id="dataWidth" placeholder="width" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">px</span>
                                                </div>
                                            </div>

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">Height</span>
                                                </div>
                                                <input type="text" className="form-control" id="dataHeight" placeholder="height" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">px</span>
                                                </div>
                                            </div>

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">Rotate</span>
                                                </div>
                                                <input type="text" className="form-control" id="dataRotate" placeholder="rotate" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">deg</span>
                                                </div>
                                            </div>

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">ScaleX</span>
                                                </div>
                                                <input type="text" className="form-control" id="dataScaleX" placeholder="scaleX" />
                                            </div>

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">ScaleY</span>
                                                </div>
                                                <input type="text" className="form-control" id="dataScaleY" placeholder="scaleY" />
                                            </div>
                                        </div>
                                    </div>
                                */}
                                </div>
                            </div>
                            {/* <div className="body">
                                <div className="row clearfix">
                                    <div className="col-lg-8 col-md-12 docs-buttons">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-info" data-method="setDragMode" data-option="move" title="Move"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;setDragMode&quot;, &quot;move&quot;)"><span className="fa fa-arrows"></span></span></button>
                                            <button type="button" className="btn btn-sm btn-info" data-method="setDragMode" data-option="crop" title="Crop"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;setDragMode&quot;, &quot;crop&quot;)"><span className="fa fa-crop"></span></span></button>
                                        </div>

                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-success" data-method="zoom" data-option="0.1" title="Zoom In"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;zoom&quot;, 0.1)"><span className="fa fa-plus-circle"></span></span></button>
                                            <button type="button" className="btn btn-sm btn-success" data-method="zoom" data-option="-0.1" title="Zoom Out"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;zoom&quot;, -0.1)"><span className="fa fa-minus-circle"></span></span></button>
                                        </div>

                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-default" data-method="move" data-option="-10" data-second-option="0" title="Move Left"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;move&quot;, -10, 0)"><span className="fa fa-arrow-left"></span></span></button>
                                            <button type="button" className="btn btn-sm btn-default" data-method="move" data-option="10" data-second-option="0" title="Move Right"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;move&quot;, 10, 0)"><span className="fa fa-arrow-right"></span></span></button>
                                            <button type="button" className="btn btn-sm btn-default" data-method="move" data-option="0" data-second-option="-10" title="Move Up"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;move&quot;, 0, -10)"><span className="fa fa-arrow-up"></span></span></button>
                                            <button type="button" className="btn btn-sm btn-default" data-method="move" data-option="0" data-second-option="10" title="Move Down"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;move&quot;, 0, 10)"><span className="fa fa-arrow-down"></span></span></button>
                                        </div>

                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-default" data-method="rotate" data-option="-45" title="Rotate Left"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;rotate&quot;, -45)"><span className="fa fa-rotate-left"></span></span></button>
                                            <button type="button" className="btn btn-sm btn-default" data-method="rotate" data-option="45" title="Rotate Right"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;rotate&quot;, 45)"><span className="fa fa-rotate-right"></span></span></button>
                                        </div>

                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-default" data-method="scaleX" data-option="-1" title="Flip Horizontal"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;scaleX&quot;, -1)"><span className="fa fa-arrows-h"></span></span></button>
                                            <button type="button" className="btn btn-sm btn-default" data-method="scaleY" data-option="-1" title="Flip Vertical"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;scaleY&quot;, -1)"><span className="fa fa-arrows-v"></span></span></button>
                                        </div>

                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-default" data-method="crop" title="Crop"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;crop&quot;)"><span className="fa fa-check"></span></span></button>
                                            <button type="button" className="btn btn-sm btn-default" data-method="clear" title="Clear"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;clear&quot;)"><span className="fa fa-trash-o"></span></span></button>
                                        </div>

                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-default" data-method="disable" title="Disable"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;disable&quot;)"><span className="fa fa-lock"></span></span></button>
                                            <button type="button" className="btn btn-sm btn-default" data-method="enable" title="Enable"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;enable&quot;)"><span className="fa fa-unlock"></span></span></button>
                                        </div>

                                        <button type="button" className="btn btn-sm btn-default" data-method="reset" title="Reset"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;reset&quot;)"><span className="fa fa-refresh"></span></span></button>
                                        <label className="btn btn-sm btn-default btn-upload" for="inputImage" title="Upload image file">
                                            <input type="file" className="sr-only" id="inputImage" name="file" accept="image/*" />
                                            <span className="docs-tooltip" data-toggle="tooltip" title="Import image with Blob URLs"><span className="fa fa-upload"></span></span>
                                        </label>
                                        <button type="button" className="btn btn-sm  btn-default" data-method="destroy" title="Destroy"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;destroy&quot;)"><span className="fa fa-power-off"></span></span></button>

                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-danger" data-method="getCroppedCanvas"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;getCroppedCanvas&quot;)"> Get Cropped Canvas </span></button>
                                            <button type="button" className="btn btn-sm btn-danger" data-method="getCroppedCanvas" data-option="{ &quot;width&quot;: 160, &quot;height&quot;: 90 }"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;getCroppedCanvas&quot;, { width: 160, height: 90 })"> 160&times;90 </span></button>
                                            <button type="button" className="btn btn-sm btn-danger" data-method="getCroppedCanvas" data-option="{ &quot;width&quot;: 320, &quot;height&quot;: 180 }"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;getCroppedCanvas&quot;, { width: 320, height: 180 })"> 320&times;180 </span></button>
                                        </div>

                                        <button type="button" className="btn btn-default" data-method="getData" data-option data-target="#putData"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;getData&quot;)"> Get Data </span></button>
                                        <button type="button" className="btn btn-default" data-method="setData" data-target="#putData"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;setData&quot;, data)"> Set Data </span></button>
                                        <button type="button" className="btn btn-default" data-method="getContainerData" data-option data-target="#putData"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;getContainerData&quot;)"> Get Container Data </span></button>
                                        <button type="button" className="btn btn-default" data-method="getImageData" data-option data-target="#putData"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;getImageData&quot;)"> Get Image Data </span></button>
                                        <button type="button" className="btn btn-default" data-method="getCanvasData" data-option data-target="#putData"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;getCanvasData&quot;)"> Get Canvas Data </span></button>
                                        <button type="button" className="btn btn-default" data-method="setCanvasData" data-target="#putData"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;setCanvasData&quot;, data)"> Set Canvas Data </span></button>
                                        <button type="button" className="btn btn-default" data-method="getCropBoxData" data-option data-target="#putData"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;getCropBoxData&quot;)"> Get Crop Box Data </span></button>
                                        <button type="button" className="btn btn-default" data-method="setCropBoxData" data-target="#putData"><span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;setCropBoxData&quot;, data)"> Set Crop Box Data </span></button>
                                        <button type="button" className="btn btn-default" data-method="moveTo" data-option="0"><span className="docs-tooltip" data-toggle="tooltip" title="cropper.moveTo(0)"> 0,0 </span></button>
                                        <button type="button" className="btn btn-default" data-method="zoomTo" data-option="1"><span className="docs-tooltip" data-toggle="tooltip" title="cropper.zoomTo(1)"> 100% </span></button>
                                        <button type="button" className="btn btn-default" data-method="rotateTo" data-option="180"><span className="docs-tooltip" data-toggle="tooltip" title="cropper.rotateTo(180)"> 180° </span></button>

                                        <input type="text" className="form-control" id="putData" placeholder="Get data to here or set data with this value" />
                                    </div>
                                    <div className="col-lg-4 col-md-12 docs-toggles">


                                        <div className="btn-group btn-group-justified" data-toggle="buttons">
                                            <label className="btn btn-default active">
                                                <input type="radio" className="sr-only" id="aspectRatio0" name="aspectRatio" value="1.7777777777777777" />
                                                <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 16 / 9"> 16:9 </span></label>
                                            <label className="btn btn-default">
                                                <input type="radio" className="sr-only" id="aspectRatio1" name="aspectRatio" value="1.3333333333333333" />
                                                <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 4 / 3"> 4:3 </span></label>
                                            <label className="btn btn-default">
                                                <input type="radio" className="sr-only" id="aspectRatio2" name="aspectRatio" value="1" />
                                                <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 1 / 1"> 1:1 </span></label>
                                            <label className="btn btn-default">
                                                <input type="radio" className="sr-only" id="aspectRatio3" name="aspectRatio" value="0.6666666666666666" />
                                                <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 2 / 3"> 2:3 </span></label>
                                            <label className="btn btn-default">
                                                <input type="radio" className="sr-only" id="aspectRatio4" name="aspectRatio" value="NaN" />
                                                <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: NaN"> Free </span></label>
                                        </div>
                                        <div className="dropdown dropup docs-options">
                                            <button type="button" className="btn btn-success btn-block dropdown-toggle" id="toggleOptions" data-toggle="dropdown" aria-expanded="true"> Toggle Options <span className="caret"></span></button>

                                            <ul className="dropdown-menu" aria-labelledby="toggleOptions" role="menu">
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="responsive" defaultChecked /> responsive </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="restore" defaultChecked /> restore </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="checkCrossOrigin" defaultChecked /> checkCrossOrigin </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="checkOrientation" defaultChecked /> checkOrientation </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="modal" defaultChecked /> modal </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="guides" defaultChecked /> guides </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="center" defaultChecked /> center </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="highlight" defaultChecked /> highlight </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="background" defaultChecked />  background </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="autoCrop" defaultChecked /> autoCrop </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="movable" defaultChecked /> movable </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="rotatable" defaultChecked /> rotatable </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="scalable" defaultChecked /> scalable </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="zoomable" defaultChecked /> zoomable </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="zoomOnTouch" defaultChecked /> zoomOnTouch </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="zoomOnWheel" defaultChecked /> zoomOnWheel </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="cropBoxMovable" defaultChecked /> cropBoxMovable </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="cropBoxResizable" defaultChecked /> cropBoxResizable </label>
                                                </li>
                                                <li role="presentation">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="toggleDragModeOnDblclick" defaultChecked /> toggleDragModeOnDblclick </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                      
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}
export default FormsCropping
