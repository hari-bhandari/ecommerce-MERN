import React from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Notifications = () => {
  const toastMessageCall = (msg, position, type) => {
    toast(msg, { type, autoClose: 2000, position, transition: Zoom });
  }
  return (
    <>
    <ToastContainer />
    <div className="container-fluid">
      <div className="block-header">
        <div className="row clearfix">
          <div className="col-md-6 col-sm-12">
            <h1>Notifications</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Oculux</a></li>
                <li className="breadcrumb-item"><a href="/">Components</a></li>
                <li className="breadcrumb-item active" aria-current="page">Notifications</li>
              </ol>
            </nav>
          </div>
          <div className="col-md-6 col-sm-12 text-right hidden-xs">
            <a href="/" className="btn btn-sm btn-primary" >Create Campaign</a>
            <a href="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket" /> Buy Now</a>
          </div>
        </div>
      </div>
      <div className="row clealfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="header">
              <h2>Popup Positions</h2>
            </div>
            <div className="body">
              <button type="button" className="btn btn-sm btn-default btn-toastr" onClick={() => toastMessageCall('Hi, I\'m here', "bottom-right", 'info')}>Bottom Right</button>
              <button type="button" className="btn btn-sm btn-default btn-toastr" onClick={() => toastMessageCall('Hi, I\'m here', "bottom-left", 'info')} data-position="bottom-left">Bottom Left</button>
              <button type="button" className="btn btn-sm btn-default btn-toastr" onClick={() => toastMessageCall('Hi, I\'m here', "top-left", 'info')} data-position="top-left">Top Left</button>
              <button type="button" className="btn btn-sm btn-default btn-toastr" onClick={() => toastMessageCall('Hi, I\'m here', "top-right", 'info')} data-position="top-right">Top Right</button>
              <button type="button" className="btn btn-sm btn-default btn-toastr" onClick={() => toastMessageCall('Hi, I\'m here', "top-center", 'info')} data-position="top-full-width">Top Full Width</button>
              <button type="button" className="btn btn-sm btn-default btn-toastr" onClick={() => toastMessageCall('Hi, I\'m here', "bottom-center", 'info')} data-position="bottom-full-width">Bottom Full Width</button>
              <button type="button" className="btn btn-sm btn-default btn-toastr" onClick={() => toastMessageCall('Hi, I\'m here', "top-center", 'info')} data-position="top-center">Top Center</button>
              <button type="button" className="btn btn-sm btn-default btn-toastr" onClick={() => toastMessageCall('Hi, I\'m here', "bottom-center", 'info')} data-position="bottom-center">Bottom Center</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row clealfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="header">
              <h2>Message Context</h2>
            </div>
            <div className="body">
              <button type="button" className="btn btn-primary btn-toastr" onClick={() => toastMessageCall('This is general theme info', "bottom-right", 'info')}>General Info</button>
              <button type="button" className="btn btn-success btn-toastr" onClick={() => toastMessageCall('This is success info', "bottom-right", 'success')}>Success Info</button>
              <button type="button" className="btn btn-warning btn-toastr" onClick={() => toastMessageCall('This is warning info', "bottom-right", 'warning')}>Warning Info</button>
              <button type="button" className="btn btn-danger btn-toastr" onClick={() => toastMessageCall('This is error info', "bottom-right", 'error')}>Error Info</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row clealfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="header">
              <h2>Callback Events</h2>
            </div>
            <div className="body">
              <button type="button" className="btn btn-default btn-toastr-callback" id="toastr-callback1" data-context="info" data-message="onShown and onHidden callback demo">onShown and onHidden</button>
              <button type="button" className="btn btn-default btn-toastr-callback" id="toastr-callback2" data-context="info" data-message="Please click me">onclick</button>
              <button type="button" className="btn btn-default btn-toastr-callback" id="toastr-callback3" data-context="info" data-message="Please click close button">onCloseClick</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Notifications;