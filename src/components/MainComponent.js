import React, {Component} from 'react';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent.js';
import ContactUs from './ContactComponent.js';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';

class Main extends Component {
	render() {
		return(
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={() => <Home />} />
					<Route exact path='/contactus' component={() => <ContactUs />} />
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default withRouter(Main);