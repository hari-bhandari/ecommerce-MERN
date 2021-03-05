import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ForgotPassword extends Component {
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
							<Link className="navbar-brand" to="/"><img src="../assets/images/icon.svg" width="30" height="30" className="d-inline-block align-top mr-2" alt="Logo" />Oculux</Link>
						</div>
						<div className="card forgot-pass">
							<div className="body">
								<p className="lead mb-3"><strong>Oops</strong>,<br /> forgot something?</p>
								<p>Type email to recover password.</p>
								<form className="form-auth-small" action="">
									<div className="form-group">
										<input type="password" className="form-control round" id="signup-password" placeholder="Password" />
									</div>
									<button type="submit" className="btn btn-round btn-primary btn-lg btn-block">RESET PASSWORD</button>
									<div className="bottom">
										<span className="helper-text">Know your password? <Link to="/login">Login</Link></span>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div id="particles-js"></div>
				</div>
			</>
		);
	}
}
