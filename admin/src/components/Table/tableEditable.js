import React from 'react';

const TableEditable = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="block-header">
					<div className="row clearfix">
						<div className="col-md-6 col-sm-12">
							<h1>Editable Table</h1>
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="/">Oculux</a></li>
									<li className="breadcrumb-item"><a href="/">Tables</a></li>
									<li className="breadcrumb-item active" aria-current="page">Editable Table</li>
								</ol>
							</nav>
						</div>
						<div className="col-md-6 col-sm-12 text-right hidden-xs">
							<a href="/" className="btn btn-sm btn-primary mr-1" title="">Create Campaign</a>
							<a href="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket"></i> Buy Now</a>
						</div>
					</div>
				</div>
				<div className="row clearfix">
					<div className="col-lg-12">
						<div className="card">
							<div className="body">
								<p>You can edit any columns except header/footer</p>
								<table id="mainTable" className="table table-hover">
									<thead>
										<tr>
											<th>Name</th>
											<th>Cost</th>
											<th>Profit</th>
											<th>Fun</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Car</td>
											<td>100</td>
											<td>200</td>
											<td>0</td>
										</tr>
										<tr>
											<td>Bike</td>
											<td>330</td>
											<td>240</td>
											<td>1</td>
										</tr>
										<tr>
											<td>Plane</td>
											<td>430</td>
											<td>540</td>
											<td>3</td>
										</tr>
										<tr>
											<td>Yacht</td>
											<td>100</td>
											<td>200</td>
											<td>0</td>
										</tr>
										<tr>
											<td>Segway</td>
											<td>330</td>
											<td>240</td>
											<td>1</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<th><strong>TOTAL</strong></th>
											<th>1290</th>
											<th>1420</th>
											<th>5</th>
										</tr>
									</tfoot>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>

	);

}
export default TableEditable
