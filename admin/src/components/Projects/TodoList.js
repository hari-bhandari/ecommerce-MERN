import React from 'react';

const TodoList = () => {
  return (
    <div className="container-fluid">
      <div className="block-header">
        <div className="row clearfix">
          <div className="col-md-6 col-sm-12">
            <h2>Todo List</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">Oculux</li>
                <li className="breadcrumb-item">Project</li>
                <li className="breadcrumb-item active" aria-current="page">Todo List</li>
              </ol>
            </nav>
          </div>
          <div className="col-md-6 col-sm-12 text-right hidden-xs">
            <span className="btn btn-sm btn-primary mr-1" title>Create Campaign</span>
            <a href="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket" /> Buy Now</a>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12">
          <div className="card">
            <div className="table-responsive">
              <table className="table table-hover table-custom spacing5">
                <thead>
                  <tr>
                    <th><a href="/" className="btn btn-info btn-sm">Add New</a></th>
                    <th className="w60 text-right">Due</th>
                    <th className="w100">Priority</th>
                    <th className="w60"><i className="icon-user" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label className="fancy-checkbox">
                        <input type="checkbox" name="checkbox" defaultChecked />
                        <span>Product Event at New York</span>
                      </label>
                    </td>
                    <td className="text-right">Feb 12-2019</td>
                    <td><span className="badge badge-danger ml-0 mr-0">HIGH</span></td>
                    <td>
                      <div className="avtar-pic w30 bg-red" data-toggle="tooltip" data-placement="top" title data-original-title="Avatar Name"><span>SS</span></div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="fancy-checkbox">
                        <input type="checkbox" name="checkbox" />
                        <span>Product Event for new product</span>
                      </label>
                    </td>
                    <td className="text-right">Feb 18-2019</td>
                    <td><span className="badge badge-warning ml-0 mr-0">MED</span></td>
                    <td>
                      <img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title alt="Avatar" className="w30 rounded" data-original-title="Avatar Name" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="fancy-checkbox">
                        <input type="checkbox" name="checkbox" defaultChecked />
                        <span>Meeting with Team</span>
                      </label>
                    </td>
                    <td className="text-right">March 02-2019</td>
                    <td><span className="badge badge-success ml-0 mr-0">High</span></td>
                    <td>
                      <div className="avtar-pic w30 bg-indigo" data-toggle="tooltip" data-placement="top" title data-original-title="Avatar Name"><span>JK</span></div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="fancy-checkbox">
                        <input type="checkbox" name="checkbox" defaultChecked />
                        <span>Product Event for new product</span>
                      </label>
                    </td>
                    <td className="text-right">March 20-2019</td>
                    <td><span className="badge badge-warning ml-0 mr-0">MED</span></td>
                    <td>
                      <img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title alt="Avatar" className="w30 rounded" data-original-title="Avatar Name" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="fancy-checkbox">
                        <input type="checkbox" name="checkbox" />
                        <span>Product Event for new product</span>
                      </label>
                    </td>
                    <td className="text-right">March 28-2019</td>
                    <td><span className="badge badge-success ml-0 mr-0">LOW</span></td>
                    <td>
                      <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title alt="Avatar" className="w30 rounded" data-original-title="Avatar Name" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="fancy-checkbox">
                        <input type="checkbox" name="checkbox" />
                        <span>Campaign performance tracking</span>
                      </label>
                    </td>
                    <td className="text-right">Apr 1</td>
                    <td><span className="badge badge-danger ml-0 mr-0">HIGH</span></td>
                    <td>
                      <img src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title alt="Avatar" className="w30 rounded" data-original-title="Avatar Name" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="fancy-checkbox">
                        <input type="checkbox" name="checkbox" defaultChecked />
                        <span>Campaign Launch!</span>
                      </label>
                    </td>
                    <td className="text-right">May 08</td>
                    <td><span className="badge badge-warning ml-0 mr-0">MED</span></td>
                    <td>
                      <div className="avtar-pic w30 bg-green" data-toggle="tooltip" data-placement="top" title data-original-title="Avatar Name"><span>SP</span></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList;