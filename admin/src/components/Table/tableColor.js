import React from 'react';

const TableColor = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="block-header">
					<div className="row clearfix">
						<div className="col-md-6 col-sm-12">
							<h1>Color Table</h1>
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="/">Oculux</a></li>
									<li className="breadcrumb-item"><a href="/">Tables</a></li>
									<li className="breadcrumb-item active" aria-current="page">Color Table</li>
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
					<div className="col-md-12">
						<div className="card">
							<div className="header">
								<h2>Table Dark<small>Add Class <code>.table-dark .table-striped</code></small></h2>
							</div>
							<div className="body">
								<div className="table-responsive">
									<table className="table m-b-0 table-striped table-dark">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">First</th>
												<th scope="col">Last</th>
												<th scope="col">Handle</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row">1</th>
												<td>Mark</td>
												<td>Otto</td>
												<td>@mdo</td>
											</tr>
											<tr>
												<th scope="row">2</th>
												<td>Jacob</td>
												<td>Thornton</td>
												<td>@fat</td>
											</tr>
											<tr>
												<th scope="row">3</th>
												<td>Larry</td>
												<td>the Bird</td>
												<td>@twitter</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-12">
						<div className="card">
							<div className="header">
								<h2>Table head Light<small>Add Class <code>.thead-light</code></small></h2>
							</div>
							<div className="body">
								<div className="table-responsive">
									<table className="table m-b-0">
										<thead className="thead-light">
											<tr>
												<th scope="col">#</th>
												<th scope="col">First</th>
												<th scope="col">Last</th>
												<th scope="col">Handle</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row">1</th>
												<td>Mark</td>
												<td>Otto</td>
												<td>@mdo</td>
											</tr>
											<tr>
												<th scope="row">2</th>
												<td>Jacob</td>
												<td>Thornton</td>
												<td>@fat</td>
											</tr>
											<tr>
												<th scope="row">3</th>
												<td>Larry</td>
												<td>the Bird</td>
												<td>@twitter</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row clearfix">
					<div className="col-md-12">
						<div className="card">
							<div className="header">
								<h2>Solid Color background <small>Add Class <code>.bg-pink</code></small></h2>
							</div>
							<div className="body">
								<div className="table-responsive">
									<table className="table">
										<thead>
											<tr>
												<th>#</th>
												<th>First Name</th>
												<th>Last Name</th>
												<th>Class name</th>
											</tr>
										</thead>
										<tbody>
											<tr className="bg-blue text-light">
												<th scope="row">1</th>
												<td>Mark</td>
												<td>Otto</td>
												<td>.bg-blue</td>
											</tr>
											<tr className="bg-cyan text-light">
												<th scope="row">2</th>
												<td>Jacob</td>
												<td>Thornton</td>
												<td>.bg-cyan</td>
											</tr>
											<tr className="bg-orange text-light">
												<th scope="row">3</th>
												<td>Larry</td>
												<td>the Bird</td>
												<td>.bg-orange</td>
											</tr>
											<tr className="bg-pink text-light">
												<th scope="row">4</th>
												<td>Larry</td>
												<td>Jellybean</td>
												<td>.bg-pink</td>
											</tr>
											<tr className="bg-purple text-light">
												<th scope="row">5</th>
												<td>Larry</td>
												<td>Kikat</td>
												<td>.bg-purple</td>
											</tr>
										</tbody>
									</table>
								</div>
								<h6 className="m-t-30">First Column background</h6>
								<div className="table-responsive">
									<table className="table">
										<thead>
											<tr>
												<th>#</th>
												<th>First Name</th>
												<th>Last Name</th>
												<th>Class name</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="bg-blue text-light">1</td>
												<td>Mark</td>
												<td>Otto</td>
												<td>.bg-blue</td>
											</tr>
											<tr>
												<td className="bg-cyan text-light">2</td>
												<td>Jacob</td>
												<td>Thornton</td>
												<td>.bg-cyan</td>
											</tr>
											<tr>
												<td className="bg-orange text-light">3</td>
												<td>Larry</td>
												<td>the Bird</td>
												<td>.bg-orange</td>
											</tr>
											<tr>
												<td className="bg-pink text-light">4</td>
												<td>Larry</td>
												<td>Jellybean</td>
												<td>.bg-pink</td>
											</tr>
											<tr>
												<td className="bg-purple text-light">5</td>
												<td>Larry</td>
												<td>Kikat</td>
												<td>.bg-purple</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row clearfix">
					<div className="col-md-12">
						<div className="card">
							<div className="header">
								<h2>Bootstrap 4 Table background <small>The contextual classes that can be used are:</small></h2>
							</div>
							<div className="body">
								<div className="table-responsive">
									<table className="table table-striped table-bordered">
										<thead>
											<tr>
												<th>Class</th>
												<th>Description</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td><code className="w3-codespan">.table-primary</code></td>
												<td>Blue: Indicates an important action</td>
											</tr>
											<tr>
												<td><code className="w3-codespan">.table-success</code></td>
												<td>Green: Indicates a successful or positive action</td>
											</tr>
											<tr>
												<td><code className="w3-codespan">.table-danger</code></td>
												<td>Red: Indicates a dangerous or potentially negative action</td>
											</tr>
											<tr>
												<td><code className="w3-codespan">.table-info</code></td>
												<td>Light blue: Indicates a neutral informative change or action</td>
											</tr>
											<tr>
												<td><code className="w3-codespan">.table-warning</code></td>
												<td>Orange: Indicates a warning that might need attention</td>
											</tr>
											<tr>
												<td><code className="w3-codespan">.table-active</code></td>
												<td>Grey: Applies the hover color to the table row or table cell</td>
											</tr>
											<tr>
												<td><code className="w3-codespan">.table-secondary</code></td>
												<td>Grey: Indicates a slightly less important action</td>
											</tr>
											<tr>
												<td><code className="w3-codespan">.table-light</code></td>
												<td>Light grey table or table row background</td>
											</tr>
											<tr>
												<td><code className="w3-codespan">.table-dark</code></td>
												<td>Dark grey table or table row background</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</>

	);

}
export default TableColor
