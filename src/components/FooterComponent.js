import React, {Component} from 'react';

class Footer extends Component {
	render() {
		return (
			<React.Fragment>
				<br className="d-xs-block d-sm-none"/>
				<div className="footer" align='center' >
					<p style={{fontStyle: 'italic', color: 'white'}}>All Credit and Debit cards are accepted! </p> 
				</div>
			</React.Fragment>
		);
	}
}

export default Footer;