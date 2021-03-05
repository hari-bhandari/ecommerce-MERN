import React from 'react';
import Nestable from 'react-nestable';

const Taskboard = () => {
  const itemsPlanned = [
    {
      id: 0, text: <>
        <div className="dd-handle d-flex justify-content-between align-items-center">
          <div>Themeforest update</div>
          <div className="action">
            <a href="/"><i className="fa fa-edit" /></a>
            <a href="/"><i className="fa fa-trash-o" /></a>
          </div>
        </div>
        <div className="dd-content p-15">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <ul className="list-unstyled d-flex bd-highlight align-items-center">
            <li className="mr-2 flex-grow-1 bd-highlight"><span className="badge badge-default"><i className="fa fa-clock-o" /> 18 Jan</span></li>
            <li className="ml-3 bd-highlight"><a href="/" className="text-muted"><i className="zmdi zmdi-comments" /> 5</a></li>
            <li className="ml-3 bd-highlight"><a href="/" className="text-muted"><i className="zmdi zmdi-check-square" /> 11</a></li>
            <li className="ml-3 bd-highlight">
              <ul className="list-unstyled sm team-info margin-0">
                <li><img src="../assets/images/xs/avatar7.jpg" alt="Avatar" /></li>
                <li><img src="../assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
              </ul>
            </li>
          </ul>
        </div>
      </>
    },
    {
      id: 1, text: <>
        <div className="dd-handle d-flex justify-content-between align-items-center">
          <div>Sites to review</div>
          <div className="action">
            <a href="/"><i className="fa fa-edit" /></a>
            <a href="/"><i className="fa fa-trash-o" /></a>
          </div>
        </div>
        <div className="dd-content p-15">
          <p>Contrary to popular belief, Lorem Ipsum is not simply.</p>
          <ul className="list-unstyled d-flex bd-highlight align-items-center">
            <li className="mr-2 flex-grow-1 bd-highlight"><span className="badge badge-default"><i className="fa fa-clock-o" /> 28 Jan</span></li>
            <li className="ml-3 bd-highlight"><a href="/" className="text-muted"><i className="zmdi zmdi-comments" /> 2</a></li>
            <li className="ml-3 bd-highlight"><a href="/" className="text-muted"><i className="zmdi zmdi-check-square" /> 8</a></li>
          </ul>
        </div>

      </>
    }
  ];
  const itemsInProgress = [
    {
      id: 0, text: <>
        <div className="dd-handle d-flex justify-content-between align-items-center">
          <div>Sites to review</div>
          <div className="action">
            <a href="/"><i className="fa fa-edit" /></a>
            <a href="/"><i className="fa fa-trash-o" /></a>
          </div>
        </div>
        <div className="dd-content p-15">
          <p>Contrary to popular belief, Lorem Ipsum is not simply.</p>
          <ul className="list-unstyled d-flex bd-highlight align-items-center">
            <li className="mr-2 flex-grow-1 bd-highlight"><span className="badge badge-default"><i className="fa fa-clock-o" /> 28 Jan</span></li>
            <li className="ml-3 bd-highlight"><a href="/" className="text-muted"><i className="zmdi zmdi-comments" /> 2</a></li>
            <li className="ml-3 bd-highlight"><a href="/" className="text-muted"><i className="zmdi zmdi-check-square" /> 8</a></li>
          </ul>
        </div>
      </>
    },
    {
      id: 1, text: <>
        <div className="dd-handle d-flex justify-content-between align-items-center">
          <div>Client Followup</div>
          <div className="action">
            <a href="/"><i className="fa fa-edit" /></a>
            <a href="/"><i className="fa fa-trash-o" /></a>
          </div>
        </div>
        <div className="dd-content p-15">
          <p>It is a long established fact that a reader.</p>
          <ul className="list-unstyled d-flex bd-highlight align-items-center">
            <li className="mr-2 flex-grow-1 bd-highlight"><span className="badge badge-default"><i className="fa fa-clock-o" /> 05 Feb</span></li>
          </ul>
        </div>

      </>
    },
    {
      id: 2, text: <>
        <div className="dd-handle d-flex justify-content-between align-items-center">
          <div>Client Followup</div>
          <div className="action">
            <a href="/"><i className="fa fa-edit" /></a>
            <a href="/"><i className="fa fa-trash-o" /></a>
          </div>
        </div>
        <div className="dd-content p-15">
          <p>It is a long established fact that a reader.</p>
          <ul className="list-unstyled d-flex bd-highlight align-items-center">
            <li className="mr-2 flex-grow-1 bd-highlight"><span className="badge badge-default"><i className="fa fa-clock-o" /> 05 Feb</span></li>
          </ul>
        </div>
      </>
    },
    {
      id: 3, text: <>
        <div className="dd-handle d-flex justify-content-between align-items-center">
          <div>Sites to review</div>
          <div className="action">
            <a href="/"><i className="fa fa-edit" /></a>
            <a href="/"><i className="fa fa-trash-o" /></a>
          </div>
        </div>
        <div className="dd-content p-15">
          <p>Contrary to popular belief, Lorem Ipsum is not simply.</p>
          <ul className="list-unstyled d-flex bd-highlight align-items-center">
            <li className="mr-2 flex-grow-1 bd-highlight"><span className="badge badge-default"><i className="fa fa-clock-o" /> 28 Jan</span></li>
            <li className="ml-3 bd-highlight"><a href="/" className="text-muted"><i className="zmdi zmdi-comments" /> 2</a></li>
            <li className="ml-3 bd-highlight"><a href="/" className="text-muted"><i className="zmdi zmdi-check-square" /> 8</a></li>
          </ul>
        </div>

      </>
    }
  ];
  const itemsComplete = [
    {
      id: 0, text: <>
        <div className="dd-handle d-flex justify-content-between align-items-center">
          <div>Sites to review</div>
          <div className="action">
            <a href="/"><i className="fa fa-edit" /></a>
            <a href="/"><i className="fa fa-trash-o" /></a>
          </div>
        </div>
        <div className="dd-content p-15">
          <p>Contrary to popular belief, Lorem Ipsum is not simply.</p>
          <ul className="list-unstyled d-flex bd-highlight align-items-center">
            <li className="mr-2 flex-grow-1 bd-highlight"><span className="badge badge-default"><i className="fa fa-clock-o" /> 28 Jan</span></li>
            <li className="ml-3 bd-highlight"><a href="/" className="text-muted"><i className="zmdi zmdi-comments" /> 2</a></li>
            <li className="ml-3 bd-highlight"><a href="/" className="text-muted"><i className="zmdi zmdi-check-square" /> 8</a></li>
          </ul>
        </div>
      </>
    },
    {
      id: 1, text: <>
        <div className="dd-handle d-flex justify-content-between align-items-center">
          <div>Client Followup</div>
          <div className="action">
            <a href="/"><i className="fa fa-edit" /></a>
            <a href="/"><i className="fa fa-trash-o" /></a>
          </div>
        </div>
        <div className="dd-content p-15">
          <p>It is a long established fact that a reader.</p>
          <ul className="list-unstyled d-flex bd-highlight align-items-center">
            <li className="mr-2 flex-grow-1 bd-highlight"><span className="badge badge-default"><i className="fa fa-clock-o" /> 05 Feb</span></li>
          </ul>
        </div>

      </>
    },
    {
      id: 2, text: <>
        <div className="dd-handle d-flex justify-content-between align-items-center">
          <div>Client Followup</div>
          <div className="action">
            <a href="/"><i className="fa fa-edit" /></a>
            <a href="/"><i className="fa fa-trash-o" /></a>
          </div>
        </div>
        <div className="dd-content p-15">
          <p>It is a long established fact that a reader.</p>
          <ul className="list-unstyled d-flex bd-highlight align-items-center">
            <li className="mr-2 flex-grow-1 bd-highlight"><span className="badge badge-default"><i className="fa fa-clock-o" /> 05 Feb</span></li>
          </ul>
        </div>
      </>
    },
    {
      id: 3, text: <>
        <div className="dd-handle d-flex justify-content-between align-items-center">
          <div>Sites to review</div>
          <div className="action">
            <a href="/"><i className="fa fa-edit" /></a>
            <a href="/"><i className="fa fa-trash-o" /></a>
          </div>
        </div>
        <div className="dd-content p-15">
          <p>Contrary to popular belief, Lorem Ipsum is not simply.</p>
          <ul className="list-unstyled d-flex bd-highlight align-items-center">
            <li className="mr-2 flex-grow-1 bd-highlight"><span className="badge badge-default"><i className="fa fa-clock-o" /> 28 Jan</span></li>
            <li className="ml-3 bd-highlight"><a href="/" className="text-muted"><i className="zmdi zmdi-comments" /> 2</a></li>
            <li className="ml-3 bd-highlight"><a href="/" className="text-muted"><i className="zmdi zmdi-check-square" /> 8</a></li>
          </ul>
        </div>

      </>
    }
  ];
  const itemsInComplete = [
    {
      id: 0, text: <>
        <div className="dd-handle d-flex justify-content-between align-items-center">
          <div>Sites to review</div>
          <div className="action">
            <a href="/"><i className="fa fa-edit" /></a>
            <a href="/"><i className="fa fa-trash-o" /></a>
          </div>
        </div>
        <div className="dd-content p-15">
          <p>Contrary to popular belief, Lorem Ipsum is not simply.</p>
          <ul className="list-unstyled d-flex bd-highlight align-items-center">
            <li className="mr-2 flex-grow-1 bd-highlight"><span className="badge badge-default"><i className="fa fa-clock-o" /> 28 Jan</span></li>
            <li className="ml-3 bd-highlight"><a href="/" className="text-muted"><i className="zmdi zmdi-comments" /> 2</a></li>
            <li className="ml-3 bd-highlight"><a href="/" className="text-muted"><i className="zmdi zmdi-check-square" /> 8</a></li>
          </ul>
        </div>
      </>
    },
    {
      id: 1, text: <>
        <div className="dd-handle d-flex justify-content-between align-items-center">
          <div>Client Followup</div>
          <div className="action">
            <a href="/"><i className="fa fa-edit" /></a>
            <a href="/"><i className="fa fa-trash-o" /></a>
          </div>
        </div>
        <div className="dd-content p-15">
          <p>It is a long established fact that a reader.</p>
          <ul className="list-unstyled d-flex bd-highlight align-items-center">
            <li className="mr-2 flex-grow-1 bd-highlight"><span className="badge badge-default"><i className="fa fa-clock-o" /> 05 Feb</span></li>
          </ul>
        </div>

      </>
    },
    {
      id: 2, text: <>
        <div className="dd-handle d-flex justify-content-between align-items-center">
          <div>Client Followup</div>
          <div className="action">
            <a href="/"><i className="fa fa-edit" /></a>
            <a href="/"><i className="fa fa-trash-o" /></a>
          </div>
        </div>
        <div className="dd-content p-15">
          <p>It is a long established fact that a reader.</p>
          <ul className="list-unstyled d-flex bd-highlight align-items-center">
            <li className="mr-2 flex-grow-1 bd-highlight"><span className="badge badge-default"><i className="fa fa-clock-o" /> 05 Feb</span></li>
          </ul>
        </div>
      </>
    }
  ];
  const renderItemsPlanned = ({ item }) => item.text;

  return (
    <div className="container-fluid">
      <div className="block-header">
        <div className="row clearfix">
          <div className="col-md-6 col-sm-12">
            <h2>Taskboard</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Oculux</a></li>
                <li className="breadcrumb-item"><a href="/">Project</a></li>
                <li className="breadcrumb-item active" aria-current="page">Taskboard</li>
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
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card">
            <div className="body taskboard b-cyan planned_task">
              <h6 className="font300 mb-3">Planned <span className="float-right">02</span></h6>
              <div className="dd" data-plugin="nestable">
                <ol className="dd-list">
                  <Nestable
                    items={itemsPlanned}
                    renderItem={renderItemsPlanned}
                  />
                </ol>
              </div>
              <button className="btn btn-primary btn-block" type="button">ADD NEW</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card">
            <div className="body taskboard b-orange progress_task">
              <h6 className="font300 mb-3">In progress <span className="float-right">04</span></h6>
              <div className="dd" data-plugin="nestable">
                <ol className="dd-list">
                  <Nestable
                    items={itemsInProgress}
                    renderItem={renderItemsPlanned}
                  />
                </ol>
              </div>
              <button className="btn btn-primary btn-block" type="button">ADD NEW</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card">
            <div className="body taskboard b-green completed_task">
              <h6 className="font300 mb-3">Complete <span className="float-right">03</span></h6>
              <div className="dd" data-plugin="nestable">
                <Nestable
                  items={itemsComplete}
                  renderItem={renderItemsPlanned}
                />
              </div>
              <button className="btn btn-primary btn-block" type="button">ADD NEW</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card">
            <div className="body taskboard b-red incompleted_task">
              <h6 className="font300 mb-3">In Complete <span className="float-right">02</span></h6>
              <div className="dd" data-plugin="nestable">
                <Nestable
                  items={itemsInComplete}
                  renderItem={renderItemsPlanned}
                />
              </div>
              <button className="btn btn-primary btn-block" type="button">ADD NEW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Taskboard;