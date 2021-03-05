import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
	render() {
		return (
			<>
				<div class="pattern">
					<span class="red"></span>
					<span class="indigo"></span>
					<span class="blue"></span>
					<span class="green"></span>
					<span class="orange"></span>
				</div>
				<div className="auth-main particles_js">
					<div className="auth_div vivify popIn">
						<div className="auth_brand">
							<Link className="navbar-brand" to="/"><img src="../assets/images/icon.svg" width="30" height="30" className="d-inline-block align-top mr-2" alt="logo" />Oculux</Link>
						</div>
						<div className="card page-400">
							<div className="body">
								<p className="lead mb-3"><span className="number left">404 </span><span className="text">Oops! <br />Page Not Found</span></p>
								<p>The page you were looking for could not be found, please <Link to="/">contact us</Link> to report this issue.</p>
								<div className="margin-top-30">
									<Link to="/" className="btn btn-round btn-default btn-block"><i className="fa fa-arrow-left"></i> <span>Go Back</span></Link>
									<Link to="/" className="btn btn-round btn-primary btn-block"><i className="fa fa-home"></i> <span>Home</span></Link>
								</div>
							</div>
						</div>
					</div>
					<div id="particles-js"></div>
				</div>
			</>
		);
	}
}
