import React, { useState } from 'react';
import { Donut } from 'react-dial-knob'
// import { Sparklines, SparklinesBars } from 'react-sparklines';
import SparkLineBoxChart from '../common/dashboard12/SparkLineBoxChart';
import Piechart from '../common/dashboard12/piechart';
import EmploymentGrowth from '../common/dashboard12/EmploymentGrowth';
import MembersBarChart from '../common/dashboard12/MembersBarChat';
import MarketingChart from '../common/dashboard12/MarketingChart';
import OverviewChart from '../common/dashboard12/OverviewChart';

const Dashboard12 = () => {
  const [isDropdown, setDropdown] = useState(false)
  const [isFullScreen, setFullScreen] = useState(false)
  return (
    <>
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12">
              <h1>Dashboard</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Oculux</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                </ol>
              </nav>
            </div>
            <div className="col-md-6 col-sm-12 text-right hidden-xs">
              <a href="/" className="btn btn-sm btn-primary mr-1">Create Campaign</a>
              <a href="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket" /> Buy Now</a>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6">
                <div className="card-wrapper flip-left">
                  <div className="card s-widget-top">
                    <div className="front p-3 px-4">
                      <div>Income status</div>
                      <div className="py-4 m-0 text-center h2 text-info">$2,258</div>
                      <div className="d-flex">
                        <small className="text-muted">New income</small>
                        <div className="ml-auto">0%</div>
                      </div>
                    </div>
                    <div className="back p-3 px-4 bg-info text-center">
                      <p className="text-light">This Week</p>
                      <SparkLineBoxChart data={[64, 71, 80, 44, 108, 70, 92, 114, 81]} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card-wrapper flip-left">
                  <div className="card s-widget-top">
                    <div className="front p-3 px-4 bg-danger text-light">
                      <div>Order status</div>
                      <div className="py-4 m-0 text-center h2">428</div>
                      <div className="d-flex">
                        <small>New order</small>
                        <div className="ml-auto"><i className="fa fa-caret-down" />10%</div>
                      </div>
                    </div>
                    <div className="back p-3 px-4 text-center">
                      <p>This Week</p>
                      <SparkLineBoxChart data={[64, 71, 80, 44, 108, 70, 92, 114, 81]} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card-wrapper flip-left">
                  <div className="card s-widget-top">
                    <div className="front p-3 px-4 bg-warning text-light">
                      <div>Customer status</div>
                      <div className="py-4 m-0 text-center h2">232</div>
                      <div className="d-flex">
                        <small>New users</small>
                        <div className="ml-auto"><i className="fa fa-caret-up" />3%</div>
                      </div>
                    </div>
                    <div className="back p-3 px-4 text-center">
                      <p>This Week</p>
                      <SparkLineBoxChart data={[64, 71, 80, 44, 108, 70, 92, 114, 81]} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card-wrapper flip-left">
                  <div className="card s-widget-top">
                    <div className="front p-3 px-4">
                      <div>Total revenue</div>
                      <div className="py-4 m-0 text-center h2 text-success">$9,653</div>
                      <div className="d-flex">
                        <small className="text-muted">Income</small>
                        <div className="ml-auto"><i className="fa fa-caret-up text-success" />4%</div>
                      </div>
                    </div>
                    <div className="back p-3 px-4 bg-success text-center">
                      <p className="text-light">This Week</p>
                      <SparkLineBoxChart data={[64, 71, 80, 44, 108, 70, 92, 114, 81]} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="body">
                <div className="form-group mb-4">
                  <label className="d-block">Financials <span className="float-right">77% <i className="fa fa-long-arrow-up" /></span></label>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-azura" role="progressbar" aria-valuenow={77} aria-valuemin={0} aria-valuemax={100} style={{ width: '77%' }} />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label className="d-block">Time to Market <span className="float-right">50% <i className="fa fa-long-arrow-up" /></span></label>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }} />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label className="d-block">Engagement <span className="float-right">23% <i className="fa fa-long-arrow-up" /></span></label>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-green" role="progressbar" aria-valuenow={23} aria-valuemin={0} aria-valuemax={100} style={{ width: '23%' }} />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label className="d-block">Customers <span className="float-right">78% <i className="fa fa-long-arrow-up" /></span></label>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-indigo" role="progressbar" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100} style={{ width: '78%' }} />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label className="d-block">Competitors <span className="float-right"> 33% <i className="fa fa-long-arrow-up" /></span></label>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-orange" role="progressbar" aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} style={{ width: '33%' }} />
                  </div>
                </div>
                <div className="form-group mb-2">
                  <label className="d-block">Exit Strategy<span className="float-right">88% <i className="fa fa-long-arrow-up" /></span></label>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-red" role="progressbar" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} style={{ width: '88%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="body">
                <div className="row text-center">
                  <div className="col-lg-12 col-md-5">
                    <div className="text-center d-flex justify-content-center">
                      <Donut
                        className="knob"
                        diameter={73}
                        min={0}
                        max={100}
                        step={1}
                        value={77}
                        theme={{
                          donutThickness: 3,
                          donutColor: '#17C2D7',
                          centerColor: '#282B2F',
                          bgrColor: '#383b40'
                        }}
                      />
                    </div>
                    <label className="mb-0 mt-2">New Users</label>
                    <h4 className="h4 mb-0 font-weight-bold text-cyan">225</h4>
                  </div>
                  <div className="col-12 col-md-2 col-lg-12">
                    <hr className="mt-4 mb-4" />
                  </div>
                  <div className="col-lg-12 col-md-5">
                    <div className="text-center d-flex justify-content-center">
                      <Donut
                        className="knob"
                        diameter={73}
                        min={0}
                        max={100}
                        step={1}
                        value={38}
                        theme={{
                          donutThickness: 3,
                          donutColor: '#dc3545',
                          centerColor: '#282B2F',
                          bgrColor: '#383b40'
                        }}
                      />
                    </div>
                    <label className="mb-0 mt-2">Return Visitors</label>
                    <h4 className="h4 mb-0 font-weight-bold text-info">124</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="header">
                <h2>Sales This Week</h2>
              </div>
              <div className="body">
                <Piechart />
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-6 col-sm-12">
            <div className="card">
              <div className="header">
                <h2>Employment Growth</h2>
              </div>
              <div className="body">
                <EmploymentGrowth />
              </div>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12">
            <div className={`card ${isFullScreen ? " fullscreen" : ""}`}>
              <div className="header">
                <h2>Overview</h2>
                <ul className="header-dropdown dropdown">
                  <li><span onClick={() => setFullScreen(!isFullScreen)} className="full-screen"><i className="icon-frame"></i></span></li>
                  <li className="dropdown">
                    <span onClick={() => setDropdown(!isDropdown)} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></span>
                    <ul className={`dropdown-menu${isDropdown ? " show" : ""}`}>
                      <li><a href="/">Action</a></li>
                      <li><a href="/">Another Action</a></li>
                      <li><a href="/">Something else</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="body">
                <OverviewChart />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="header">
                <h2>Members</h2>
              </div>
              <div className="body">
                <MembersBarChart />
              </div>
              <div className="card-footer text-center">
                <div className="row clearfix">
                  <div className="col-6">
                    <h6>350</h6>
                    <span>Users</span>
                  </div>
                  <div className="col-6">
                    <h6>87</h6>
                    <span>VIP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="header">
                <h2>Marketing </h2>
              </div>
              <div className="body">
                <MarketingChart />
              </div>
              <div className="card-footer text-center">
                <div className="row clearfix">
                  <div className="col-6">
                    <h6>$3,095</h6>
                    <span>Last Month</span>
                  </div>
                  <div className="col-6">
                    <h6>$2,763</h6>
                    <span>This Month</span>
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


export default Dashboard12;