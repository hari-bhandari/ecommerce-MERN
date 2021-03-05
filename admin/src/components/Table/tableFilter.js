import React, { useState } from 'react';

const TableFilter = () => {
	const [status, setStatus] = useState('all')
	return (
		<>
			<div className="container-fluid">
				<div className="block-header">
					<div className="row clearfix">
						<div className="col-md-6 col-sm-12">
							<h1>Table Filter</h1>
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="/">Oculux</a></li>
									<li className="breadcrumb-item"><a href="/">Tables</a></li>
									<li className="breadcrumb-item active" aria-current="page">Table Filter</li>
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
							<div className="text-left">
								<button type="button" className="btn btn-sm mb-1 btn-filter bg-default mr-1" data-target="all" onClick={() => setStatus('all')}>All</button>
								<button type="button" className="btn btn-sm mb-1 btn-filter bg-green mr-1" data-target="approved" onClick={() => setStatus('approved')}>Approved</button>
								<button type="button" className="btn btn-sm mb-1 btn-filter bg-orange mr-1" data-target="suspended" onClick={() => setStatus('suspended')}>Suspended</button>
								<button type="button" className="btn btn-sm mb-1 btn-filter bg-azura mr-1" data-target="pending" onClick={() => setStatus('pending')}>Pending</button>
								<button type="button" className="btn btn-sm mb-1 btn-filter bg-blush mr-1" data-target="blocked" onClick={() => setStatus('blocked')}>Blocked</button>
							</div>
							<table className="table table-hover table-custom spacing8 mb-0">
								<tbody>
									{(status === 'all' || status === 'approved') && <>
										<tr data-status="approved">
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
										<tr data-status="approved">
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
									</>}

									{(status === 'all' || status === 'suspended') &&
										<tr data-status="suspended">
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
									}
									{(status === 'all' || status === 'blocked') &&
										<tr data-status="blocked">
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
									}
									{(status === 'all' || status === 'pending') &&
										<tr data-status="pending">
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
										</tr>}
								</tbody>
							</table>
						</div>
					</div>
				</div>

			</div>
		</>

	);

}
export default TableFilter
