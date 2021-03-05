import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Row, Col, Nav } from 'react-bootstrap';

const FormWizard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12">
              <h1>Form Wizard</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                  <li className="breadcrumb-item"><Link to="/">Form</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Form Wizard</li>
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
              <div className="header">
                <h2>Basic Example - Horizontal Layout</h2>
              </div>
              <div className="body">
                <div id="wizard_horizontal_icon" className="step_icon">
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title={<i className="fa fa-home" />} tabClassName="form_wizard_tab">
                      <p>In3 euismod augue ullamcorper leo dignissim quis elementum
                            arcu porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo
                            velit, blandit ac tempor nec, ultrices id diam. Donec metus lacus, rhoncus sagittis
                                        iaculis nec, malesuada a diam. Donec non pulvinar urna. Aliquam id velit lacus.</p>
                    </Tab>
                    <Tab eventKey="profile" title={<i className="fa fa-gear" />} tabClassName="form_wizard_tab">
                      <p>In3 euismod augue ullamcorper leo dignissim quis elementum
                            arcu porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo
                            velit, blandit ac tempor nec, ultrices id diam. Donec metus lacus, rhoncus sagittis
                                        iaculis nec, malesuada a diam. Donec non pulvinar urna. Aliquam id velit lacus.</p>
                    </Tab>
                    <Tab eventKey="contact" title={<i className="fa fa-hand-o-right" />} tabClassName="form_wizard_tab">
                      <p>In3 euismod augue ullamcorper leo dignissim quis elementum
                            arcu porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo
                            velit, blandit ac tempor nec, ultrices id diam. Donec metus lacus, rhoncus sagittis
                                        iaculis nec, malesuada a diam. Donec non pulvinar urna. Aliquam id velit lacus.</p>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card">
              <div className="header">
                <h2>Basic Example - Horizontal Layout</h2>
              </div>
              <div className="body">
                <div id="wizard_horizontal">
                  <Tabs defaultActiveKey="First Step" id="uncontrolled-tab-example">
                    <Tab eventKey="First Step" title="First Step" tabClassName="form_wizard_tab form_wizard_width">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut nulla nunc. Maecenas
                      arcu sem, hendrerit a tempor quis, sagittis accumsan tellus. In hac habitasse platea
                      dictumst. Donec a semper dui. Nunc eget quam libero. Nam at felis metus. Nam tellus
                                        dolor, tristique ac tempus nec, iaculis quis nisi. </p>
                    </Tab>
                    <Tab eventKey="Second Step" title="Second Step" tabClassName="form_wizard_tab form_wizard_width">
                      <p>Donec mi sapien, hendrerit nec egestas a, rutrum vitae dolor. Nullam venenatis diam ac
                        ligula elementum pellentesque. In lobortis sollicitudin felis non eleifend. Morbi
                        tristique tellus est, sed tempor elit. Morbi varius, nulla quis condimentum dictum,
                        nisi elit condimentum magna, nec venenatis urna quam in nisi. Integer hendrerit sapien
                        a diam adipiscing consectetur. In euismod augue ullamcorper leo dignissim quis elementum
                        arcu porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo
                        velit, blandit ac tempor nec, ultrices id diam. Donec metus lacus, rhoncus sagittis
                                        iaculis nec, malesuada a diam. Donec non pulvinar urna. Aliquam id velit lacus. </p>
                    </Tab>
                    <Tab eventKey="Third Step" title="Third Step" tabClassName="form_wizard_tab form_wizard_width">
                      <p> Morbi ornare tellus at elit ultrices id dignissim lorem elementum. Sed eget nisl at justo
                      condimentum dapibus. Fusce eros justo, pellentesque non euismod ac, rutrum sed quam.
                      Ut non mi tortor. Vestibulum eleifend varius ullamcorper. Aliquam erat volutpat.
                      Donec diam massa, porta vel dictum sit amet, iaculis ac massa. Sed elementum dui
                                        commodo lectus sollicitudin in auctor mauris venenatis. </p>
                    </Tab>
                    <Tab eventKey="Forth Step" title="Forth Step" tabClassName="form_wizard_tab form_wizard_width">
                      <p> Quisque at sem turpis, id sagittis diam. Suspendisse malesuada eros posuere mauris vehicula
                        vulputate. Aliquam sed sem tortor. Quisque sed felis ut mauris feugiat iaculis nec
                        ac lectus. Sed consequat vestibulum purus, imperdiet varius est pellentesque vitae.
                        Suspendisse consequat cursus eros, vitae tempus enim euismod non. Nullam ut commodo
                                        tortor. </p>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card">
              <div className="header">
                <h2>Basic Example - Vertical Layout</h2>
              </div>
              <div className="body">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first" className="form_wizard_tab mb-1">1. First Step</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second" className="form_wizard_tab mb-1">2. Second Step</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third" className="form_wizard_tab mb-1">3. Third Step</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="forth" className="form_wizard_tab mb-1">4. Forth Step</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut nulla nunc. Maecenas
                      arcu sem, hendrerit a tempor quis, sagittis accumsan tellus. In hac habitasse platea
                      dictumst. Donec a semper dui. Nunc eget quam libero. Nam at felis metus. Nam tellus
                                        dolor, tristique ac tempus nec, iaculis quis nisi. </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <p> Donec mi sapien, hendrerit nec egestas a, rutrum vitae dolor. Nullam venenatis diam ac
                      ligula elementum pellentesque. In lobortis sollicitudin felis non eleifend. Morbi
                      tristique tellus est, sed tempor elit. Morbi varius, nulla quis condimentum dictum,
                      nisi elit condimentum magna, nec venenatis urna quam in nisi. Integer hendrerit sapien
                      a diam adipiscing consectetur. In euismod augue ullamcorper leo dignissim quis elementum
                      arcu porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo
                      velit, blandit ac tempor nec, ultrices id diam. Donec metus lacus, rhoncus sagittis
                                        iaculis nec, malesuada a diam. Donec non pulvinar urna. Aliquam id velit lacus. </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p> Morbi ornare tellus at elit ultrices id dignissim lorem elementum. Sed eget nisl at justo
                      condimentum dapibus. Fusce eros justo, pellentesque non euismod ac, rutrum sed quam.
                      Ut non mi tortor. Vestibulum eleifend varius ullamcorper. Aliquam erat volutpat.
                      Donec diam massa, porta vel dictum sit amet, iaculis ac massa. Sed elementum dui
                                        commodo lectus sollicitudin in auctor mauris venenatis.  </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="forth">
                          <p>  Quisque at sem turpis, id sagittis diam. Suspendisse malesuada eros posuere mauris vehicula
                      vulputate. Aliquam sed sem tortor. Quisque sed felis ut mauris feugiat iaculis nec
                      ac lectus. Sed consequat vestibulum purus, imperdiet varius est pellentesque vitae.
                      Suspendisse consequat cursus eros, vitae tempus enim euismod non. Nullam ut commodo
                                        tortor. </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card">
              <div className="header">
                <h2>Advanced Form Example With Validation</h2>
              </div>
              <div className="body wizard_validation">
                <form id="wizard_with_validation" method="POST">
                  <Tabs defaultActiveKey="Account Information" id="Account Information<">
                    <Tab eventKey="Account Information" title="Account Information" tabClassName="form_wizard_tab">
                      <div className="row clearfix">
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username *" name="username" required />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password *" name="password" id="password" required />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <input type="password" className="form-control" placeholder="Confirm Password *" name="confirm" required />
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="Profile Information" title="Profile Information" tabClassName="form_wizard_tab">
                      <fieldset>
                        <div className="row clearfix">
                          <div className="col-lg-4 col-md-12">
                            <div className="form-group">
                              <input type="text" name="name" placeholder="First Name *" className="form-control" required />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12">
                            <div className="form-group">
                              <input type="text" name="surname" placeholder="Last Name *" className="form-control" required />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12">
                            <div className="form-group">
                              <input type="email" name="email" placeholder="Email *" className="form-control" required />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input min="18" type="number" name="age" placeholder="Age *" className="form-control" required />
                              <div className="help-info">The warning step will show up if age is less than 18</div>
                            </div>
                            <div className="form-group">
                              <textarea name="address" cols="30" rows="3" placeholder="Address *" className="form-control no-resize" required></textarea>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </Tab>
                    <Tab eventKey="Terms Conditions - Finish" title="Terms Conditions - Finish" tabClassName="form_wizard_tab">
                      <fieldset>
                        <div className="form-group">
                          <div className="fancy-checkbox">
                            <label><input type="checkbox" name="acceptTerms" /><span>I agree with the Terms and Conditions.</span></label>
                          </div>
                        </div>
                      </fieldset>
                    </Tab>
                  </Tabs>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>

  );

}
export default FormWizard
