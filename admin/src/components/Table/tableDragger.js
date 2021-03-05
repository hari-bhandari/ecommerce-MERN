import React from 'react';

const TableDragger = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="block-header">
					<div className="row clearfix">
						<div className="col-md-6 col-sm-12">
							<h1>Table dragger</h1>
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="/">Oculux</a></li>
									<li className="breadcrumb-item"><a href="/">Tables</a></li>
									<li className="breadcrumb-item active" aria-current="page">Table dragger</li>
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
								<h2>Default <small>With no options, sort columns, handler was the first row</small></h2>
							</div>
							<div className="body">
								<table id="default-table" className="table table-striped">
									<thead>
										<tr>
											<th>Movie Title<i className="table-dragger-handle"></i></th>
											<th>Genre<i className="table-dragger-handle"></i></th>
											<th>Year<i className="table-dragger-handle"></i></th>
											<th>Gross<i className="table-dragger-handle"></i></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Star Wars</td>
											<td>Adventure, Sci-fi</td>
											<td>1977</td>
											<td>$460,935,665</td>
										</tr>
										<tr>
											<td>Howard The Duck</td>
											<td>"Comedy"</td>
											<td>1986</td>
											<td>$16,295,774</td>
										</tr>
										<tr>
											<td>American Graffiti</td>
											<td>Comedy, Drama</td>
											<td>1973</td>
											<td>$115,000,000</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="col-md-12">
						<div className="card">
							<div className="header">
								<h2>Handler <small>Specify drag handler wherever within the table</small></h2>
							</div>
							<div className="body">
								<table id="handle-table" className="table table-striped">
									<thead>
										<tr>
											<th>Movie Title <i className="table-dragger-handle handle"></i></th>
											<th>Genre</th>
											<th>Year</th>
											<th>Gross</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Star Wars</td>
											<td>Adventure, Sci-fi</td>
											<td>1977</td>
											<td>$460,935,665</td>
										</tr>
										<tr>
											<td>Howard The Duck</td>
											<td>"Comedy"</td>
											<td>1986</td>
											<td>$16,295,774</td>
										</tr>
										<tr>
											<td>American Graffiti</td>
											<td>Comedy, Drama</td>
											<td>1973</td>
											<td>$115,000,000</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="col-lg-12 col-md-12">
						<div className="card">
							<div className="header">
								<h2>Only Body <small>Setting onlyBody to true in row mode, user can only lift rows in tBody</small></h2>
							</div>
							<div className="body">
								<table id="only-bodytable" className="table table-striped">
									<thead>
										<tr>
											<th>Movie Title</th>
											<th>Genre</th>
											<th>Year</th>
											<th>Gross</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Star Wars<i className="table-dragger-handle sindu_handle"></i></td>
											<td>Adventure, Sci-fi</td>
											<td>1977</td>
											<td>$460,935,665</td>
										</tr>
										<tr>
											<td>Howard The Duck<i className="table-dragger-handle sindu_handle"></i></td>
											<td>"Comedy"</td>
											<td>1986</td>
											<td>$16,295,774</td>
										</tr>
										<tr>
											<td>American Graffiti<i className="table-dragger-handle sindu_handle"></i></td>
											<td>Comedy, Drama</td>
											<td>1973</td>
											<td>$115,000,000</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="card">
							<div className="header">
								<h2>Sort Rows <small>Sort rows, handler was the first column</small></h2>
							</div>
							<div className="body">
								<table id="row-table" className="table table-striped">
									<thead>
										<tr>
											<th>Movie Title<i className="table-dragger-handle"></i></th>
											<th>Genre</th>
											<th>Year</th>
											<th>Gross</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Star Wars<i className="table-dragger-handle"></i></td>
											<td>Adventure, Sci-fi</td>
											<td>1977</td>
											<td>$460,935,665</td>
										</tr>
										<tr>
											<td>Howard The Duck<i className="table-dragger-handle"></i></td>
											<td>"Comedy"</td>
											<td>1986</td>
											<td>$16,295,774</td>
										</tr>
										<tr>
											<td>American Graffiti<i className="table-dragger-handle"></i></td>
											<td>Comedy, Drama</td>
											<td>1973</td>
											<td>$115,000,000</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="card">
							<div className="header">
								<h2>Free <small>After mousedown, move mouse horizontally or vertically, see what happens. Don't forget to specify drag handler</small></h2>
							</div>
							<div className="body">
								<table id="free-table" className="table table-striped">
									<thead>
										<tr>
											<th>Movie Title</th>
											<th>Genre</th>
											<th>Year</th>
											<th>Gross</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Star Wars<i className="table-dragger-handle handle"></i></td>
											<td>Adventure, Sci-fi</td>
											<td>1977</td>
											<td>$460,935,665</td>
										</tr>
										<tr>
											<td>Howard The Duck</td>
											<td>"Comedy"</td>
											<td>1986</td>
											<td>$16,295,774</td>
										</tr>
										<tr>
											<td>American Graffiti</td>
											<td>Comedy, Drama</td>
											<td>1973</td>
											<td>$115,000,000</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div >
		</>

	);

}
export default TableDragger
