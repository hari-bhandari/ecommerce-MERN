import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Maintenance extends Component {
	render() {
		return (
			<div id="wrapper">
				<div className="vertical-align-wrap">
					<div className="vertical-align-middle maintenance">
						<div className="text-center">
							<article>
								<h1>We&rsquo;ll be back soon!</h1>
								<div>
									<p>Sorry for the inconvenience<br /> but we&rsquo;re performing some maintenance at the moment.<br /> If you need to you can always <Link to="/">contact us</Link>, otherwise we&rsquo;ll be back online shortly!</p>
									<p>&mdash; The Team</p>
								</div>
							</article>
							<div className="margin-top-30">
								<Link to="/" className="mr-1 btn btn-default"><i className="fa fa-arrow-left"></i><span>Go Back</span></Link>
								<Link to="/" className="btn btn-info"><i className="fa fa-home"></i><span>Home</span></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
