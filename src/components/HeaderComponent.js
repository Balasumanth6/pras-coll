import React, {Component} from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Jumbotron } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar dark expand='md'>
					<div className="container">
						

						<Nav navbar className='ml-auto mr-2'>
							<NavItem>
								<NavLink className='nav-link' to='/home'>
									<span className='fa fa-home fa-lg'></span> Home
								</NavLink>
							</NavItem>				
						</Nav>
						<div className='d-xs-block d-sm-none'>&nbsp;&nbsp;</div>
						<Nav navbar className='mr-auto'>
							<NavItem>
								<NavLink className='nav-link' to='/contactus'>
									<span className='fa fa-address-card fa'></span> Contact Us
								</NavLink>
							</NavItem>				
						</Nav>

					</div>
				</Navbar>

				<Jumbotron>
					<div className='container'>
						<div className='row row-header'>
							<div className='col-12 col-sm-6'>
								<h1> Prasanna Collections </h1>
								<p style={{fontStyle: 'italic'}}>Exclusive, Fancy and Synthetic Sarees </p>
							</div>
						</div>
					</div>
				</Jumbotron>
			</React.Fragment>
		);
	}
}

export default Header;