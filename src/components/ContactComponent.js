import React, {Component} from 'react';

class ContactUs extends Component {
	render() {
		return (
			<div className='container'>

				<div className='row' align='center'>
					<div className='col-12 mt-3'>
						<h4> Contact Us </h4>
						<hr />
					</div>
				
					<div className="col-12 col-sm-6" style={{padding: 40}}>
						<div className='d-none d-lg-block'><br /></div>
						<div className='d-none d-xl-block'><br /></div>
                        <h5>Our Address</h5>
                        <address style={{fontSize: 15}} className='mt-4'>
                        Plot No. 119, New&nbsp;Vasavi&nbsp;Nagar,<br />
                        Karkhana, Secunderabad,<br />
                        500015<br />
                        <br />
                        <a href="tel:9246532770"><i className="fa fa-phone"></i> : +91 9246532770 <br /></a>
                        <a href="tel:8019032770"><i className="fa fa-phone"></i> : +91 8019032770 <br /></a>
                        </address>
                    </div>


					<div className="col-12 col-sm-6">
	                    <hr className='d-xs-block d-sm-none'/>
	                    <br className="d-xs-block d-sm-none"/>
						<h5 className="mt-3"> Map of Our Location </h5>
						<div style={{fontSize: 14, fontStyle: 'italic', color: 'gray'}}> Click on the map for directions! </div>
						<br />
                        <a href='https://goo.gl/maps/bRcGEYasuDYKXL3B9'><img src="./map.jpg" style={{width: '100%'}} className='mt-2'></img></a>
					</div>

				</div>
			</div>
		);
	}
}

export default ContactUs;