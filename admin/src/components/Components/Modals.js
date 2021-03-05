import React, { useState } from 'react';

const Modals = () => {
  const [isModal, setModal] = useState('');
  return (
    <div className="container-fluid">
      <div className="block-header">
        <div className="row clearfix">
          <div className="col-md-6 col-sm-12">
            <h1>Modals Popups</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Oculux</a></li>
                <li className="breadcrumb-item"><a href="/">Components</a></li>
                <li className="breadcrumb-item active" aria-current="page">Modals Popups</li>
              </ol>
            </nav>
          </div>
          <div className="col-md-6 col-sm-12 text-right hidden-xs">
            <a href="/" className="mr-1 btn btn-sm btn-primary" >Create Campaign</a>
            <a href="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket" /> Buy Now</a>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="header">
              <h2>Modals</h2>
            </div>
            <div className="body">
              <button type="button" className="btn btn-round btn-info" onClick={() => setModal('Large Modal')}>Large modal</button>
              <button type="button" className="btn btn-round btn-info" onClick={() => setModal('Small Modal')}>Small modal</button>
              <button type="button" className="btn btn-round btn-info" onClick={() => setModal('Modal With Button')}>modal with button</button>
              <button type="button" className="btn btn-round btn-info" onClick={() => setModal('Vertically Centered')}>Vertically centered</button>
              {/* larg modal */}
              <div className={`modal fade bd-example-modal-lg ${isModal === 'Large Modal' ? ' d-block show' : ''}`} onClick={() => setModal('')}>
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title h4" id="myLargeModalLabel">Large modal</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>Woohoo, you're reading this text in a modal!</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Small modal */}
              <div className={`modal fade bd-example-modal-sm ${isModal === 'Small Modal' ? ' d-block show' : ''}`}  onClick={() => setModal('')}>
                <div className="modal-dialog modal-sm">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title h4" id="mySmallModalLabel">Small modal</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>Woohoo, you're reading this text in a modal!</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal with btn */}
              <div className={`modal fade  ${isModal === 'Modal With Button' ? 'd-block show' : ''}`} id="exampleModal"  onClick={() => setModal('')}>
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>Woohoo, you're reading this text in a modal!</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-round btn-default" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-round btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Vertically centered */}
              <div className={`modal fade ${isModal === 'Vertically Centered' ? 'd-block show' : ''}`} onClick={() => setModal('')}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>Cras mattis consectetur orbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-round btn-default" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-round btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="header">
              <h2>More Modals Example</h2>
            </div>
            <div className="body">
              <button type="button" className="btn btn-round btn-success" onClick={() => setModal('Launch Pricing modal')}>Launch Pricing modal</button>
              <button type="button" className="btn btn-round btn-light" onClick={() => setModal('Users Visitors modal')}>Users Visitors modal</button>
              <button type="button" className="btn btn-round btn-primary" onClick={() => setModal('Setup New Project')}>Setup New Project</button>
              <button type="button" className="btn btn-round btn-warning" onClick={() => setModal('Feed Post modal')}>Feed Post modal</button>
              <button type="button" className="btn btn-round btn-success" onClick={() => setModal('Form Wizard modal')}>Form Wizard modal</button>
              {/* launch-pricing */}
              <div className={`modal fade launch-pricing-modal ${isModal === 'Launch Pricing modal' ? 'd-block show' : ''}`} onClick={() => setModal('')}>
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <div className="modal-body pricing_page text-center pt-4 mb-4">
                      <h5>Small startup? Big company? We’ve got a plan.</h5>
                      <p className="mb-4">Pricing is based on two things: Number of opened projects, and the number of seats you want for your team. Plans start at $19/month.</p>
                      <div className="row clearfix">
                        <div className="col-lg-4 cool-md-4 col-sm-12">
                          <div className="card">
                            <ul className="pricing body">
                              <li className="price">
                                <h3><span>$</span> 99 <small>/ mo</small></h3>
                                <span>Freelance</span>
                              </li>
                              <li>1 GB of space</li>
                              <li>Support at $25/hour</li>
                              <li>Limited cloud access</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4 cool-md-4 col-sm-12">
                          <div className="card">
                            <ul className="pricing body active">
                              <li className="price">
                                <h3><span>$</span> 199 <small>/ mo</small></h3>
                                <span>Business</span>
                              </li>
                              <li>5 GB of space</li>
                              <li>Support at $10/hour</li>
                              <li>Full cloud access</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4 cool-md-4 col-sm-12">
                          <div className="card">
                            <ul className="pricing body">
                              <li className="price">
                                <h3><span>$</span> 299 <small>/ mo</small></h3>
                                <span>Enterprise</span>
                              </li>
                              <li>15 GB of space</li>
                              <li>Support at $5/hour</li>
                              <li>Full cloud access</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-12">
                          <p>Have a larger team? <a href="/">Contact us</a> for information about more enterprise options.</p>
                          <button className="btn btn-round btn-success">Start your free trial</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Users Visitors */}
              <div className={`modal fade bd-Users-modal-sm ${isModal === 'Users Visitors modal' ? 'd-block show' : ''}`} onClick={() => setModal('')}>
                <div className="modal-dialog modal-sm">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title h4" id="mySmallModalLabel">Users Visitors</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <div className="modal-body">
                      <div className="row text-center">
                        <div className="col-6 border-right pb-4 pt-4">
                          <label className="mb-0">New Users</label>
                          <h4 className="font-30 font-weight-bold text-col-blue">2,025</h4>
                        </div>
                        <div className="col-6 pb-4 pt-4">
                          <label className="mb-0">Return Visitors</label>
                          <h4 className="font-30 font-weight-bold text-col-blue">1,254</h4>
                        </div>
                      </div>
                      <div>
                        <div className="form-group">
                          <label className="d-block">New Users <span className="float-right">77%</span></label>
                          <div className="progress progress-xxs">
                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={77} aria-valuemin={0} aria-valuemax={100} style={{ width: '77%' }} />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="d-block">Return Visitors <span className="float-right">50%</span></label>
                          <div className="progress progress-xxs">
                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }} />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="d-block">Engagement <span className="float-right">23%</span></label>
                          <div className="progress progress-xxs">
                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={23} aria-valuemin={0} aria-valuemax={100} style={{ width: '23%' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Setup New Project */}
              <div className={`modal fade new-project-modal ${isModal === 'Setup New Project' ? 'd-block show' : ''}`} onClick={() => setModal('')}>
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Setup New Project</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Project Name" />
                      </div>
                      <input type="file" className="dropify" />
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-round btn-default" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-round btn-success">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* feed-post-modal */}
              <div className={`modal fade feed-post-modal ${isModal === 'Feed Post modal' ? 'd-block show' : ''}`} onClick={() => setModal('')}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="d-flex mb-3">
                        <div className="icon bg-transparent">
                          <img src="../assets/images/user-small.png" className="rounded mr-3 w40" alt="" />
                        </div>
                        <div>
                          <h6 className="mb-0">Louis Pierce</h6>
                          <span>UI director</span>
                        </div>
                      </div>
                      <div className="form-group">
                        <textarea rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} />
                      </div>
                      <div className="align-right">
                        <button className="btn btn-link"><i className="icon-paper-clip text-muted" /></button>
                        <button className="btn btn-link"><i className="icon-camera text-muted" /></button>
                        <button className="btn btn-link"><i className="icon-pointer text-muted" /></button>
                        <button className="btn btn-round btn-warning" data-dismiss="modal">Post</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* launch-pricing */}
              <div className={`modal fade Form-Wizard-modal ${isModal === 'Form Wizard modal' ? 'd-block show' : ''}`} onClick={() => setModal('')}>
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Form Wizard modal</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body pricing_page">
                      <div id="wizard_horizontal">
                        <h2>First Step</h2>
                        <section>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut nulla nunc. Maecenas
                            arcu sem, hendrerit a tempor quis, sagittis accumsan tellus. In hac habitasse platea
                            dictumst. Donec a semper dui. Nunc eget quam libero. Nam at felis metus. Nam tellus
                              dolor, tristique ac tempus nec, iaculis quis nisi. </p>
                        </section>
                        <h2>Second Step</h2>
                        <section>
                          <p>Donec mi sapien, hendrerit nec egestas a, rutrum vitae dolor. Nullam venenatis diam ac
                            ligula elementum pellentesque. In lobortis sollicitudin felis non eleifend. Morbi
                            tristique tellus est, sed tempor elit. Morbi varius, nulla quis condimentum dictum,
                            nisi elit condimentum magna, nec venenatis urna quam in nisi. Integer hendrerit sapien
                            a diam adipiscing consectetur. In euismod augue ullamcorper leo dignissim quis elementum
                            arcu porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo
                            velit, blandit ac tempor nec, ultrices id diam. Donec metus lacus, rhoncus sagittis
                              iaculis nec, malesuada a diam. Donec non pulvinar urna. Aliquam id velit lacus. </p>
                        </section>
                        <h2>Third Step</h2>
                        <section>
                          <p> Morbi ornare tellus at elit ultrices id dignissim lorem elementum. Sed eget nisl at justo
                            condimentum dapibus. Fusce eros justo, pellentesque non euismod ac, rutrum sed quam.
                            Ut non mi tortor. Vestibulum eleifend varius ullamcorper. Aliquam erat volutpat.
                            Donec diam massa, porta vel dictum sit amet, iaculis ac massa. Sed elementum dui
                              commodo lectus sollicitudin in auctor mauris venenatis. </p>
                        </section>
                      </div>
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

export default Modals;