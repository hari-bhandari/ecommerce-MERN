import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ProgressBars = () => {
  return (
    <div className="container-fluid">
      <div className="block-header">
        <div className="row clearfix">
          <div className="col-md-6 col-sm-12">
            <h1>Progress Bars</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Oculux</a></li>
                <li className="breadcrumb-item"><a href="/">Components</a></li>
                <li className="breadcrumb-item active" aria-current="page">Progress Bars</li>
              </ol>
            </nav>
          </div>
          <div className="col-md-6 col-sm-12 text-right hidden-xs">
            <a href="/" className="btn btn-sm btn-primary" >Create Campaign</a>
            <a href="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket" /> Buy Now</a>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-md-12">
          <div className="card">
            <div className="body">
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '87%' }}>
                  <span className="sr-only">60% Complete</span>
                </div>
              </div>
              <br />
              <div className="progress">
                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '46%' }}>
                  <span className="sr-only">60% Complete (warning)</span>
                </div>
              </div>
              <br />
              <div className="progress">
                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }}>
                  <span className="sr-only">60% Complete (success)</span>
                </div>
              </div>
              <br />
              <div className="progress">
                <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '12%' }}>
                  <span className="sr-only">60% Complete (danger)</span>
                </div>
              </div>
              <hr />
              <h6>Sizes</h6>
              <div className="progress progress-xs">
                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '89%' }}>
                  <span className="sr-only">60% Complete</span>
                </div>
              </div>
              <br />
              <div className="progress progress-sm">
                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '12%' }}>
                  <span className="sr-only">60% Complete (warning)</span>
                </div>
              </div>
              <br />
              <div className="progress">
                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '78%' }}>
                  <span className="sr-only">60% Complete (success)</span>
                </div>
              </div>
              <br />
              <div className="progress progress-lg">
                <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '55%' }}>
                  <span className="sr-only">60% Complete (danger)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="header">
              <h2>Progress Bars <small>Progress Bars based on Bootstrap-Progressbar plugin</small></h2>
            </div>
            <div className="body">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12">
                  <h6>Vertical Progress Bars</h6>
                  <div>
                  <ProgressBar striped variant="success" now={57} className="mb-3" style={{ height: 40 }} />
                  <ProgressBar striped variant="info" now={27} className="mb-3" style={{ height: 40 }} />
                  <ProgressBar striped variant="warning" now={61} className="mb-3" style={{ height: 40 }}/>
                  <ProgressBar striped variant="danger" now={93} className="mb-3" style={{ height: 40 }}/>
                  <ProgressBar now={80} className="mb-3"/>
                  <ProgressBar now={20} className="mb-3"/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <h6>Percentage Format</h6>
                  <ProgressBar now={40} label="27%" className='mb-3' />
                  <h6>Number Format</h6>
                  <ProgressBar now={60} label="47/100" className='mb-3' />
                  <h6>Custom Format</h6>
                  <ProgressBar now={80} label="77 of 100" className='mb-3' />
                  <hr />
                  <h6>Other Styles</h6>
                  <ProgressBar striped variant="warning" now={43} label="43%" className='mb-3' />
                  <ProgressBar animated variant="danger" now={67} label="67%" className='mb-3' />
                  <ProgressBar animated variant="success" now={50} className='mb-3' />
                  <hr />
                  <h6>Stacked Progress Bar</h6>
                  <div className="progress">
                    <div className="progress-bar progress-bar-success progress-bar-striped" style={{ width: '45%' }}>
                      <span className="sr-only">45% Complete (success)</span>
                    </div>
                    <div className="progress-bar progress-bar-warning" style={{ width: '20%' }}>
                      <span className="sr-only">20% Complete (warning)</span>
                    </div>
                    <div className="progress-bar progress-bar-danger" style={{ width: '10%' }}>
                      <span className="sr-only">10% Complete (danger)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBars;