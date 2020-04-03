import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
	render() {
		return (
			<nav>
				<div className="container-flude">
					<div className="navigation-header">
						<div className="navbar-header">
							<Link to="/" className="navbar-brand">
								<h2>INDIA (Stay-Home)</h2>
							</Link>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
