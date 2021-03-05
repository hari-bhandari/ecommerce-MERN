import React from 'react';

const TableNormal = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="block-header">
					<div className="row clearfix">
						<div className="col-md-6 col-sm-12">
							<h1>Basic Table</h1>
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="/">Oculux</a></li>
									<li className="breadcrumb-item"><a href="/">Tables</a></li>
									<li className="breadcrumb-item active" aria-current="page">Basic Table</li>
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
					<div className="col-12">
						<div className="table-responsive">
							<table className="table table-hover table-custom spacing8">
								<thead>
									<tr>
										<th>#</th>
										<th>Team</th>
										<th>Details</th>
										<th>Sales</th>
										<th>Price</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="w60">
											<img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 rounded" />
										</td>
										<td>
											<a href="/" title="">Project 1</a>
											<p className="mb-0">Scott Ortega</p>
										</td>
										<td>
											<span>Lorem Ipsum is dummy text of the and typesetting industry.</span>
										</td>
										<td>11,200</td>
										<td>$83</td>
										<td><strong>$22,520</strong></td>
									</tr>
									<tr>
										<td className="w60">
											<img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 rounded" />
										</td>
										<td>
											<a href="/" title="">Project 2</a>
											<p className="mb-0">Louis Little</p>
										</td>
										<td>
											<span>Lorem Ipsum is simply text of the printing and typesetting industry.</span>
										</td>
										<td>11,200</td>
										<td>$66</td>
										<td><strong>$13,205</strong></td>
									</tr>
									<tr>
										<td className="w60">
											<img src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 rounded" />
										</td>
										<td>
											<a href="/" title="">Project 3</a>
											<p className="mb-0">Mike</p>
										</td>
										<td>
											<span>Lorem is simply dummy text of the printing and typesetting industry.</span>
										</td>
										<td>12,080</td>
										<td>$93</td>
										<td><strong>$17,700</strong></td>
									</tr>
									<tr>
										<td className="w60">
											<img src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 rounded" />
										</td>
										<td>
											<a href="/" title="">Project 4</a>
											<p className="mb-0">Lori Kelley</p>
										</td>
										<td>
											<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
										</td>
										<td>18,200</td>
										<td>$178</td>
										<td><strong>$17,700</strong></td>
									</tr>
									<tr>
										<td className="w60">
											<img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 rounded" />
										</td>
										<td>
											<a href="/" title="">Project 5</a>
											<p className="mb-0">David McCoy</p>
										</td>
										<td>
											<span>Lorem Ipsum is simply dummy text of the printing and industry.</span>
										</td>
										<td>12,080</td>
										<td>$93</td>
										<td><strong>$17,700</strong></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="col-12">
						<div className="table-responsive">
							<table className="table header-border table-hover table-custom spacing5">
								<thead>
									<tr>
										<th>#</th>
										<th>Product</th>
										<th>Popularity</th>
										<th>Sales</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th className="w60">1</th>
										<td>Home Decor Range</td>
										<td>
											<div className="progress progress-xxs">
												<div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{ width: "77%" }}></div>
											</div>
										</td>
										<td><span className="badge badge-primary">70%</span>
										</td>
									</tr>
									<tr>
										<th>2</th>
										<td>Bathroom Essentials</td>
										<td>
											<div className="progress progress-xxs">
												<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{ width: "77%" }}></div>
											</div>
										</td>
										<td><span className="badge badge-success">70%</span>
										</td>
									</tr>
									<tr>
										<th>3</th>
										<td>Disney Princess Pink 18' School Bag</td>
										<td>
											<div className="progress progress-xxs">
												<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{ width: "77%" }}></div>
											</div>
										</td>
										<td><span className="badge badge-dark">70%</span>
										</td>
									</tr>
									<tr>
										<th>4</th>
										<td>iPhone XS and XS Max</td>
										<td>
											<div className="progress progress-xxs">
												<div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{ width: "77%" }}></div>
											</div>
										</td>
										<td><span className="badge badge-danger">70%</span>
										</td>
									</tr>
									<tr>
										<th>5</th>
										<td>Apple Smartwatches</td>
										<td>
											<div className="progress progress-xxs">
												<div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{ width: "77%" }}></div>
											</div>
										</td>
										<td><span className="badge badge-warning">70%</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>


					<div className="col-lg-12">
						<div className="card">
							<div className="header">
								<h2>Basic Table <small>Basic example without any additional modification classes</small></h2>
							</div>
							<div className="body">
								<div className="table-responsive">
									<table className="table">
										<thead>
											<tr>
												<th>#</th>
												<th>FIRST NAME</th>
												<th>LAST NAME</th>
												<th>USERNAME</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>Mark</td>
												<td>Otto</td>
												<td>@mdo</td>
											</tr>
											<tr>
												<td>2</td>
												<td>Jacob</td>
												<td>Thornton</td>
												<td>@fat</td>
											</tr>
											<tr>
												<td>3</td>
												<td>Larry</td>
												<td>the Bird</td>
												<td>@twitter</td>
											</tr>
											<tr>
												<td>4</td>
												<td>Larry</td>
												<td>Jellybean</td>
												<td>@lajelly</td>
											</tr>
											<tr>
												<th scope="row">5</th>
												<td>Larry</td>
												<td>Kikat</td>
												<td>@lakitkat</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="card">
							<div className="header">
								<h2>Striped Rows <small>Use <code>.table-striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code></small></h2>
							</div>
							<div className="table-responsive">
								<table className="table table-striped">
									<thead>
										<tr>
											<th>#</th>
											<th>FIRST NAME</th>
											<th>LAST NAME</th>
											<th>USERNAME</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Mark</td>
											<td>Otto</td>
											<td>@mdo</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Jacob</td>
											<td>Thornton</td>
											<td>@fat</td>
										</tr>
										<tr>
											<td>3</td>
											<td>Larry</td>
											<td>the Bird</td>
											<td>@twitter</td>
										</tr>
										<tr>
											<td>4</td>
											<td>Larry</td>
											<td>Jellybean</td>
											<td>@lajelly</td>
										</tr>
										<tr>
											<td>5</td>
											<td>Larry</td>
											<td>Kikat</td>
											<td>@lakitkat</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="card">
							<div className="header">
								<h2>Bordered Table <small>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</small></h2>
							</div>
							<div className="table-responsive">
								<table className="table table-bordered">
									<thead>
										<tr>
											<th>#</th>
											<th>FIRST NAME</th>
											<th>LAST NAME</th>
											<th>USERNAME</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Mark</td>
											<td>Otto</td>
											<td>@mdo</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Jacob</td>
											<td>Thornton</td>
											<td>@fat</td>
										</tr>
										<tr>
											<td>3</td>
											<td>Larry</td>
											<td>the Bird</td>
											<td>@twitter</td>
										</tr>
										<tr>
											<td>4</td>
											<td>Larry</td>
											<td>Jellybean</td>
											<td>@lajelly</td>
										</tr>
										<tr>
											<td>5</td>
											<td>Larry</td>
											<td>Kikat</td>
											<td>@lakitkat</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="card">
							<div className="header">
								<h2>Hover Rows <small>Add <code>.table-hover</code> to enable a hover state on table rows within a <code>&lt;tbody&gt;</code>.</small></h2>
							</div>
							<div className="body">
								<div className="table-responsive">
									<table className="table table-hover">
										<thead>
											<tr>
												<th>#</th>
												<th>FIRST NAME</th>
												<th>LAST NAME</th>
												<th>USERNAME</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>Mark</td>
												<td>Otto</td>
												<td>@mdo</td>
											</tr>
											<tr>
												<td>2</td>
												<td>Jacob</td>
												<td>Thornton</td>
												<td>@fat</td>
											</tr>
											<tr>
												<td>3</td>
												<td>Larry</td>
												<td>the Bird</td>
												<td>@twitter</td>
											</tr>
											<tr>
												<td>4</td>
												<td>Larry</td>
												<td>Jellybean</td>
												<td>@lajelly</td>
											</tr>
											<tr>
												<td>5</td>
												<td>Larry</td>
												<td>Kikat</td>
												<td>@lakitkat</td>
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
export default TableNormal
